<?php

namespace App\Controller\Twig;

use App\Entity\Folder;
use App\Annotations\Mapping;
use App\Form\DocumentType;
use App\Form\FolderType;
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
    public function __construct(FolderManager $folderManager)
    {
        $this->manager = $folderManager;
    }

    /**
     * @Route("/create/{parent_code}", name="create_folder_twig", methods={"POST"})
     */
    public function create(Request $request,$parent_code): Response
    {
        $folder['parent_code'] = $parent_code;
        $folder['user_code']  = '0970229e-4867-4ada-b0ac-a199446cbc21';
        $form = $this->createForm(FolderType::class );
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $form->getData();
            $folder['label']= $form->getData()['label'];

            $this->manager->create($folder);

        }

        return $this->redirectToRoute('list_sub_items_twig',['parent_code' => $parent_code]);


    }

    /**
     * @Route("/list-sub-item/{parent_code}", name="list_sub_items_twig", methods={"GET"})
     * @Mapping(object="App\ApiModel\Folder\SubItems", as="subItems")
     */
    public function list(Request $request, $parent_code): Response
    {
        $fileForm = $this->createForm(DocumentType::class );
        $folderForm = $this->createForm(FolderType::class );

        $filters = (array)$request->get("subItems");

        return $this->render('folder/index.html.twig', [
            'data' => $this->manager->listSubItem($parent_code, $filters)['data'],
            'schema' => $this->manager->getschema($parent_code)['schema'],
            'current' => $this->manager->getschema($parent_code)['current'],
            'folder_form' => $folderForm->createView(),
            'file_form'=> $fileForm->createView()
        ]);
    }




}
