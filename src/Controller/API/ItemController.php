<?php

 namespace App\Controller\API;

 use App\Entity\Item;
use App\Annotations\Mapping;
use App\Manager\ItemManager;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Guard\GuardAuthenticatorHandler;

use Symfony\Component\HttpFoundation\Request;
use Swagger\Annotations as SWG;
use Nelmio\ApiDocBundle\Annotation\Operation;
use Symfony\Component\HttpFoundation\Response;


use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;
use PhpOffice\PhpWord\Shared\ZipArchive;

/**
 * Class ItemController
 * @package App\Controller\API
 * @Route("/api/item")
 *
 */
 class ItemController extends AbstractController
 {

     private $manager = null;

    /**
     * ProfilController constructor.
     */
    public function __construct(ItemManager $itemManager)
    {
        $this->manager = $itemManager;
    }

 

      /**
      * @Route("/deleteItem/{item_code}", name="delete_item_api", methods={"DELETE"})
      * @Operation(
      *     tags={"Item"},
      *     summary="delete item",
      *     @SWG\Response(
      *         response="200",
      *         description="Returned when successful"
      *     ),
      *     @SWG\Response(
      *         response="403",
      *         description="Returned when the ws-item is not authorized"
      *     ),
      *     @SWG\Response(
      *         response="404",
      *         description="Returned when the item is not found"
      *     )
      * )
      */
    public function deleteAction($item_code)
    {
        return $this->manager->delete($item_code);
      

    }

 /**
      * @Route("/shareLink/{item_code}", name="Share_link_item_api", methods={"GET"})
      * @Operation(
      *     tags={"Item"},
      *     summary="delete item",
      *     @SWG\Response(
      *         response="200",
      *         description="Returned when successful"
      *     ),
      *     @SWG\Response(
      *         response="403",
      *         description="Returned when the ws-item is not authorized"
      *     ),
      *     @SWG\Response(
      *         response="404",
      *         description="Returned when the item is not found"
      *     )
      * )
      */
    public function generateLinkAction($item_code){

        return $this->manager->generateLink($item_code);


    }


    /**
      * @Route("/shareWithOthers/{item_code}", name="Share_linkWithOthers_item_api", methods={"Post"})
      * @Operation(
      *     tags={"Item"},
      *     summary="share item by email",
      *     @SWG\Response(
      *         response="200",
      *         description="Returned when successful"
      *     ),
      * @SWG\Parameter(
      *         name="email",
      *         in="query",
      *         type="string",
     *         description="email of user",
     *         required=true
     *     ),
     * @SWG\Parameter(
      *         name="roles",
      *         in="body",
      *         type="json",
     *         description="roles",
     *         required=true,
     *    @SWG\Schema(
       * @SWG\Items(
       * @SWG\Property(type="string",property="roles",description="ID"),
      * )
   * )
     *     ),
      *     @SWG\Response(
      *         response="403",
      *         description="Returned when the ws-item is not authorized"
      *     ),
      *     @SWG\Response(
      *         response="404",
      *         description="Returned when the item is not found"
      *     )
      * )
      */

    public function shareWithOthers(Request $request ,$item_code,\Swift_Mailer $mailer){

         $email =  (String) $request->get("email");
         $roles =  (array) $request->get("roles");
         $link= $this->manager->shareByEmail($item_code,$email,$roles);
         dump($link);
         $message = (new \Swift_Message('Nouveau contact'))
         ->setFrom("amelhamoudi22@gmail.com")
         ->setTo($email)
         ->setBody(
             $this->renderView(
                 'mail.html.twig' ,['link'=>$link]
             ),
             'text/html'
         );
        $mailer->send($message);
       
   
    }



    /**
      * @Route("/contact", name="contact_item_api", methods={"Post"})
      * @Operation(
      *     tags={"Item"},
      *     summary="send email",
      *     @SWG\Response(
      *         response="200",
      *         description="Returned when successful"
      *     ),
      *     @SWG\Response(
      *         response="403",
      *         description="Returned when the ws-item is not authorized"
      *     ),
      *     @SWG\Response(
      *         response="404",
      *         description="Returned when the item is not found"
      *     )
      * )
      */

    


    public function mail(\Swift_Mailer $mailer,Request $request,$link)
    {

      $message = (new \Swift_Message('Nouveau contact'))
                // On attribue l'expéditeur
                ->setFrom("amelhamoudi22@gmail.com")
                // On attribue le destinataire
                ->setTo('amelhamoudi22@gmail.com')
                // On crée le texte avec la vue
                ->setBody(
                    $this->renderView(
                        'mail.html.twig' ,['link'=>$link]
                    ),
                    'text/html'
                )
            ;
            $mailer->send($message);

          
  }

 



    /**
      * @Route("/shareLinks/{item_code}", name="Share_link_item_api", methods={"Post"})
      * @Operation(
      *     tags={"Item"},
      *     summary="share link item",
      *     @SWG\Response(
      *         response="200",
      *         description="Returned when successful"
      *     ),
      * @SWG\Parameter(
      *         name="roles",
      *         in="body",
      *         type="json",
     *         description="roles",
     *         required=true,
     *    @SWG\Schema(
       * @SWG\Items(
       * @SWG\Property(type="string",property="roles",description="ID"),
      * )
   * )
     *     ),
      *     @SWG\Response(
      *         response="403",
      *         description="Returned when the ws-item is not authorized"
      *     ),
      *     @SWG\Response(
      *         response="404",
      *         description="Returned when the item is not found"
      *     )
      * )
      */

      public function shareByLink(Request $request ,$item_code){

        
        $roles =  (array)$request->getContent("roles");
        
      
       return $this->manager->shareLink($item_code,$roles);
   }



   
    /**
      * @Route("/CancelshareLink/{item_code}", name="Cancel_Share_link_item_api", methods={"DELETE" , "GET"})
      * @Operation(
      *     tags={"Item"},
      *     summary="cancel share link item",
      *     @SWG\Response(
      *         response="200",
      *         description="Returned when successful"
      *     ),
      *     @SWG\Response(
      *         response="403",
      *         description="Returned when the ws-item is not authorized"
      *     ),
      *     @SWG\Response(
      *         response="404",
      *         description="Returned when the item is not found"
      *     )
      * )
      */


    public function CancelSahreByLink($item_code){
       
       return $this->manager->CancelShareLink($item_code);
   }




    /**
      * @Route("/CancelsharedByMail/{item_code}", name="Cancel_item_shared_By_Mail_api", methods={"Delete" , "GET"})
      * @Operation(
      *     tags={"Item"},
      *     summary="cancel item shared with others by mail",
      *     @SWG\Response(
      *         response="200",
      *         description="Returned when successful"
      *     ),
     * @SWG\Parameter(
      *         name="roles",
      *         in="body",
      *         type="json",
     *         description="roles",
     *         required=true,
     *    @SWG\Schema(
       * @SWG\Items(
       * @SWG\Property(type="string",property="roles",description="ID"),
      * )
   * )
     *     ),
      *     @SWG\Response(
      *         response="403",
      *         description="Returned when the ws-item is not authorized"
      *     ),
      *     @SWG\Response(
      *         response="404",
      *         description="Returned when the item is not found"
      *     )
      * )
      */


   public function CancelSahredByMail(Request $request,$item_code){
    $email =  (String) $request->get("email");
      
    return $this->manager->CancelSharePerEmail($item_code,$email);
   }


      
     /**
      * @Route("/changePermission/{item_code}", name="change_Permission_Sahred_By_link_api", methods={"PATCH"})
      * @Operation(
      *     tags={"Item"},
      *     summary="Change permission of item shared by link  ",
      *     @SWG\Response(
      *         response="200",
      *         description="Returned when successful"
      *     ),

      *@SWG\Parameter(
     *         name="item_code",
     *         in="query",
     *         type="integer",
     *         description="id item",
     *         required=true
     *),
     *@SWG\Parameter(
      *         name="roles",
      *         in="body",
      *         type="json",
     *         description="roles",
     *         required=true,
     *    @SWG\Schema(
       * @SWG\Items(
       * @SWG\Property(type="string",property="roles",description="ID"),
      * )
   * )
     *     ),
      *     @SWG\Response(
      *         response="403",
      *         description="Returned when the ws-item is not authorized"
      *     ),
      *     @SWG\Response(
      *         response="404",
      *         description="Returned when the item is not found"
      *     )
      * )
      */


    public function ChangePermission(Request $request,$item_code)
    { 

        $roles =  (array) $request->get("roles");     
        return $this->manager->changePermission($item_code,$roles);
    


      }



     /**
      * @Route("/renameItem/{item_code}", name="rename_item_api", methods={"PATCH"})
      * @Operation(
      *     tags={"Item"},
      *     summary="rename Item",
      *     @SWG\Response(
      *         response="200",
      *         description="Returned when successful"
      *     ),

      *@SWG\Parameter(
     *         name="item_code",
     *         in="query",
     *         type="integer",
     *         description="id Item",
     *         required=true
     *     ),
     * 
      *@SWG\Parameter(
     *         name="label",
     *         in="query",
     *         type="string",
     *         description="Label Item",
     *         required=true
     *     ),
      *     @SWG\Response(
      *         response="403",
      *         description="Returned when the ws-Item is not authorized"
      *     ),
      *     @SWG\Response(
      *         response="404",
      *         description="Returned when the Item is not found"
      *     )
      * )
      */


      public function RenameItemAction(Request $request,$item_code)
      { 
        
        return $this->manager->rename($item_code,$request);
      }
  
  

      

      /**
      * @Route("/downloadZip", name="download_item_zip", methods={"GET"})
      * @Operation(
      *     tags={"Item"},
      *     summary="download item as zip",
      *     @SWG\Response(
      *         response="200",
      *         description="Returned when successful"
      *     ),
      *@SWG\Parameter(
     *         name="arrayItemCode",
     *         in="query",
     *         type="string",
     *         description="list of item_code of each item",
     *         required=true
     *     ),
      *     @SWG\Response(
      *         response="403",
      *         description="Returned when the ws-Item is not authorized"
      *     ),
      *     @SWG\Response(
      *         response="404",
      *         description="Returned when the item is not found"
      *     )
      * )
      */
 

      public function zipDownloadDocumentsAction(Request $request)
      {
  
        $arrayItemCode=(array)$request->get("arrayItemCode"); 
        $items = [];
        $em =$this->getDoctrine()->getManager();
        $files =$em ->getRepository(Item::class)->findAll();
       
        
        foreach ($items as $item) {
          foreach ($files as $file) {
              if ($file->getCode() == $item)
              {
                $typeItem=$em ->getRepository(Item::class)->findOneBy(['code'=>$file->getCode()]);
                
                if($typeItem->getType()=="document")
                {
                  array_push($arrayItemCode,$file->getCode());
                }
                else if($typeItem->getType()=="folder"){
                return  $typeItem->getType();
                  $foldersItem=$em->getRepository(Item::class)->findBy(array('parent' => $file->getId()));
                  foreach( $foldersItem as $folderItem){
                    array_push($arrayItemCode,$folderItem);
                  }

                }
              }
              
             
          }
      }
          $directory =$this->getParameter('uploads_directory'); 
          $filename = 'aaa.zip';
          $zip = new ZipArchive;
          $zip->open($filename, ZipArchive::CREATE);
      
          foreach ($arrayItemCode as $file) {
            
              $zip->addFile($directory.$file);
           
             
          }
      
          $zip->close();
          $response = new Response();
          $response->headers->set('Cache-Control', 'private');
          $response->headers->set('Content-type', mime_content_type($filename));
          $response->headers->set('Content-Disposition', 'attachement; filename="' . basename($filename) . '"');
          $response->headers->set('Content-length', filesize($filename));
      
          // Send headers before outputting anything
          $response->sendHeaders();
      
          $response->setContent(readfile($filename));
      
          return $response;
      }
      
      

     

         
     /**
      * @Route("/classification/{item_code}", name="classification_item_api", methods={"GET"})
      * @Operation(
      *     tags={"Classification Item"},
      *     summary="search Item",
      *     @SWG\Response(
      *         response="200",
      *         description="Returned when successful"
      *     ),
      *@SWG\Parameter(
     *         name="search",
     *         in="query",
     *         type="string",
     *         description="search keyword",
     *         required=true
     *     ),
     *  @SWG\Parameter(
     *         name="search_type",
     *         in="query",
     *         type="string",
     *         description="search type",
     *         required=true,
     *  enum={"typeDoc", "extension", "label" ,"content","keyword"},
     *     ),
      *     @SWG\Response(
      *         response="403",
      *         description="Returned when the ws-Item is not authorized"
      *     ),
      *     @SWG\Response(
      *         response="404",
      *         description="Returned when the error of classification is happened"
      *     )
      * )
      */


      public function Classification(Request $request,$item_code){
        
        
        $search = $request->query->get('search');
        $searchType = $request->query->get('search_type');
        $response= $this->manager->classificationType($search,$searchType,$item_code);
        if($response['hits']['total']['value'] >=1){
           return  true;
        }
        else return false ;
     

       }
      
      




       
     /**
     * @Route("/SearchKeyWord", name="search_keyWord_item_api", methods={"GET"})
      * @Operation(
      *     tags={"Search"},
      *     summary="search Item",
      *     @SWG\Response(
      *         response="200",
      *         description="Returned when successful"
      *     ),
      *@SWG\Parameter(
     *         name="search",
     *         in="query",
     *         type="string",
     *         description="search keyword",
     *         required=true
     *     ),
     * @SWG\Parameter(
     *         name="search_type",
     *         in="query",
     *         type="string",
     *         description="search type",
     *         required=true,
     *  enum={"typeDoc", "extension", "label" ,"content","keyword"},
     *     ),
      *     @SWG\Response(
      *         response="403",
      *         description="Returned when the ws-Item is not authorized"
      *     ),
      *     @SWG\Response(
      *         response="404",
      *         description="Returned when error of search is happened"
      *     )
      * )
      */

      public function searchKeyWord(Request $request){

        $search = $request->query->get('search');
        $searchType = $request->query->get('search_type');
     
        $response= $this->manager->SearchType($search,$searchType);
      

     if($response['hits']['total']['value'] >=1){

         return $response;
   
       }
       else {
         return "result not found";
       }
      }
       
        /**
     * @Route("/offfff", name="tessst_item_api", methods={"GET"})
      * @Operation(
      *     tags={"Item"},
      *     summary="search Item",
      *     @SWG\Response(
      *         response="200",
      *         description="Returned when successful"
      *     ),
      *@SWG\Parameter(
     *         name="search",
     *         in="query",
     *         type="string",
     *         description="search keyword",
     *         required=true
     *     ),
      *     @SWG\Response(
      *         response="403",
      *         description="Returned when the ws-Item is not authorized"
      *     ),
      *     @SWG\Response(
      *         response="404",
      *         description="Returned when the Item is not found"
      *     )
      * )
      */

      function searchs(Request $request){

        $searchLabel = $request->query->get('searchLabel');
        $searchExtension= $request->query->get('searchExtension');
        $searchType=$request->query->get('searchType');
    
         $label="label"; $typeDoc="type"; $extension="extension";
       
       //  var_dump($searchLabel,$searchExtension,$searchType); exit;
       // https://afsy.fr/avent/2017/20-elasticsearch-6-et-symfony-4

       
      
         
          $arrayName = array(
          $label  =>  "lab1" ,
          $typeDoc => "ext1",
          $extension  => "",
         
      );

      
/*
       $result = array_filter($arrayName);   

      $first = '[ '.'match' .' => [';
      
      $last= '] ],' ;

    foreach($arrayName as $key=>$value)
  {
    $keyStr =(string)"\"".$key."\"";
    $resltFinal= $first. $keyStr ." => ".$value. $last;
    $stringstr=  $resltFinal; 
}
  return $stringstr;
  */
      
     
    
      


      
   //  'extension' => $search 

 
   
 
 
 }



 function mapped_implode($glue, $array, $symbol = '=') {
  return implode($glue, array_map(
          function($k, $v) use($symbol) {
              return $k . $symbol . $v;
          },
          array_keys($array),
          array_values($array)
          )
      );
}



    

       /**
      * @Route("/ingestPipline", name="ingest_pipline_item", methods={"POST"})
      * @Operation(
      *     tags={"Index-Elasticsearch"},
      *     summary="ingest pipline",
      *     @SWG\Response(
      *         response="200",
      *         description="Returned when successful"
      *     ),
      *     @SWG\Response(
      *         response="403",
      *         description="Returned when ws-ingest is not authorized"
      *     ),
      *     @SWG\Response(
      *         response="404",
      *         description="Returned when the ingest pipline is not found"
      *     )
      * )
      */

 
      public function IngestPipline(){

        return $this->manager->ingest();
    
         }
   

         
       /**
      * @Route("/getIndexName", name="indexname_item", methods={"GET"})
      * @Operation(
      *     tags={"Index-Elasticsearch"},
      *     summary="Index Name of item",
      *     @SWG\Response(
      *         response="200",
      *         description="Returned when successful"
      *     ),
      *     @SWG\Response(
      *         response="403",
      *         description="Returned when the ws-IndexeName is not authorized"
      *     ),
      *     @SWG\Response(
      *         response="404",
      *         description="Returned when the IndexName is not found"
      *     )
      * )
      */


         public function getNameIndex(){
           return $this->manager->getIndexName();
         }
  


    

         
}

