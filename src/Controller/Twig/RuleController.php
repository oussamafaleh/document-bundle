<?php

namespace App\Controller\Twig;

use App\Entity\Folder;
use App\Annotations\Mapping;
use App\Form\DocumentType;
use App\Manager\RuleManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Core\Security;

/**
 * Class RuleController
 * @package App\Controller\Twig
 * @Route("/doc-bundle/rule")
 *
 */
class RuleController extends AbstractController
{

    private $manager = null;

    private $security;

    /**
     * ruleController constructor.
     */
    public function __construct(RuleManager $ruleManager, Security $security )
    {
        $this->manager = $ruleManager;
        $this->security = $security;
    }


    /**
     * @Route("/", name="index_rule_twig", methods={"GET"})
     */
    public function index(Request $request)
    {

        return $this->render('rule/rule.html.twig');
    }

    /**
     * @Route("/evaluate", name="evaluate_rule_twig", methods={"POST"})
     */
    public function rule(Request $request)
    {

        $expression = $request->get('expression');
        $expr_arg = (array)$request->get('expr_arg');


        return $this->manager
            ->evaluateRule($expression , $expr_arg );
    }




}
