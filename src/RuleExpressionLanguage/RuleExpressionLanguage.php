<?php

namespace App\RuleExpressionLanguage;

use App\Manager\RuleManager;
use App\RuleExpressionLanguage\ExpressionLanguage\ExpressionLanguage;
use App\RuleExpressionLanguage\FunctionsProvider\FileFuncExpressionLanguageProvider;
use App\RuleExpressionLanguage\OperatorsProvider\FileOpExpressionLanguageProvider;
use Psr\Cache\CacheItemPoolInterface;

class RuleExpressionLanguage extends ExpressionLanguage
{
    public function __construct(RuleManager $manager, CacheItemPoolInterface $cache = null, array $functionProviders = [], array $operatorProviders = [])
    {
        // prepends the default provider to let users override it
        array_unshift($functionProviders, new FileFuncExpressionLanguageProvider());
        array_unshift($operatorProviders, new FileOpExpressionLanguageProvider($manager));
        parent::__construct($cache, $functionProviders, $operatorProviders);
    }

    public function getOperators()
    {
        return $this->operators;
    }
}