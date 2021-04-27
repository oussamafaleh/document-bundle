<?php

namespace App\ExpressionLanguage\FunctionsProvider;

use Symfony\Component\ExpressionLanguage\ExpressionFunction;
use Symfony\Component\ExpressionLanguage\ExpressionFunctionProviderInterface;

class FileFuncExpressionLanguageProvider implements ExpressionFunctionProviderInterface
{
    public function getFunctions()
    {
        return [
            new ExpressionFunction('contain', function ($fileContent, $world) {
                return sprintf('file contain '.$world.')' );
            }, function ($arg, $fileContent, $world) {
                if (str_contains ($fileContent, $world)) {
                    return true;
                }

                return false;
            }),

            new ExpressionFunction('classify', function ($class) {
                return sprintf('classify %1$s )', $class);
            }, function ($arg, $class) {
                return $class;
            }),
        ];
    }
}