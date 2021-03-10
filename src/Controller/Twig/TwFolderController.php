<?php

namespace App\Controller\Twig;

use App\Entity\Folder;
use App\Annotations\Mapping;
use App\Manager\FolderManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;

/**
 * Class FolderController
 * @package App\Controller\Twig
 * @Route("/folder")
 *
 */
class TwFolderController extends AbstractController
{

    private $manager = null;

    /**
     * ProfilController constructor.
     */
    public function __construct(FolderManager $folderManager)
    {
        $this->manager = $folderManager;
    }

    /**
     * @Route("/create", name="create_folder_twig", methods={"POST"})
     * @Mapping(object="App\ApiModel\Folder\Folder", as="folder")
     */
    public function create(Request $request)
    {
        $folder = (array)$request->get('folder');
        return $this->manager->create($folder);
    }

    /**
     * @Route("/list-sub-item/{parent_code}", name="list_sub_items_twig", methods={"GET"})
     * @Mapping(object="App\ApiModel\Folder\SubItems", as="subItems")
     */
    public function list(Request $request, $parent_code)
    {
        $filters = (array)$request->get("subItems");
        return $this->render('item/index.html.twig', [
            'items' => $this->manager->listSubItem($parent_code, $filters)['data']['rows'],
            'schema' => $this->manager->getschema($parent_code)
        ]);
    }

    /**
     * @Route("/schema/{parent_code}", name="current_item_schema_twig", methods={"GET"})
     */
    public function getschema($parent_code)
    {
        return $this->manager->getschema($parent_code);
    }


}
