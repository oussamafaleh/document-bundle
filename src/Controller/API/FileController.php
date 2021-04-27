<?php

 namespace App\Controller\API;

use App\Entity\file;
use App\Annotations\Mapping;
use App\Manager\FileManager;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Guard\GuardAuthenticatorHandler;
use Symfony\Component\HttpFoundation\Request;
use Swagger\Annotations as SWG;
use Nelmio\ApiDocBundle\Annotation\Operation;
use Symfony\Component\HttpFoundation\ResponseHeaderBag;
use Symfony\Component\HttpFoundation\File\MimeType\FileinfoMimeTypeGuesser;
use Symfony\Component\HttpFoundation\BinaryFileResponse;

use Symfony\Component\HttpFoundation\File\File as FILES;

use PhpOffice\PhpSpreadsheet\IOFactory;



/**
 * Class fileController
 * @package App\Controller\API
 * @Route("/api/file")
 *
 */
 class FileController extends AbstractController
 {

     private $manager = null;

    /**
     * fileController constructor.
     */
    public function __construct(FileManager $fileManager)
    {
        $this->manager = $fileManager;
    }

    /**
     * @Route("/upload", name="upload_file", methods={"POST"})
     * @Mapping(object="App\ApiModel\File\File", as="file")
     * @Operation(
     *     tags={"File"},
     *     summary="file for skeleton",
     *     @SWG\Parameter(
     *         name="file",
     *         in="formData",
     *         type="file",
     *         description="file",
     *         required=true
     *     ),
     *     @SWG\Parameter(
     *         name="parent_code",
     *         in="query",
     *         type="string",
     *         description="parent folder",
     *         required=true
     *     ),
     *     @SWG\Parameter(
     *         name="user_code",
     *         in="query",
     *         type="string",
     *         description="code of user",
     *         required=true
     *     ),
     *     @SWG\Response(
     *         response="200",
     *         description="Returned when successful"
     *     ),
     *     @SWG\Response(
     *         response="403",
     *         description="Returned when the ws-file is not authorized"
     *     ),
     *     @SWG\Response(
     *         response="404",
     *         description="Returned when the file is not found"
     *     )
     * )
     */
    public function upload(Request $request)
    {

        $file = $request->files->get('file');
        $fileParam = (array)$request->get('file');
        return $this->manager
            ->init(['parentCode' => $fileParam['parent_code'] , 'userCode' => $fileParam['user_code']])
             ->create($file);
    }

 


      
    /**
     * @Route("/downloadFile/{item_code}", name="download_file", methods={"GET"})
     * @Operation(
     *     tags={"File"},
     *     summary="file for skeleton",
     *     @SWG\Response(
     *         response="200",
     *         description="Returned when successful"
     *     ),
     *     @SWG\Response(
     *         response="403",
     *         description="Returned when the ws-file is not authorized"
     *     ),
     *     @SWG\Response(
     *         response="404",
     *         description="Returned when the file is not found"
     *     )
     * )
     */


    public function DownloadAction($item_code)
    {
        return $this->manager->download($item_code);

    }

   
    /**
     * @Route("/openBrowser/{item_code}", name="open", methods={"GET"})
     * @Mapping(object="App\ApiModel\File\File", as="file")
     * @Operation(
     *     tags={"File"},
     *     summary="file for skeleton",
     *     @SWG\Response(
     *         response="200",
     *         description="Returned when successful"
     *     ),
     *     @SWG\Response(
     *         response="403",
     *         description="Returned when the ws-file is not authorized"
     *     ),
     *     @SWG\Response(
     *         response="404",
     *         description="Returned when the file is not found"
     *     )
     * )
     */



    public function openBrowserAction($item_code)
{
   
    return $this->manager->openBrowser($item_code);



}





         
    /**
     * @Route("/locationFile/{item_code}", name="open", methods={"GET"})
     * @Mapping(object="App\ApiModel\File\File", as="file")
     * @Operation(
     *     tags={"File"},
     *     summary="file for skeleton",
     *     @SWG\Response(
     *         response="200",
     *         description="Returned when successful"
     *     ),
     *     @SWG\Response(
     *         response="403",
     *         description="Returned when the ws-file is not authorized"
     *     ),
     *     @SWG\Response(
     *         response="404",
     *         description="Returned when the file is not found"
     *     )
     * )
     */



    public function getLocationFileAction($item_code)
    {
        // load the file from the filesystem
       return $this->manager->LocationFile($item_code);

    
    
    }

   
 
    
   

     /**
     * @Route("/ReadDocs/{item_code}", name="read_docs_api", methods={"GET"})
     * @Mapping(object="App\ApiModel\File\File", as="file")
     * @Operation(
     *     tags={"File"},
     *     summary="file for skeleton",
     *     @SWG\Response(
     *         response="200",
     *         description="Returned when successful"
     *     ),
     *     @SWG\Response(
     *         response="403",
     *         description="Returned when the ws-file is not authorized"
     *     ),
     *     @SWG\Response(
     *         response="404",
     *         description="Returned when the file is not found"
     *     )
     * )
     */

   
    public function readDocs($item_code){
   
        return $this->manager->readDoc($item_code);
       
       
       }
       
       
            /**
            * @Route("/openDocument/{item_code}", name="open_any_document_api", methods={"GET"})
            * @Mapping(object="App\ApiModel\File\File", as="file")
            * @Operation(
            *     tags={"File"},
            *     summary="file for skeleton",
            *     @SWG\Response(
            *         response="200",
            *         description="Returned when successful"
            *     ),
            *     @SWG\Response(
            *         response="403",
            *         description="Returned when the ws-file is not authorized"
            *     ),
            *     @SWG\Response(
            *         response="404",
            *         description="Returned when the file is not found"
            *     )
            * )
            */
          public function OpenDocument($item_code){
       
       
           return $this->manager->openDocument($item_code) ;
           
           
       
       }
       

        /**
     * @Route("/ReadXsl/{item_code}", name="read_xsl", methods={"GET"})
     * @Mapping(object="App\ApiModel\File\File", as="file")
     * @Operation(
     *     tags={"File"},
     *     summary="file for skeleton",
     *     @SWG\Response(
     *         response="200",
     *         description="Returned when successful"
     *     ),
     *     @SWG\Response(
     *         response="403",
     *         description="Returned when the ws-file is not authorized"
     *     ),
     *     @SWG\Response(
     *         response="404",
     *         description="Returned when the file is not found"
     *     )
     * )
     */

  
public function ReadXsl($item_code)
{
    $publicResourcesFolderPath =$this->getParameter('uploads_directory');   
    $filename=$publicResourcesFolderPath.$item_code;
    $inputFileType = 'Xlsx';
    $spreadsheet = IOFactory::load( $filename);
    $sheetData = $spreadsheet->getActiveSheet()->toArray(null, true, true, true); 
   return $sheetData;
  
}




/**
     * @Route("/ReadCaptureDocx/{item_code}", name="open_capture_doc", methods={"GET"})
     * @Mapping(object="App\ApiModel\File\File", as="file")
     * @Operation(
     *     tags={"File"},
     *     summary="file for skeleton",
     *     @SWG\Response(
     *         response="200",
     *         description="Returned when successful"
     *     ),
     *     @SWG\Response(
     *         response="403",
     *         description="Returned when the ws-file is not authorized"
     *     ),
     *     @SWG\Response(
     *         response="404",
     *         description="Returned when the file is not found"
     *     )
     * )
     */

   
    public function readCaptureDocx($item_code){

    
        $publicResourcesFolderPath =$this->getParameter('uploads_directory');   
        $filename=$publicResourcesFolderPath.$item_code;
    
        $objReader = \PhpOffice\PhpWord\IOFactory::createReader("Word2007");
         $phpWord = $objReader->load($filename);
    
         $sections = $phpWord->getSections();
         foreach ($sections as $key => $value) {
             $sectionElement = $value->getElements();
             foreach ($sectionElement as $elementKey => $elementValue) {
                 if ($elementValue instanceof \PhpOffice\PhpWord\Element\TextRun) {
                     $secondSectionElement = $elementValue->getElements();
                     foreach ($secondSectionElement as $secondSectionElementKey => $secondSectionElementValue) {
                         if ($secondSectionElementValue instanceof \PhpOffice\PhpWord\Element\Text) {
                             echo $secondSectionElementValue->getText();
                             echo "<br>";
                         }
                     }
                 }
             }
         }
   
       
    
    
    
}







}
