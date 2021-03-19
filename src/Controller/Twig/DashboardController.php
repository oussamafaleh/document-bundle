<?php

namespace App\Controller\Twig;

use App\Entity\Folder;
use App\Annotations\Mapping;
use App\Form\DocumentType;
use App\Manager\DashboardManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

/**
 * Class DashboardController
 * @package App\Controller\Twig
 * @Route("/dashboard")
 *
 */
class DashboardController extends AbstractController
{

    private $manager = null;

    /**
     * dashboardController constructor.
     */
    public function __construct(DashboardManager $dashboardManager )
    {
        $this->manager = $dashboardManager;
    }



    /**
     * @Route("/", name="dashboard_twig", methods={"GET"})
     * @Mapping(object="App\ApiModel\Dashboard\Dashboard", as="dashboard")
     */
    public function list(Request $request): Response
    {
        $user= (array)$request->get('dashboard');

        $TaggedFolders = $this->manager
            ->init(['userCode' => $user['user_code']])
            ->getTaggedFolders()['data'];

        $quickAccess = $this->manager
            ->init(['userCode' => $user['user_code']])
            ->getQuickAccess()['data'];

        return $this->render('dashboard/dashboard.html.twig', [
            'quick_access' => $quickAccess,
            'tagged' => $TaggedFolders

        ]);
    }




}
