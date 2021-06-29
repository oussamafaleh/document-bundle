<?php

namespace App\Manager;


use App\Entity\Rule;
use App\Entity\Template;
use App\Event\RuleEvent\FileEvent;
use App\RuleExpressionLanguage\RuleExpressionLanguage;
use App\Entity\Demo;
use App\Entity\Document;
use App\Entity\Folder;
use App\Entity\Item;
use App\Entity\User;
use App\Entity\UserItemProperty;
use App\Utils\MyTools;
use DateTime;
use Doctrine\ORM\EntityManager;
use Exception;
use PhpOffice\PhpWord\IOFactory;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\ResponseHeaderBag;
use Symfony\Component\HttpFoundation\File\MimeType\FileinfoMimeTypeGuesser;
use Symfony\Component\HttpFoundation\BinaryFileResponse;

use Symfony\Component\HttpFoundation\File\File;

use Symfony\Component\Security\Core\Security;
use Elasticsearch\ClientBuilder;

use thiagoalessio\TesseractOCR\TesseractOCR;


class FileManager extends AbstractManager
{

    /** @var string */
    private $itemCode;

    /** @var string */
    private $userCode;

    /** @var string */
    private $parentCode;

    /**
     * @var FolderManager
     */
    private $folderManager;

    /**
     * @var ItemManager
     */
    private $itemManager;

    private $indexName;
    private $es_config;
    private $attachment;
    private $security;
    private $es_port;
    private $es_host;

    public function __construct(EntityManager $entityManager, $targetDirectory, FolderManager $folderManager, ItemManager $itemManager, $indexName, $es_port, $es_host, $attachment, Security $security)
    {
        parent::__construct($entityManager);
        $this->targetDirectory = $targetDirectory;
        $this->folderManager = $folderManager;
        $this->itemManager = $itemManager;

        $this->indexName = $indexName;
        $this->es_port = $es_port;
        $this->es_host = $es_host;
        $this->attachment = $attachment;
        $this->security = $security;


    }


    public function getIndexName()
    {
        return $this->indexName;
    }

    public function getAttachment()
    {
        return $this->attachment;
    }


    public function init($settings = [])
    {
        parent::setSettings($settings);

        if ($this->getUserCode()) {

            // find existing User
            $this->user = $this->apiEntityManager
                ->getRepository(User::class)
                ->findOneBy(['code' => $this->getUserCode()]);

            if (!$this->user instanceof User) {
                throw new Exception('UNKNOWN_USER');
            }
        } elseif ($this->security->getUser()) {
            $this->user = $this->security->getUser();
        }
        if ($this->getParentCode()) {

            // find existing Parent
            $this->parent = $this->apiEntityManager
                ->getRepository(Folder::class)
                ->findOneBy(['code' => $this->getParentCode()]);

            if (!$this->parent instanceof Folder) {
                throw new Exception('UNKNOWN_PARENT');
            }
        }

        if ($this->getItemCode()) {

            // find existing Item
            $this->item = $this->apiEntityManager
                ->getRepository(Item::class)
                ->findOneBy(['code' => $this->getItemCode()]);

            if (!$this->item instanceof Item) {
                throw new Exception('UNKNOWN_ITEM');
            }
        }


        return $this;
    }


    /**
     * @return string
     */
    public function getUserCode()
    {
        return $this->userCode;
    }


    /**
     * @return string
     */
    public function getParentCode()
    {
        return $this->parentCode;
    }

    /**
     * @return string
     */
    public function getItemCode()
    {
        return $this->itemCode;
    }

    /**
     * @param string $itemCode
     */
    public function setItemCode(string $itemCode)
    {
        $this->itemCode = $itemCode;
    }


    /**
     * @param string $userCode
     */
    public function setUserCode(string $userCode)
    {
        $this->userCode = $userCode;
    }

    /**
     * @param string $parentCode
     */
    public function setParentCode(string $parentCode)
    {
        $this->parentCode = $parentCode;
    }

    public function getTargetDirectory()
    {
        return $this->targetDirectory;
    }

