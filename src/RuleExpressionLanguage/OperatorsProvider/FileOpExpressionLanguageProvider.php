<?php


namespace App\RuleExpressionLanguage\OperatorsProvider;
use App\RuleExpressionLanguage\ExpressionLanguage\ExpressionOperator;
use App\RuleExpressionLanguage\ExpressionLanguage\ExpressionOperatorProviderInterface;

class FileOpExpressionLanguageProvider implements ExpressionOperatorProviderInterface

{
    public function getOperators()
    {
        return [
            new ExpressionOperator('CONTAIN', function ($right, $left) {
                return sprintf('file contain '.$right.')' );
            }, function ($right, $left) {
                if (str_contains ($right, $left)) {
                    return true;
                }
                return false;
            }, 15 , 1, " text content must contain text<br><span>Exp : [ text content] CONTAIN [text] </span> "),

            new ExpressionOperator('CLASSIFY', function ($right, $left) {
                return sprintf('classify %1$s )', $right);
            }, function ($right, $left) {
                if ( $right) {
                    return $left ;
                }
                return null;
            }, 5 , 1,"If right expression is true then classify as label<br> <span>Exp : [True | False] CLASSIFY [label] </span>"),

            new ExpressionOperator('IF_NULL', function ($right, $left) {
                return sprintf('classify %1$s )', $right);
            }, function ($right, $left) {
                if ( $right == null) {
                    return $left ;
                }
                return $right;
            }, 1 , 1,"if [right classification statment] can't perform a classification then exectue [left classification statment]<br> <span>Exp : [right classification statment] IF_NULL [left classification statment] </span>"),
        ];
    }
}