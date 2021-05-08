<?php
namespace App\RuleExpressionLanguage;

use App\RuleExpressionLanguage\FunctionsProvider\FileFuncExpressionLanguageProvider;
use App\RuleExpressionLanguage\OperatorsProvider\FileOpExpressionLanguageProvider;
use Psr\Cache\CacheItemPoolInterface;
use App\RuleExpressionLanguage\ExpressionLanguage\ExpressionLanguage;

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