    public function create($RequestFile)
    {

        $fileUniquness = $this->folderManager->init(['parentCode' => $this->getParentCode(), 'userCode' => $this->getUserCode()])
            ->checkSubItemsLabelUniqueness($RequestFile->getClientOriginalName());
        if (!$fileUniquness) {
            throw new Exception('FOUND_ITEM');
        }

        $file = $this->IndexUploadDoc($RequestFile);


        $connection = $this->apiEntityManager->getConnection();
        $connection->beginTransaction();
        $this->document = new Document();
        $this->document->setLabel($file['name'])
            ->setCode($file['code'])
            ->setExtension($file['extention'])
            ->setSize(
                $this->convetFileSize($file['size']))
            ->setParent($this->parent);
        $this->apiEntityManager->persist($this->document);

        $this->user_item_property = new UserItemProperty();
        $this->user_item_property->setItem($this->document)
            ->setUser($this->user)
            ->setIsTagged(false)
            ->addRoles(["ROLE_OWNER"]);
        $this->apiEntityManager->persist($this->user_item_property);
        $this->parent->setUpdatedAt(new DateTime());
        $this->apiEntityManager->persist($this->parent);
        $this->apiEntityManager->flush();
        $this->upload($RequestFile);
        $connection->commit();


        return [
            'messages' => 'create_success',
            'data' => [
                'code' => $this->document->getCode(),
                'label' => $this->document->getLabel()
            ]];
    }

    public function upload($file)
    {
        $fileName = explode(".", $file->getClientOriginalName());
        $fileCode = $fileName[0] . MyTools::GUIDv4() . "." . $fileName[1];
       // $size = $file->getSize();
        $name = $file->getClientOriginalName();
        $file->move($this->getTargetDirectory(), $fileCode);

        return [
            "name" => $name,
            "code" => $fileCode,
            "extention" => $fileName[1],
            //"size" => $size
        ];
    }


    public function convetFileSize(int $size)
    {
        $units = ["Byte", "Kb", "Mb"];
        foreach ($units as $unit) {
            if (($size / 1000) < 1) {
                return strval($size) . $unit;
            }
            $size = $size / 1000;
        }
        return strval($size) . "Gb";
    }


    public function IndexUploadDoc($file)
    {
        $fileName = explode(".", $file->getClientOriginalName());
        $fileCode = $fileName[0] . MyTools::GUIDv4() . "." . $fileName[1];
        $size = $file->getSize();
        $name = $file->getClientOriginalName();
        $extension = $fileName[1];
        $user_code = $this->user->getCode();

        $array = [
            $this->es_host . ':' . $this->es_port
        ];

        $client = ClientBuilder::create()
            ->setHosts((array)$array[0])
            ->build();


        $created_at = date('d-m-y h:i:s');


        if ($extension === "png" || $extension === "PNG" || $extension === "jpg" || $extension === "JPG") {


            $content = $this->ocrImage($file);
            $params = [
                'index' => $this->getIndexName(),
                'id' => $fileCode,
                'refresh' => 'wait_for',
                'body' => [
                    'extension' => $extension,
                    'size' => $size,
                    'label' => $name,
                    'attachment' => [
                        'content' => $content,
                    ],
                    'created_at' => $created_at,
                    'update_at' => null,
                    'type' => 'document',
                    'user_code' => $user_code
                ]
            ];


        } else {
            $params = [
                'index' => $this->getIndexName(),
                'id' => $fileCode,
                'refresh' => 'wait_for',
                'pipeline' => $this->getAttachment(),  // <----- here
                'body' => [
                    'data' => base64_encode(file_get_contents($file)),
                    'label' => $name,
                    'size' => $size,
                    'created_at' => $created_at,
                    'update_at' => "",
                    "extension" => $extension,
                    'type' => 'document',
                    'user_code' => $user_code,
                ]

            ];

        }

        $index = $client->index($params);
        return [
            "index" => $index,
            "name" => $name,
            "code" => $fileCode,
            "extention" => $fileName[1],
            "size" => $size
        ];
    }

    public function download($item_code)
    {

        $file = $this->apiEntityManager
            ->getRepository(Document::class)->findOneBy(['code' => $item_code]);

        $targetDirectory = $this->getTargetDirectory();

        if (!$file) {
            return ' file not found!';

        }


        $filename = $file->getCode();

        // This should return the file to the browser as response
        $response = new BinaryFileResponse($targetDirectory . $filename);

        // To generate a file download, you need the mimetype of the file
        $mimeTypeGuesser = new FileinfoMimeTypeGuesser();
        // Set the mimetype with the guesser or manually
        if ($mimeTypeGuesser->isSupported()) {
            // Guess the mimetype of the file according to the extension of the file
            $response->headers->set('Content-Type', $mimeTypeGuesser->guess($targetDirectory . $filename));
        } else {
            // Set the mimetype of the file manually, in this case for a text file is text/plain
            $response->headers->set('Content-Type', 'text/plain');
        }

        // $originalName= $file->getClientOriginalName();


        // Set content disposition inline of the file
        $response->setContentDisposition(
            ResponseHeaderBag::DISPOSITION_ATTACHMENT,
            $filename
        );
        return $response;
    }


