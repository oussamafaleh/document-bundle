<?php

namespace App\ApiModel\Item;

use App\ApiModel\Traits\ApiUser;
use Symfony\Component\Validator\Constraints as Assert;
use App\Request\CommonParameterBag;

/**
 * Authentication
 *
 */
class NewParent extends CommonParameterBag
{

        use ApiUser;

    /**
     * @var string
     *
     */
    public $item_code;

    /**
     * @var string
     *
     */
    public $new_parent_code;



}
