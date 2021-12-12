<?php

namespace App\ApiModel\Folder;

use App\ApiModel\Traits\ApiList;
use App\ApiModel\Traits\ApiUser;
use App\Request\CommonParameterBag;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * Authentication
 *
 */
class SubItems extends CommonParameterBag
{

    use ApiList;

    use ApiUser;

    /**
     * @var string
     *
     */
    public $type;

    /**
     * @var string
     *
     */
    public $parent_code;

    /**
     * @var string
     *
     * @Assert\Regex("/^(type|label|created_at|updated_at)/")
     */
    public $sort_column = 'created_at';

    /**
     * @var array
     *
     */
    public $role;


}
