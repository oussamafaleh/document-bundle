<?php

 namespace App\Controller\API;

use App\Manager\DashboardManager;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Guard\GuardAuthenticatorHandler;
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
       $user = $request->getContent('user_code');
        return $this->manager->getQuickAccess($user );
    }

    
}
