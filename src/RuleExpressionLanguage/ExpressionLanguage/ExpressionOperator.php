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

use InvalidArgumentException;
use function count;
use function function_exists;

/**
 * Represents a function that can be used in an expression.
 *
 * A function is defined by two PHP callables. The callables are used
 * by the language to compile and/or evaluate the function.
 *
 * The "compiler" function is used at compilation time and must return a
 * PHP representation of the function call (it receives the function
 * arguments as arguments).
 *
 * The "evaluator" function is used for expression evaluation and must return
 * the value of the function call based on the values defined for the
 * expression (it receives the values as a first argument and the function
 * arguments as remaining arguments).
 *
 * @author Fabien Potencier <fabien@symfony.com>
 */
class ExpressionOperator
{

    private $precedence;
    private $associativity;
    private $name;
    private $compiler;
    private $evaluator;
    private $description;

    /**
     * @param string $name The function name
     * @param int $precedence The function name
     * @param int $associativity The function name
     * @param callable $compiler A callable able to compile the function
     * @param callable $evaluator A callable able to evaluate the function
     * @param callable $description A description of expression
     */
    public function __construct(string $name, callable $compiler, callable $evaluator, int $precedence = 0, int $associativity = 0, string $description = "no discription yet")
    {
        $this->name = $name;
        $this->compiler = $compiler;
        $this->evaluator = $evaluator;
        $this->precedence = $precedence;
        $this->associativity = $associativity;
        $this->description = $description;
    }

    /**
     * Creates an ExpressionOperator from a PHP function name.
     *
     * @param string $phpOperatorName The PHP function name
     * @param string|null $expressionOperatorName The expression function name (default: same than the PHP function name)
     *
     * @return self
     *
     * @throws InvalidArgumentException if given PHP function name does not exist
     * @throws InvalidArgumentException if given PHP function name is in namespace
     *                                   and expression function name is not defined
     */
    public static function fromPhp($phpOperatorName, $expressionOperatorName = null)
    {
        $phpOperatorName = ltrim($phpOperatorName, '\\');
        if (!function_exists($phpOperatorName)) {
            throw new InvalidArgumentException(sprintf('PHP function "%s" does not exist.', $phpOperatorName));
        }

        $parts = explode('\\', $phpOperatorName);
        if (!$expressionOperatorName && count($parts) > 1) {
            throw new InvalidArgumentException(sprintf('An expression function name must be defined when PHP function "%s" is namespaced.', $phpOperatorName));
        }

        $compiler = function (...$args) use ($phpOperatorName) {
            return sprintf('\%s(%s)', $phpOperatorName, implode(', ', $args));
        };

        $evaluator = function ($p, ...$args) use ($phpOperatorName) {
            return $phpOperatorName(...$args);
        };

        return new self($expressionOperatorName ?: end($parts), $compiler, $evaluator);
    }

    public function getDescription()
    {
        return $this->description;
    }

    public function getPrecedence()
    {
        return $this->precedence;
    }

    public function getAssociativity()
    {
        return $this->associativity;
    }

    public function getName()
    {
        return $this->name;
    }

    public function getCompiler()
    {
        return $this->compiler;
    }

    public function getEvaluator()
    {
        return $this->evaluator;
    }
}
