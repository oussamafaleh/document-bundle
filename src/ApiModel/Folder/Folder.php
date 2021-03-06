<?php

namespace App\ApiModel\Folder;

use Symfony\Component\Validator\Constraints as Assert;
use App\Request\CommonParameterBag;

/**
 * Authentication
 *
 */
class Folder extends CommonParameterBag
{

    /**
     * @var string
     *
     * @Assert\Regex("/^[0-9a-zA-Z- _]+/")
     */
    public $label;

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
