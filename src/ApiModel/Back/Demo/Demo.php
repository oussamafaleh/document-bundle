<?php

namespace App\ApiModel\Back\Demo;

use Symfony\Component\Validator\Constraints as Assert;
use App\ApiModel\Traits\ApiList;
use App\Request\CommonParameterBag;

class Demo extends CommonParameterBag
{

   
   use ApiList;

    /**
     * @var string
     *
     * @Assert\Regex("/^[a-zA-Z]+/")
     */
    public $name;

}
