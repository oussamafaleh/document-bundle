<?php

 namespace App\Controller\API;

use App\Manager\DashboardManager;
use App\Annotations\Mapping;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Swagger\Annotations as SWG;
use Nelmio\ApiDocBundle\Annotation\Operation;

/**
 * Class dashboardController
 * @package App\Controller\API
 * @Route("/api/dashboard")
 *
 */
 class DashboardController extends AbstractController
 {

     private $manager = null;

    /**
     * dashboardController constructor.
     */
    public function __construct(DashboardManager $dashboardManager)
    {
        $this->manager = $dashboardManager;
    }

    /**
     * @Route("/quick-access", name="quick_access_api", methods={"GET"})
     * @Mapping(object="App\ApiModel\Dashboard\Dashboard", as="dashboard")
     * @Operation(
     *     tags={"Dashboard"},
     *     summary="dashboard of doc bundle",
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
     *         description="Returned when the ws-dashboard is not authorized"
     *     ),
     *     @SWG\Response(
     *         response="404",
     *         description="Returned when the dashboard is not found"
     *     )
     * )
     */
    public function getQuickAccess(Request $request)
    {
        $user= (array)$request->get('dashboard');
        return $this->manager->getQuickAccess($user['user_code'] );
    }

     /**
      * @Route("/tagged-folder-list", name="tagged_folder_list_api", methods={"GET"})
      * @Mapping(object="App\ApiModel\Dashboard\Dashboard", as="dashboard")
      * @Operation(
      *     tags={"Dashboard"},
      *     summary="dashboard of doc bundle",
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
      *         description="Returned when the ws-dashboard is not authorized"
      *     ),
      *     @SWG\Response(
      *         response="404",
      *         description="Returned when the dashboard is not found"
      *     )
      * )
      */
     public function getTaggedFolders(Request $request)
     {
         $user= (array)$request->get('dashboard');
         return $this->manager->getTaggedFolders($user['user_code'] );
     }

    
}
