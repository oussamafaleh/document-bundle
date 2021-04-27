<?php


namespace App\Manager;


use App\Entity\Document;
use App\Entity\Rule;

class RuleManager
{

    public function evaluateRule($expression, $exprArg )
    {
        //$rule = $this->apiEntityManager->getRepository(Rule::class)->findOneBy(['eventName' => $eventName]);
        $ast =  $this->expressionLanguage->evaluate($expression, $exprArg);
        return ['data' => $ast];
        //dd($ast);
    }

}