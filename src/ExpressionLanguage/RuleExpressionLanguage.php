<?php
namespace App\ExpressionLanguage;

use App\ExpressionLanguage\FunctionsProvider\FileFuncExpressionLanguageProvider;
use App\ExpressionLanguage\OperatorsProvider\FileOpExpressionLanguageProvider;
use Psr\Cache\CacheItemPoolInterface;
use Symfony\Component\ExpressionLanguage\ExpressionLanguage;

class RuleExpressionLanguage extends ExpressionLanguage
{
    public function __construct(CacheItemPoolInterface $cache = null, array $functionProviders = [], array $operatorProviders = [])
    {
        // prepends the default provider to let users override it
        array_unshift($functionProviders, new FileFuncExpressionLanguageProvider());
        array_unshift($operatorProviders, new FileOpExpressionLanguageProvider());
        parent::__construct($cache, $functionProviders, $operatorProviders);
    }
    public function getOperators(){
        return $this->operators;
    }
}