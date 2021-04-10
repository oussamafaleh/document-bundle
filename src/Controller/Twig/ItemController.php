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
use PhpOffice\PhpWord\Shared\ZipArchive;

use App\Form\DocumentEditType;
use App\Form\FolderEditType;



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
 


   
      
}
