<?php

namespace App\ApiModel\File;

use App\ApiModel\Traits\ApiUser;
use Symfony\Component\Validator\Constraints as Assert;
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
