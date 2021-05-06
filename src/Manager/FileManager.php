<?php

namespace App\Manager;



use App\Entity\Rule;
use App\Event\RuleEvent\FileEvent;
use App\RuleExpressionLanguage\RuleExpressionLanguage;
use App\Entity\Demo;
use App\Entity\Document;
use App\Entity\Folder;
use App\Entity\Item;
use App\Entity\User;
use App\Entity\UserItemProperty;
use App\Utils\MyTools;
use Doctrine\ORM\EntityManager;
use Symfony\Component\HttpFoundation\ResponseHeaderBag;
use Symfony\Component\HttpFoundation\File\MimeType\FileinfoMimeTypeGuesser;
use Symfony\Component\HttpFoundation\BinaryFileResponse;

use Symfony\Component\HttpFoundation\File\File;


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
//
    private $expressionLanguage;

    public function __construct(EntityManager $entityManager, $targetDirectory ,FolderManager $folderManager , ItemManager $itemManager)
    {
        parent::__construct($entityManager);
        $this->targetDirectory = $targetDirectory;
        $this->folderManager = $folderManager;
        $this->itemManager=$itemManager;

        $this->expressionLanguage = new RuleExpressionLanguage();
       
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
                throw new \Exception('UNKNOWN_USER');
            }
        }
        if ($this->getParentCode()) {

            // find existing Parent
            $this->parent = $this->apiEntityManager
                ->getRepository(Folder::class)
                ->findOneBy(['code' => $this->getParentCode()]);

            if (!$this->parent instanceof Folder) {
                throw new \Exception('UNKNOWN_PARENT');
            }
        }

        if ($this->getItemCode()) {

            // find existing Item
            $this->item = $this->apiEntityManager
                ->getRepository(Item::class)
                ->findOneBy(['code' => $this->getItemCode()]);

            if (!$this->item instanceof Item) {
                throw new \Exception('UNKNOWN_ITEM');
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

    public function create($RequestFile )
    {

        $fileUniquness =$this->folderManager->init(['parentCode'=> $this->getParentCode(),'userCode' => $this->getUserCode()])
            ->checkSubItemsLabelUniqueness($RequestFile->getClientOriginalName());
//        if(!$fileUniquness){
//            throw new \Exception('FOUND_ITEM');
//        }
        $file =$this->upload($RequestFile);

        $connection = $this->apiEntityManager->getConnection();
        $connection->beginTransaction();
        $this->document = new Document();
        $this->document->setLabel($file['name'])
            ->setCode($file['code'])
            ->setExtension($file['extention'])
            ->setSize(
                $this->convetFileSize($file['size']) )
            ->setParent($this->parent);
        $this->apiEntityManager->persist($this->document);

//        $fileClass = $this->evaluateRule($this->document, self::classifyFileRule);
//        $this->document->setClassification($fileClass);

        $this->user_item_property = new UserItemProperty();
        $this->user_item_property->setItem($this->document)
            ->setUser($this->user)
            ->setIsTagged(false)
            ->setRoles(array("ROLE_OWNER"));
        $this->apiEntityManager->persist($this->user_item_property);
        $this->parent->setUpdatedAt(new \DateTime());
        $this->apiEntityManager->persist($this->parent);
        $this->apiEntityManager->flush();
        $connection->commit();


        return [
                'messages' => 'create_success',
                'data' => [
                    'code' => $this->document->getCode(),
                    'label' => $this->document->getLabel(),
                    'class' => $this->document->getClassification()
            ]];
    }
    public function upload( $file)
    {
        $fileName= explode(".", $file->getClientOriginalName());
        $fileCode = $fileName[0] . MyTools::GUIDv4() . "." . $fileName[1];
        $file->move($this->getTargetDirectory(), $fileCode);
        

        return [
            "name" => $file->getClientOriginalName(),
            "code" => $fileCode,
            "extention" => $fileName[1],
            "size" => $file->getSize()];
    }


    public function convetFileSize(int $size){
        $units = ["Byte","Kb","Mb"];
        foreach ( $units as $unit) {
            if( ($size / 1000) < 1 ){
                return strval($size).$unit;
            }
            $size = $size / 1000;
        }
        return strval($size) . "Gb";
    }


public function download($item_code){

       /*
       $fileExist =$this->itemManager->init([$item_code=> $this->getItemCode]);
       var_dump($fileExist);
      
       */

        $file = $this->apiEntityManager
        ->getRepository(Document::class)->findOneBy(['code' => $item_code]);
      
        $targetDirectory= $this->getTargetDirectory();

        if (!$file) {
            return ' file not found!';
         
            } 

      
        $filename=$file->getCode();
      
        // This should return the file to the browser as response
        $response = new BinaryFileResponse($targetDirectory.$filename);

        // To generate a file download, you need the mimetype of the file
        $mimeTypeGuesser = new FileinfoMimeTypeGuesser();
        // Set the mimetype with the guesser or manually
        if($mimeTypeGuesser->isSupported()){
            // Guess the mimetype of the file according to the extension of the file
            $response->headers->set('Content-Type', $mimeTypeGuesser->guess($targetDirectory.$filename));
        }else{
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

    
    public function openBrowser($item_code){

          /*
       $fileExist =$this->itemManager->init([$item_code=> $this->getItemCode]);
       var_dump($fileExist);
      
       */
      
        $file = $this->apiEntityManager
        ->getRepository(Document::class)->findOneBy(['code' => $item_code]);
        
        $targetDirectory= $this->getTargetDirectory();
        
        if (!$file) {
            return ' file not found!';
         
            } 

        $filename=$file->getCode();
      
        $response = new BinaryFileResponse($targetDirectory.$filename);

        $mimeTypeGuesser = new FileinfoMimeTypeGuesser();
        if($mimeTypeGuesser->isSupported()){
            $response->headers->set('Content-Type', $mimeTypeGuesser->guess($targetDirectory.$filename));
        }else{
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







    public function LocationFile($item_code){

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





   
    public function readDoc($item_code){


        $targetDirectory= $this->getTargetDirectory();
        $filename=$targetDirectory.$item_code;
    
        $objReader = \PhpOffice\PhpWord\IOFactory::createReader("Word2007");
        $phpWord = $objReader->load($filename);
        $objWriter = \PhpOffice\PhpWord\IOFactory::createWriter($phpWord, 'HTML');
       
        /*
            $fileName= explode(".", $item_code->getClientOriginalName());
            $rest = $fileName[0];
        */

        
        $rest = substr($item_code, 0, -4);
        $docname=$rest."html";
       
        $filePath=$targetDirectory. $docname;
      
        $objWriter->save($filePath);
      
        return ['docname' => $docname];
    
    }


   public function openDocument($item_code)
   {


      /*
       $fileExist =$this->itemManager->init([$item_code=> $this->getItemCode]);
       var_dump($fileExist);
      
       */

    $file = $this->apiEntityManager
    ->getRepository(Document::class)->findOneBy(['code' => $item_code]);
     
  

    if($file->getExtension()=="docx") {
        
        return $this->readDoc($item_code);
     
         
     } 
     
   /*  elseif ($file->getExtension()=="xls")
     {
  
         return $this->ReadXsl($item_code);
     }*/
     
     else
      return ['docname' => $item_code];
    }





}
