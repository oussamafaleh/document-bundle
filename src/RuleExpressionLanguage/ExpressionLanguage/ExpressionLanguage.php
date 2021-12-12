<?php

/*
 * This file is part of the Symfony package.
 *
 * (c) Fabien Potencier <fabien@symfony.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\RuleExpressionLanguage\ExpressionLanguage;

use LogicException;
use Psr\Cache\CacheItemPoolInterface;
use Symfony\Component\Cache\Adapter\ArrayAdapter;
use function is_int;

/**
 * Allows to compile and evaluate expressions written in your own DSL.
 *
 * @author Fabien Potencier <fabien@symfony.com>
 */
class ExpressionLanguage
{
    protected $functions = [];
    protected $operators = [];
    private $cache;
    private $lexer;
    private $parser;
    private $compiler;

    /**
     * @param ExpressionFunctionProviderInterface[] $functionProviders
     */

    /**
     * @param ExpressionOperatorProviderInterface[] $operatorProviders
     */
    public function __construct(CacheItemPoolInterface $cache = null, array $functionProviders = [], array $operatorProviders = [])
    {
        $this->cache = $cache ?: new ArrayAdapter();
        $this->registerFunctions();
        foreach ($functionProviders as $functionProvider) {
            $this->registerFunctionProvider($functionProvider);
        }
        $this->registerOperators();
        foreach ($operatorProviders as $operatorProvider) {
            $this->registerOperatorProvider($operatorProvider);
        }
    }

    protected function registerFunctions()
    {
        $this->addFunction(ExpressionFunction::fromPhp('constant'));
    }

    public function addFunction(ExpressionFunction $function)
    {
        $this->register($function->getName(), $function->getCompiler(), $function->getEvaluator());
    }

    /**
     * Registers a function.
     *
     * @param string $name The function name
     * @param callable $compiler A callable able to compile the function
     * @param callable $evaluator A callable able to evaluate the function
     *
     * @throws LogicException when registering a function after calling evaluate(), compile() or parse()
     *
     * @see ExpressionFunction
     */
    public function register($name, callable $compiler, callable $evaluator)
    {
        if (null !== $this->parser) {
            throw new LogicException('Registering functions after calling evaluate(), compile() or parse() is not supported.');
        }

        $this->functions[$name] = ['compiler' => $compiler, 'evaluator' => $evaluator];
    }

    public function registerFunctionProvider(ExpressionFunctionProviderInterface $provider)
    {
        foreach ($provider->getFunctions() as $function) {
            $this->addFunction($function);
        }
    }

    protected function registerOperators()
    {
        $this->addOperator(ExpressionOperator::fromPhp('constant'));
    }

    public function addOperator(ExpressionOperator $operator)
    {
        $this->operationRegister($operator->getName(), $operator->getCompiler(), $operator->getEvaluator(), $operator->getPrecedence(), $operator->getAssociativity(), $operator->getDescription());
    }

    /**
     * Registers a function.
     *
     * @param string $name The function name
     * @param callable $compiler A callable able to compile the function
     * @param callable $evaluator A callable able to evaluate the function
     *
     * @throws LogicException when registering a function after calling evaluate(), compile() or parse()
     *
     * @see ExpressionOperation
     */
    public function operationRegister($name, callable $compiler, callable $evaluator, int $precedence, int $associativity, string $description)
    {
        if (null !== $this->parser) {
            throw new LogicException('Registering operators after calling evaluate(), compile() or parse() is not supported.');
        }

        $this->operators[$name] = ['description' => $description, 'precedence' => $precedence, 'associativity' => $associativity, 'compiler' => $compiler, 'evaluator' => $evaluator];
    }

    public function registerOperatorProvider(ExpressionOperatorProviderInterface $provider)
    {
        foreach ($provider->getOperators() as $function) {
            $this->addOperator($function);
        }
    }

    /**
     * Compiles an expression source code.
     *
     * @param Expression|string $expression The expression to compile
     * @param array $names An array of valid names
     *
     * @return string The compiled PHP source code
     */
    public function compile($expression, $names = [])
    {
        return $this->getCompiler()->compile($this->parse($expression, $names)->getNodes())->getSource();
    }

    private function getCompiler(): Compiler
    {
        if (null === $this->compiler) {
            $this->compiler = new Compiler($this->functions);
        }

        return $this->compiler->reset();
    }

    /**
     * Parses an expression.
     *
     * @param Expression|string $expression The expression to parse
     * @param array $names An array of valid names
     *
     * @return ParsedExpression A ParsedExpression instance
     */
    public function parse($expression, $names)
    {
        if ($expression instanceof ParsedExpression) {
            return $expression;
        }

        asort($names);
        $cacheKeyItems = [];

        foreach ($names as $nameKey => $name) {
            $cacheKeyItems[] = is_int($nameKey) ? $name : $nameKey . ':' . $name;
        }

        $cacheItem = $this->cache->getItem(rawurlencode($expression . '//' . implode('|', $cacheKeyItems)));

        if (null === $parsedExpression = $cacheItem->get()) {
            $nodes = $this->getParser()->parse($this->getLexer()->tokenize((string)$expression), $names);

            $parsedExpression = new ParsedExpression((string)$expression, $nodes);

            $cacheItem->set($parsedExpression);
            $this->cache->save($cacheItem);
        }
        return $parsedExpression;
    }

    private function getParser(): Parser
    {
        if (null === $this->parser) {
            $this->parser = new Parser($this->functions, $this->operators);
        }

        return $this->parser;
    }

    private function getLexer(): Lexer
    {
        if (null === $this->lexer) {
            $this->lexer = new Lexer();
        }

        return $this->lexer;
    }

    /**
     * Evaluate an expression.
     *
     * @param Expression|string $expression The expression to compile
     * @param array $values An array of values
     *
     * @return mixed The result of the evaluation of the expression
     */
    public function evaluate($expression, $values = [])
    {
        return $this->parse($expression, array_keys($values))->getNodes()->evaluate($this->functions, $this->operators, $values);
    }
}
