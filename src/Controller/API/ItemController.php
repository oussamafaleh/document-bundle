<?php

 namespace App\Controller\API;

use App\Entity\Item;


use App\Entity\Folder;

use App\Entity\User;
use App\Repository\FolderRepository;

use App\Form\DocumentEditType;
use App\Form\FolderEditType;


use App\Repository\ItemRepository;
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

    public function shareWithOthers(Request $request ,$item_code){

         $email =  (String) $request->get("email");
         $roles =  (array) $request->get("roles");
         return $this->manager->shareByEmail($item_code,$email,$roles);

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
      * @Route("/CancelsharedByMail/{item_code}", name="Cancel_item_sharedByMail_api", methods={"Delete" , "GET"})
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
      * @Route("/changePermission/{item_code}", name="changePermission_SahredBylink_api", methods={"PATCH"})
      * @Operation(
      *     tags={"Folder"},
      *     summary="Change permission ",
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
      * @Route("/downloadZip/{item_code}", name="shared_item", methods={"get"})
      * @Operation(
      *     tags={"Folder"},
      *     summary="rename folder",
      *     @SWG\Response(
      *         response="200",
      *         description="Returned when successful"
      *     ),
      *     @SWG\Response(
      *         response="403",
      *         description="Returned when the ws-folder is not authorized"
      *     ),
      *     @SWG\Response(
      *         response="404",
      *         description="Returned when the folder is not found"
      *     )
      * )
      */
 

      public function zipDownloadDocumentsAction()
      {
  
          $response = new Response();
          // Get the entity manager
          $em =$this->getDoctrine()->getManager();
      
          //Collect all the result from the database and zip all the files related
          $files =$em ->getRepository(Item::class)->findOneBy(['item_code'=>$item_code]);
      
      
          $directory =$this->getParameter('uploads_directory'); 
        
          $filename = 'all.zip';
          $zip = new ZipArchive;
          $zip->open($filename, ZipArchive::CREATE);
      
          foreach ($files as $file) {
              $zip->addFile($directory.'/'.$file->getCode());
          }
      
          $zip->close();
      
          $response->headers->set('Cache-Control', 'private');
          $response->headers->set('Content-type', mime_content_type($filename));
          $response->headers->set('Content-Disposition', 'attachment; filename="' . basename($filename) . '"');
          $response->headers->set('Content-length', filesize($filename));
      
          // Send headers before outputting anything
          $response->sendHeaders();
      
          $response->setContent(readfile($filename));
      
          return $response;
      }
      
      
      



}



