<?php

namespace App\ApiModel\Item;

use App\ApiModel\Traits\ApiUser;
use App\Request\CommonParameterBag;

/**
 * Authentication
 *
 */
class Tag extends CommonParameterBag
{

    use ApiUser;

    /**
     * @var string
     *
     */
    public $item_code;


}
