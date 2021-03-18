<?php

namespace App\Manager;

use App\Entity\Document;
use App\Entity\Item;
use Doctrine\ORM\EntityManager;

class DashboardManager extends AbstractManager
{


    public function __construct(EntityManager $entityManager)
    {
        parent::__construct($entityManager);
    }


    function getQuickAccess($userCode)
    {

//            $user = $this->apiEntityManager
//                ->getRepository(User::class)->findOneBy(['code' => $userCode]);


        $data =   $this->apiEntityManager
            ->getRepository(Document::class)->findByFilters();

        return ['data' => $data];
    }


}
