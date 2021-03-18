<?php

namespace App\Manager;

use App\Entity\Document;
use App\Entity\Item;
use App\Entity\User;
use Doctrine\ORM\EntityManager;

class DashboardManager extends AbstractManager
{


    public function __construct(EntityManager $entityManager)
    {
        parent::__construct($entityManager);
    }


    function getQuickAccess($userCode)
    {

        $user = $this->apiEntityManager
            ->getRepository(User::class)->findOneBy(['code' => $userCode]);
        if ($user === null) {
            dump('not_fond_exeption');exit();
            return ['data' => [
                'messages' => 'not_fond_exeption',
            ]];
        }
        $filters = [
            'user' => $user->getId()
        ];

        $data =   $this->apiEntityManager
            ->getRepository(Document::class)->findByFilters($filters);

        return ['data' => $data];
    }


}
