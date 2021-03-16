<?php

namespace App\Manager;

use App\Entity\Demo;
use App\Entity\Folder;
use App\Entity\Item;
use App\Entity\User;
use phpDocumentor\Reflection\DocBlock\Tags\Param;
use Symfony\Component\HttpFoundation\RequestStack;
use Doctrine\Bundle\DoctrineBundle\Registry;

class ItemManager extends AbstractManager
{



    public function __construct(Registry $entityManager, RequestStack $requestStack)
    {
        parent::__construct($entityManager, $requestStack);
    }

 





}
