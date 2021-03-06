<?php

namespace App\Controller\API;

use App\Annotations\Mapping;
use App\Form\EditItemType;
use App\Form\FolderEditType;
use App\Manager\FolderManager;
use Nelmio\ApiDocBundle\Annotation\Operation;
use Swagger\Annotations as SWG;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class FolderController
 * @package App\Controller\API
 * @Route("/api/folder")
 *
 */
class FolderController extends AbstractController
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
     * @Route("/create", name="create_folder", methods={"POST"})
     * @Mapping(object="App\ApiModel\Folder\Folder", as="folder")
     * @Operation(
     *     tags={"Folder"},
     *     summary="folder for skeleton",
     *     @SWG\Parameter(
     *         name="label",
     *         in="query",
     *         type="string",
     *         description="name of folder",
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
     *         description="Returned when the ws-folder is not authorized"
     *     ),
     *     @SWG\Response(
     *         response="404",
     *         description="Returned when the folder is not found"
     *     )
     * )
     */
    public function create(Request $request)
    {

        $folderParam = (array)$request->get('folder');
        return $this->manager
            ->init(['parentCode' => $folderParam['parent_code'], 'userCode' => $folderParam['user_code']])
            ->create($folderParam);
    }

    /**
     * @Route("/list-sub-item/{parent_code}", name="doc_bundle_list_sub_items", methods={"GET"})
     * @Mapping(object="App\ApiModel\Folder\SubItems", as="subItems")
     * @Operation(
     *     tags={"Folder"},
     *     summary="list of sub items",
     *     @SWG\Parameter(
     *         name="user_code",
     *         in="query",
     *         type="string",
     *         description="code of user",
     *         required=true
     *     ),
     *     @SWG\Parameter(
     *         name="index",
     *         in="query",
     *         type="string",
     *         description="page number",
     *         required=false
     *     ),
     *      @SWG\Parameter(
     *         name="sort_column",
     *         in="query",
     *         description="sort column",
     *         required=false,
     *         type="string",
     *         enum={"created_at", "code", "label"},
     *     ),
     *     @SWG\Parameter(
     *         name="sort_order",
     *         in="query",
     *         description="sorting direction  default asc",
     *         required=false,
     *         type="string",
     *         enum={"ASC", "DESC"},
     *     ),
     *     @SWG\Parameter(
     *        name="size",
     *         in="query",
     *         type="string",
     *         description=" max per page number",
     *         required=false
     *     ),
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
    public function list(Request $request)
    {

        $filters = (array)$request->get("subItems");
        return $this->manager
            ->init(['parentCode' => $filters['parent_code'], 'userCode' => $filters['user_code']])
            ->listSubItem($filters);
    }

    /**
     * @Route("/schema/{parent_code}", name="current_item_schema", methods={"GET"})
     * @Mapping(object="App\ApiModel\Folder\SubItems", as="subItems")
     * @Operation(
     *     tags={"Folder"},
     *     summary="current item schema",
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
     *         description="Returned when the ws-folder is not authorized"
     *     ),
     *     @SWG\Response(
     *         response="404",
     *         description="Returned when the folder is not found"
     *     )
     * )
     */
    public function getschema(Request $request)
    {
        $filters = (array)$request->get("subItems");
        return $this->manager
            ->init(['parentCode' => $filters['parent_code'], 'userCode' => $filters['user_code']])
            ->getschema();
    }


    /**
     * @Route("/move/{item_code}", name="move_item", methods={"PATCH"})
     * @Mapping(object="App\ApiModel\Item\NewParent", as="newParent")
     * @Operation(
     *     tags={"Item"},
     *     summary="list of sub items",
     *     @SWG\Parameter(
     *         name="new_parent_code",
     *         in="query",
     *         type="string",
     *         description="code of user",
     *         required=true
     *     ),
     *     @SWG\Parameter(
     *         name="user_code",
     *         in="query",
     *         type="string",
     *         description="page number",
     *         required=false
     *     ),
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
    public function setParent(Request $request)
    {

        $param = (array)$request->get("newParent");

        return $this->manager
            ->init(['parentCode' => $param['new_parent_code'], 'userCode' => $param['user_code'], 'itemCode' => $param['item_code']])
            ->moveItem();
    }

    /**
     * @Route("/tag/{item_code}", name="tag_item", methods={"PATCH"})
     * @Mapping(object="App\ApiModel\Item\Tag", as="tag")
     * @Operation(
     *     tags={"Tag"},
     *     summary="tag a folder",
     *     @SWG\Parameter(
     *         name="user_code",
     *         in="query",
     *         type="string",
     *         description="user code",
     *         required=false
     *     ),
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
    public function setTagged(Request $request)
    {

        $param = (array)$request->get("tag");


        return $this->manager
            ->init(['itemCode' => $param['item_code'], 'userCode' => $param['user_code']])
            ->setTagged();
    }

    /**
     * @Route("/create-tagged-folder", name="create_tagged_folder", methods={"POST"})
     * @Mapping(object="App\ApiModel\Folder\Folder", as="folder")
     * @Operation(
     *     tags={"Tag"},
     *     summary="create a tagged folder",
     *     @SWG\Parameter(
     *         name="label",
     *         in="query",
     *         type="string",
     *         description="name of folder",
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
     *         description="Returned when the ws-folder is not authorized"
     *     ),
     *     @SWG\Response(
     *         response="404",
     *         description="Returned when the folder is not found"
     *     )
     * )
     */
    public function createTag(Request $request)
    {
        $folderParam = (array)$request->get('folder');
        return $this->manager
            ->init(['userCode' => $folderParam['user_code']])
            ->createTag($folderParam);
    }


    /**
     * @Route("/list-item-sahred-With-Me", name="doc_bundle_list_sub_items_shared_with_me", methods={"GET"})
     * @Mapping(object="App\ApiModel\Folder\SubItems", as="subItems")
     * @Operation(
     *     tags={"Folder"},
     *     summary="list of sub items",
     *     @SWG\Parameter(
     *         name="user_code",
     *         in="query",
     *         type="string",
     *         description="code of user",
     *         required=true
     *     ),
     *     @SWG\Parameter(
     *         name="index",
     *         in="query",
     *         type="string",
     *         description="page number",
     *         required=false
     *     ),
     *      @SWG\Parameter(
     *         name="sort_column",
     *         in="query",
     *         description="sort column",
     *         required=false,
     *         type="string",
     *         enum={"created_at", "code", "label"},
     *     ),
     *     @SWG\Parameter(
     *         name="sort_order",
     *         in="query",
     *         description="sorting direction  default asc",
     *         required=false,
     *         type="string",
     *         enum={"ASC", "DESC"},
     *     ),
     *     @SWG\Parameter(
     *        name="size",
     *         in="query",
     *         type="string",
     *         description=" max per page number",
     *         required=false
     *     ),
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
    public function listSahredWithMe(Request $request)
    {

        $filters = (array)$request->get("subItems");
        return $this->manager
            ->init(['userCode' => $filters['user_code']])
            ->listSharedItem($filters);
    }
}