    public function openBrowser($item_code)
    {

        $file = $this->apiEntityManager
            ->getRepository(Document::class)->findOneBy(['code' => $item_code]);

        $targetDirectory = $this->getTargetDirectory();

        if (!$file) {
            return ' file not found!';

        }

        $filename = $file->getCode();

        $response = new BinaryFileResponse($targetDirectory . $filename);

        $mimeTypeGuesser = new FileinfoMimeTypeGuesser();
        if ($mimeTypeGuesser->isSupported()) {
            $response->headers->set('Content-Type', $mimeTypeGuesser->guess($targetDirectory . $filename));
        } else {
            $response->headers->set('Content-Type', 'text/plain');
        }

        // $originalName= $filename->getClientOriginalName();

        // Set content disposition inline of the file
        $response->setContentDisposition(
            ResponseHeaderBag::DISPOSITION_INLINE,
            $filename
        );

        return $response;
    }


    public function ocrImage($file)
    {






        $tess = (new TesseractOCR($file))->lang('eng', 'jpn', 'spa')->run();
        return $tess;

    }


    public function LocationFile($item_code)
    {

        /*
     $fileExist =$this->itemManager->init([$item_code=> $this->getItemCode]);
     var_dump($fileExist);

     */

        $file = $this->apiEntityManager
            ->getRepository(Document::class)->findOneBy(['code' => $item_code]);


        if (!$file) {
            return ' file not found!';

        }


        return $file->getCode();
    }


    public function readDoc($item_code)
    {


        $targetDirectory = $this->getTargetDirectory();
        $filename = $targetDirectory . $item_code;

        $objReader = IOFactory::createReader("Word2007");

        $phpWord = $objReader->load($filename);
        $objWriter = IOFactory::createWriter($phpWord, 'HTML');
        /*
            $fileName= explode(".", $item_code->getClientOriginalName());
            $rest = $fileName[0];
        */


        $rest = substr($item_code, 0, -4);
        $docname = $rest . "html";

        $filePath = $targetDirectory . $docname;

        $objWriter->save($filePath);

        return ['docname' => $docname];
    }

    public function DocToHTML($item_code)
    {


        $targetDirectory = $this->getTargetDirectory();
        $filename = $targetDirectory . $item_code;

        $objReader = IOFactory::createReader("Word2007");

        $phpWord = $objReader->load($filename);
        $objWriter = IOFactory::createWriter($phpWord, 'HTML');

        $content = str_replace("<body>\n", "", $objWriter->getWriterPart('Body')->write());
        $content = str_replace("\n</body>\n", "", $content);
        return ['docContent' => $content];

    }



    public function openDocument($item_code)
    {


        /*
         $fileExist =$this->itemManager->init([$item_code=> $this->getItemCode]);
         var_dump($fileExist);

         */

        $file = $this->apiEntityManager
            ->getRepository(Document::class)->findOneBy(['code' => $item_code]);


        if ($file->getExtension() == "docx") {

            return $this->readDoc($item_code);


        } else
            return ['docname' => $item_code];
    }
    public function saveTemplate($RequestFile)
    {

        $fileUniquness = $this->folderManager->init(['parentCode' => $this->getParentCode(), 'userCode' => $this->getUserCode()])
            ->checkSubItemsLabelUniqueness($RequestFile->getClientOriginalName());
        if (!$fileUniquness) {
            throw new Exception('FOUND_ITEM');
        }
        $file = $this->upload($RequestFile);
        $connection = $this->apiEntityManager->getConnection();
        $connection->beginTransaction();
        $this->document = new Template();
        $this->document->setLabel($file['name'])
            ->setCode($file['code'])
            ->setParent($this->parent);
        $this->apiEntityManager->persist($this->document);

        $this->user_item_property = new UserItemProperty();
        $this->user_item_property->setItem($this->document)
            ->setUser($this->user)
            ->setIsTagged(false)
            ->addRoles(["ROLE_OWNER"]);
        $this->apiEntityManager->persist($this->user_item_property);
        $this->parent->setUpdatedAt(new DateTime());
        $this->apiEntityManager->persist($this->parent);
        $this->apiEntityManager->flush();
        $connection->commit();


        return [
            'messages' => 'create_success',
            'data' => [
                'code' => $this->document->getCode(),
                'label' => $this->document->getLabel(),
            ]];
    }
    public function HTMLContent($item_code)
    {


        $targetDirectory = $this->getTargetDirectory();
        $filename = $targetDirectory . $item_code;
        //dd(file_get_contents($filename));
        return ['docContent' => file_get_contents($filename)];

    }
}
