<?php

namespace App\ApiModel\Dashboard;

use App\ApiModel\Traits\ApiUser;
use Symfony\Component\Validator\Constraints as Assert;
use App\Request\CommonParameterBag;

/**
 * Authentication
 *
 */
class Dashboard extends CommonParameterBag
{

    use ApiUser;



}
