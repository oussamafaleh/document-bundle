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
//
    private $expressionLanguage;

    private $indexName;
    private $es_config;
    private $attachment;
    private $security;
    private $es_port;
    private $es_host;
    public function __construct(EntityManager $entityManager, $targetDirectory ,FolderManager $folderManager , ItemManager $itemManager, $indexName, $es_port,$es_host,$attachment,Security $security )
    {
        parent::__construct($entityManager);
        $this->targetDirectory = $targetDirectory;
        $this->folderManager = $folderManager;
        $this->itemManager=$itemManager;

        $this->expressionLanguage = new RuleExpressionLanguage();
        $this->indexName = $indexName;
        $this->es_port= $es_port ;
        $this->es_host= $es_host ;
        $this->attachment=$attachment;
        $this->security = $security;
        
       
    }
    
 

    public function getIndexName(){
        return $this->indexName;
    }

    public function getAttachment(){
        return $this->attachment;
    }
   

    public function ConnectedUserCode(){
        return $this->security->getUser()->getCode();

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
        if(!$fileUniquness){
            throw new \Exception('FOUND_ITEM');
        }
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

        $this->user_item_property = new UserItemProperty();
        $this->user_item_property->setItem($this->document)
            ->setUser($this->user)
            ->setIsTagged(false)
            ->addRoles(["ROLE_OWNER"]);
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
        

        $extension=$fileName[1];
        $label= $file->getClientOriginalName();
        $this->IndexUploadDoc($fileCode,$extension,$label);

       
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


    public function IndexUploadDoc($fileCode,$extension,$label){

        $user_code=$this->ConnectedUserCode();
     
        $array = [
           $this->es_host.':'.$this->es_port
       ];

        $client = ClientBuilder::create()
        ->setHosts((array)$array[0])
        ->build(); 
              
   
        $created_at=$date = date('d-m-y h:i:s');
        $targetDirectory= $this->getTargetDirectory();
        $filepath =  $targetDirectory.$fileCode;
 
       
        
       if($extension==="png"||$extension==="PNG"){

       
        $content= $this->ocrImage($fileCode);
         $params = [
             'index' => $this->getIndexName(),
             'id' => $fileCode,
             
           'body'  => [
            'extension' =>$extension,
            'label' => $label,
             'content' =>  $content,
             'created_at'=>$created_at,
             'update_at'=>null ,
             "extension" => $extension,
             'type' => 'document',
             'user_code'=> $user_code
            ]
      ];


        }
        else {
         $params = [
             'index' => $this->getIndexName(),
             'id' => $fileCode,
           
             'pipeline' => $this->getAttachment(),  // <----- here
             'body'  => [
                     'data' => base64_encode(file_get_contents($filepath)),
                     'label' => $label,
                     'created_at'=>$created_at,
                     'update_at'=>"",
                     "extension" => $extension,
                     'type' => 'document',
                     'user_code'=> $user_code,
             ]
             
             ];
            
            }
                     /*
                 'mappings' => [
                    
                 ]
 
                 */
             /*
             ]                
           ];
          
           
        }
       
     
       //   */
      // $client->indices()->create($params);
      $client->index($params);
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




    public function ocrImage($fileCode)
    {
     
        $targetDirectory= $this->getTargetDirectory();
        $filepath =  $targetDirectory.$fileCode;
       
       

        if(!file_exists($filepath)){
            return new Response("Warning: the providen file [".$filepath."] doesn't exists.");
        }
    
        $tesseractInstance = new TesseractOCR($filepath);

       
       $executablePath = 'C:/Program Files/Tesseract-OCR/tesseract.exe';

         $tesseractInstance->executable($executablePath);
      //  $tesseractInstance->psm(1);
      $tess=(new TesseractOCR($filepath))->lang('eng', 'jpn', 'spa')->run();
      return $tess;
  
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
    public function DocToHTML($item_code){


        $targetDirectory= $this->getTargetDirectory();
        $filename=$targetDirectory.$item_code;

        $objReader = \PhpOffice\PhpWord\IOFactory::createReader("Word2007");

        $phpWord = $objReader->load($filename);
        $objWriter = \PhpOffice\PhpWord\IOFactory::createWriter($phpWord, 'HTML');

        $content = str_replace("<body>\n","", $objWriter->getWriterPart('Body')->write());
        $content = str_replace("\n</body>\n","", $content);
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
     
  

    if($file->getExtension()=="docx") {
        
        return $this->readDoc($item_code);
     
         
     } 
     

     
     else
      return ['docname' => $item_code];
    }





}
