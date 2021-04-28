<?php


namespace App\Manager;


use App\Entity\Document;
use App\Entity\Rule;
use Doctrine\ORM\EntityManager;
use App\ExpressionLanguage\RuleExpressionLanguage;

class RuleManager
{
    private $expressionLanguage;

    public function __construct()
    {

        $this->expressionLanguage = new RuleExpressionLanguage();

    }
    public function evaluateRule($expression, $exprArg )
    {
        //$rule = $this->apiEntityManager->getRepository(Rule::class)->findOneBy(['eventName' => $eventName]);
        $ast =  $this->expressionLanguage->evaluate($expression, $exprArg);
        return ['data' => $ast];
        //dd($ast);
    }

}