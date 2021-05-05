<?php

/*
 * This file is part of the Symfony package.
 *
 * (c) Fabien Potencier <fabien@symfony.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\ExpressionLanguage\ExpressionLanguage\Node;

use App\ExpressionLanguage\ExpressionLanguage\Compiler;

/**
 * @author Fabien Potencier <fabien@symfony.com>
 *
 * @internal
 */
class NameNode extends Node
{
    public function __construct(string $name)
    {
        parent::__construct(
            [],
            ['name' => $name]
        );
    }

    public function compile(Compiler $compiler)
    {
        $compiler->raw('$'.$this->attributes['name']);
    }

    public function evaluate($functions, $operators, $values)
    {
        return $values[$this->attributes['name']];
    }

    public function toArray()
    {
        return [$this->attributes['name']];
    }
}
