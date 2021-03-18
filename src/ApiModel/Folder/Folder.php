<?php

namespace App\ApiModel\Folder;

use App\ApiModel\Traits\ApiUser;
use Symfony\Component\Validator\Constraints as Assert;
use App\Request\CommonParameterBag;

/**
 * Authentication
 *
 */
class Folder extends CommonParameterBag
{
    use ApiUser;
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



}
