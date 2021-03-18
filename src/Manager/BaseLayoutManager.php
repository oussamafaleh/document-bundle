<?php

namespace App\Manager;

use App\Entity\Document;
use App\Entity\Item;
use Doctrine\ORM\EntityManager;

class BaseLayoutManager extends AbstractManager
{


    public function __construct(EntityManager $entityManager)
    {
        parent::__construct($entityManager);
    }


    function getLayoutData()
    {
        $filters = [
            'parent_code' => $parentCode ,
            'index' => -1 ,
            'size' => -1
        ];
        $taggedFolders =   $this->apiEntityManager
            ->getRepository(Item::class)->findByFilters($filters);

        return ['data' => $data];
    }


}
