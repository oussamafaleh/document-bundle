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
     * @Mapping(object="App\ApiModel\Folder\Folder", as="folder")
     */
    public function create(Request $request): Response
    {
        $folderParam= (array)$request->get('folder');
        $form = $this->createForm(FolderType::class );
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $form->getData();
            $folderParam['label']= $form->getData()['label'];

            $this->manager
                ->init(['parentCode' => $folderParam['parent_code'] , 'userCode' => $folderParam['user_code']])
                ->create($folderParam);

        }

        return $this->redirectToRoute('list_sub_items_twig',['parent_code' =>$folderParam['parent_code'] , 'user_code' => $folderParam['user_code']]);


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
        $TaggedFolders = $this->dashboardManager
            ->init(['userCode' => $filters['user_code']])
            ->getTaggedFolders()['data'];

        $data = $this->manager
            ->init(['parentCode' => $filters['parent_code'] , 'userCode' => $filters['user_code']])
            ->listSubItem( $filters);
        return $this->render('folder/index.html.twig', [
            'tagged' => $TaggedFolders,
            'data' => $data['data'],
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
        $this->manager
            ->init(['parentCode' => $param['new_parent_code'] , 'userCode' => $param['user_code'], 'itemCode' => $param['item_code']])
            ->moveItem($param);
        return $this->redirectToRoute('list_sub_items_twig',['parent_code' => $parent_code]);
    }



}
