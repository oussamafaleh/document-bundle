<?php

namespace App\ApiModel\Dashboard;

use App\ApiModel\Traits\ApiUser;
use App\Request\CommonParameterBag;

/**
 * Authentication
 *
 */
class Dashboard extends CommonParameterBag
{

    use ApiUser;
}
