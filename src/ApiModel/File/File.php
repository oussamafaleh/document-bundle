<?php

namespace App\ApiModel\File;

use App\ApiModel\Traits\ApiUser;
use App\Request\CommonParameterBag;

/**
 * Authentication
 *
 */
class File extends CommonParameterBag
{

    use ApiUser;

    /**
     * @var string
     *
     */
    public $parent_code;


}
