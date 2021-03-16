<?php

namespace App\ApiModel\Item;

use Symfony\Component\Validator\Constraints as Assert;
use App\Request\CommonParameterBag;

/**
 * Authentication
 *
 */
class NewParent extends CommonParameterBag
{



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

    /**
     * @var string
     *
     */
    public $user_code = "84150eb1-336a-4193-ba8d-6237bb7e374e";

}
