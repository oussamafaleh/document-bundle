<?php


namespace App\ExpressionLanguage\OperatorsProvider;
use Symfony\Component\ExpressionLanguage\ExpressionOperator;
use Symfony\Component\ExpressionLanguage\ExpressionOperatorProviderInterface;

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
            }, 15 , 1),

            new ExpressionOperator('CLASSIFY', function ($right, $left) {
                return sprintf('classify %1$s )', $right);
            }, function ($right, $left) {
                if ( $right) {
                    return $left ;
                }
                return null;
            }, 5 , 1),

            new ExpressionOperator('IF_NULL', function ($right, $left) {
                return sprintf('classify %1$s )', $right);
            }, function ($right, $left) {
                if ( $right == null) {
                    return $left ;
                }
                return $right;
            }, 1 , 1),
        ];
    }
}