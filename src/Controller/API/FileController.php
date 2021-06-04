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
     *     summary="read file which has docx as type",
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
   
        return $this->manager->DocToHTML($item_code);
       
       
       }
       
       
            /**
            * @Route("/openDocument/{item_code}", name="open_any_document_api", methods={"GET"})
            * @Mapping(object="App\ApiModel\File\File", as="file")
            * @Operation(
            *     tags={"File"},
            *     summary="open document in browser",
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
     * @Route("/htmltoPdf", name="html_to_pdf_api", methods={"GET"})
     * @Mapping(object="App\ApiModel\File\File", as="file")
     * @Operation(
     *     tags={"File"},
     *     summary="read xls file",
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

public function htmlToPDF(Request $request){
 

$html2pdf = new Html2Pdf();
$html2pdf->writeHTML('<body><h1>teesssst</h1></body>');
$html2pdf->output('example14.pdf');

//https://www.codexworld.com/convert-html-to-ms-word-document-export-php/
    }
  
   
       
    
    
    








}
