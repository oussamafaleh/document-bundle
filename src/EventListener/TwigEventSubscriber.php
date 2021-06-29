<?php


namespace App\EventListener;


use App\Form\FolderType;
use App\Manager\DashboardManager;
use App\Form\DocumentType;
use Symfony\Component\Form\FormFactory;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpKernel\Event\ControllerEvent;
use Twig\Environment;

class TwigEventSubscriber
{
    public const TWIG_ROUT = 'Twig';
    private $twig;
    /**
     * @var RequestStack
     */
    private $requestStack;

    /**
     * @var DashboardManager
     */
    private $manager;
    /**
     * @var FormFactory
     */
    private $form;
    /**
     * @var Request
     */
    private $request;


    public function __construct(Environment $twig, DashboardManager $dashboardManager ,FormFactory $formFactory,RequestStack $requestStack )
    {
        $this->twig = $twig;
        $this->manager = $dashboardManager;
        $this->form  = $formFactory ;
        $this->request = $requestStack->getCurrentRequest();
    }

    public function getGlobalData(){
        $user_code = "0970229e-4867-4ada-b0ac-a199446cbc21";

        $globalData['tagged'] = $this->manager
            ->init(['userCode' => $user_code])
            ->getTaggedFolders()['data'];

        $folderForm = $this->form->create(FolderType::class );
        $fileForm = $this->form->create(DocumentType::class );

        $globalData['tag_form'] = $folderForm->createView();
        $globalData['file_classify_form'] = $fileForm->createView();
        return $globalData;

    }

     public function onControllerEvent(ControllerEvent $event)
{

    if(str_contains ( $event->getRequest()->get('_controller'),self::TWIG_ROUT)){
        $this->twig->addGlobal('tagged', $this->getGlobalData()['tagged']);
        $this->twig->addGlobal('tag_form', $this->getGlobalData()['tag_form']);
        $this->twig->addGlobal('file_classify_form', $this->getGlobalData()['file_classify_form']);

    }
}

     public static function getSubscribedEvents(){}

}