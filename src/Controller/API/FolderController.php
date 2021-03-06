<?php

 namespace App\Controller\API;

use App\Entity\Folder;
use App\Annotations\Mapping;
use App\Manager\FolderManager;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Guard\GuardAuthenticatorHandler;
use Symfony\Component\HttpFoundation\Request;
use Swagger\Annotations as SWG;
use Nelmio\ApiDocBundle\Annotation\Operation;

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
     *         name="icon",
     *         in="query",
     *         type="file",
     *         description="icon of user",
     *         required=false
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
        return $this->manager->create($request);
    }

     /**
      * @Route("/list-sub-item/{parent_code}", name="list_sub_items", methods={"GET"})
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
     public function list(Request $request ,$parent_code)
     {
         return $this->manager->listSubItem($parent_code);
     }
     /**
      * @Route("/schema/{parent_code}", name="current_item_schema", methods={"GET"})
      * @Operation(
      *     tags={"Folder"},
      *     summary="current item schema",
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
     public function getschema($parent_code)
     {
         return $this->manager->getschema($parent_code);
     }

    
}
