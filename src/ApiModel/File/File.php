<?php

namespace App\ApiModel\File;

use Symfony\Component\Validator\Constraints as Assert;
use App\Request\CommonParameterBag;

/**
 * Authentication
 *
 */
class File extends CommonParameterBag
{

    /**
     * @var string
     *
     */
    public $parent_code;

    /**
     * @var string
     *
     */
    public $user_code;

}
