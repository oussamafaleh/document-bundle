<?php

namespace App\Controller\API;


use Swagger\Annotations as SWG;
use Nelmio\ApiDocBundle\Annotation\Operation;
use App\Annotations\Mapping;
use App\Manager\RuleManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Core\Security;

/**
 * Class RuleController
 * @package App\Controller\Twig
 * @Route("/api/rule")
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
     * @Route("/evaluate", name="evaluate_rule", methods={"POST"})
     * @Operation(
     *     tags={"Rule"},
     *     summary="file for skeleton",
     *     @SWG\Parameter(
     *         name="expression",
     *         in="query",
     *         type="string",
     *         description="parent folder",
     *         required=true
     *     ),
     *     @SWG\Parameter(
     *         name="expression_arg",
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
     *         description="Returned when the ws-file is not authorized"
     *     ),
     *     @SWG\Response(
     *         response="404",
     *         description="Returned when the file is not found"
     *     )
     * )
     */
    public function rule(Request $request)
    {

        $expression = $request->get('expression');
        $expr_arg = (array)$request->get('expr_arg');


        return $this->manager
            ->evaluateRule($expression , $expr_arg );
    }

    /**
     * @Route("/", name="index_rule", methods={"GET"})
     */
    public function index(Request $request)
    {

        return $this->manager->getOperators();
    }


}
