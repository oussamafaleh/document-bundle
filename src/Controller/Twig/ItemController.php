<?php

namespace App\Controller\Twig;

use App\Entity\Item;
use App\Annotations\Mapping;
use App\Form\ItemType;
use App\Manager\ItemManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;


use App\Form\DocumentEditType;
use App\Form\FolderEditType;



use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;




/**
 * Class ItemController
 * @package App\Controller\Twig
 * @Route("/item")
 *
 */
class ItemController extends AbstractController
{

    private $manager = null;

    /**
     * itemController constructor.
     */
    public function __construct(ItemManager $itemManager)
    {
        $this->manager = $itemManager;
    }
   
    /**
     * @Route("/delete/{item_code}/{parent_code}", name="delete_item_twig", methods={"DELETE" , "GET"})
     */
    public function delete(Request $request,$item_code,$parent_code): Response
    {
        
        $this->manager->delete($item_code);

        return $this->redirectToRoute('list_sub_items_twig',['parent_code' => $parent_code]);
      


    }

   


    /**
    *@Route("/renameItem/{item_code}", name="rename_item_twig", methods={"PATCH"})
    */

    
    public function RenameItemAction(Request $request,$item_code)
    {  
     return $this->manager->rename($item_code,$request);
    }


       /**
      * @Route("/SearchKeyWord", name="search_keyWord_item_twig", methods={"GET"})
      */

      public function searchKeyWord(Request $request){

        $search = $request->query->get('search');
        $response= $this->manager->searchType($search['content'],$search['type']);
     //  dump($response);exit;

     if($response['hits']['total']['value'] >=1){
  
    for ($i = 0 ; $i < $response['hits']['total']['value']; $i++) {
     
       $label=$response['hits']['hits'][$i]['_source']['label'];
       $created_at=$response['hits']['hits'][$i]['_source']['created_at'];
       $update_at=$response['hits']['hits'][$i]['_source']['update_at'];
       $type=$response['hits']['hits'][$i]['_source']['type'];
       $keys = array('Label', 	'created_at', 'updated_at','type');
       $dataarray=array($label,$created_at,$update_at,$type);
       $tuple = array_combine($keys,$dataarray);

     
       $results[] = $tuple;
    }
    return $this->render('dashboard/components/search.html.twig',   ['results' => $results] );
   }

   else
   {
       return $this->render('dashboard/components/errorSearch.html.twig');
   }

       }






 


   
      
}
