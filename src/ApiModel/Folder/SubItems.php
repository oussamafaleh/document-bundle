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
    public $user_code = '84150eb1-336a-4193-ba8d-6237bb7e374e';

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



}
