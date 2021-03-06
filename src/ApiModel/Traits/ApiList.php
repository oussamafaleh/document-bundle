<?php

namespace App\ApiModel\Traits;

use Symfony\Component\Validator\Constraints as Assert;

/**
 *  ApiList Trait
 *
 */
trait ApiList
{

    /**
     * @var string
     *
     * @Assert\Regex("/^(ASC|DESC|asc|desc)/")
     */
    public $sort_order = 'DESC';

    /**
     * @var int
     *
     * @Assert\Regex(
     *     pattern="/^[0-9]+$/",
     *     match=true,
     *     message="Your page should be a number"
     * )
     */
    public $index = 1;

    /**
     * @var int
     * @Assert\Regex(
     *     pattern="/^[0-9]+$/",
     *     match=true,
     *     message="Your maxPerPage should be a number"
     * )
     */
    public $size = 10;


}
