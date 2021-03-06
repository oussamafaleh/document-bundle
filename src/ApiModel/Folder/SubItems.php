<?php

namespace App\ApiModel\Folder;

use Symfony\Component\Validator\Constraints as Assert;
use App\Request\CommonParameterBag;
use App\ApiModel\Traits\ApiList;

/**
 * Authentication
 *
 */
class SubItems extends CommonParameterBag
{

    use ApiList;

    /**
     * @var string
     *
     */
    public $user_code;

    /**
     * @var string
     *
     * @Assert\Regex("/^(type|label|created_at)/")
     */
    public $sort_column = 'created_at';



}
