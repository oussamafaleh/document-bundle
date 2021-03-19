<?php

namespace App\Controller\Twig;

use App\Entity\Folder;
use App\Annotations\Mapping;
use App\Form\DocumentType;
use App\Form\FolderType;
use App\Manager\DashboardManager;
use App\Manager\FolderManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

/**
 * Class FolderController
 * @package App\Controller\Twig
 * @Route("/folder")
 *
 */
class FolderController extends AbstractController
{

    private $manager = null;

    /**
     * folderController constructor.
     */
    public function __construct(FolderManager $folderManager, DashboardManager $dashboardManager)
    {
        $this->dashboardManager =$dashboardManager;
        $this->manager = $folderManager;
    }

    /**
     * @Route("/create/{parent_code}", name="create_folder_twig", methods={"POST"})
     */
    public function create(Request $request,$parent_code): Response
    {
        $folder['parent_code'] = $parent_code;
        $folder['user_code']  = "0970229e-4867-4ada-b0ac-a199446cbc21";
        $form = $this->createForm(FolderType::class );
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $form->getData();
            $folder['label']= $form->getData()['label'];

            $this->manager->create($folder);

        }

        return $this->redirectToRoute('list_sub_items_twig',['parent_code' => $parent_code , 'user_code' => $folder['user_code']]);


    }

    /**
     * @Route("/list-sub-item/{parent_code}", name="list_sub_items_twig", methods={"GET"})
     * @Mapping(object="App\ApiModel\Folder\SubItems", as="subItems")
     */
    public function list(Request $request): Response
    {

        $fileForm = $this->createForm(DocumentType::class );
        $folderForm = $this->createForm(FolderType::class );

        $filters = (array)$request->get("subItems");
        $TaggedFolders = $this->dashboardManager->getTaggedFolders($filters['user_code'] )['data'];

        return $this->render('folder/index.html.twig', [
            'tagged' => $TaggedFolders,
            'data' => $this->manager->listSubItem( $filters)['data'],
            'schema' => $this->manager->getschema($filters['parent_code'])['schema'],
            'current' => $this->manager->getschema($filters['parent_code'])['current'],
            'folder_form' => $folderForm->createView(),
            'file_form'=> $fileForm->createView()
        ]);
    }
    /**
     * @Route("/move/{item_code}/{parent_code}", name="move_item_twig", methods={"POST"})
     * @Mapping(object="App\ApiModel\Item\NewParent", as="newParent")
     */
    public function setParent(Request $request, $parent_code)
    {

        $param =  (Array) $request->get("newParent");
       // dump($request->get("newParent"));exit();
        $this->manager->moveItem($param);
        return $this->redirectToRoute('list_sub_items_twig',['parent_code' => $parent_code]);
    }



}
