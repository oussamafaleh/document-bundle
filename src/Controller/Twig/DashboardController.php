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
use Symfony\Component\Security\Core\Security;

/**
 * Class DashboardController
 * @package App\Controller\Twig
 * @Route("/doc-bundle/dashboard")
 *
 */
class DashboardController extends AbstractController
{

    private $manager = null;

    private $security;

    /**
     * dashboardController constructor.
     */
    public function __construct(DashboardManager $dashboardManager, Security $security )
    {
        $this->manager = $dashboardManager;
        $this->security = $security;
    }



    /**
     * @Route("/", name="dashboard_twig", methods={"GET"})
     * @Mapping(object="App\ApiModel\Dashboard\Dashboard", as="dashboard")
     */
    public function list(Request $request): Response
    {
        $user= (array)$request->get('dashboard');

        $history = $this->manager->getBreafHistory();
        $TaggedFolders = $this->manager
            ->init(['userCode' => $user['user_code']])
            ->getTaggedFolders()['data'];

        $quickAccess = $this->manager
            ->init(['userCode' => $user['user_code']])
            ->getQuickAccess()['data'];

        return $this->render('dashboard/dashboard.html.twig', [
            'history' => $history,
            'quick_access' => $quickAccess,

        ]);
    }




}
