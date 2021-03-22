<?php

namespace App\Manager;

use App\Entity\Document;
use App\Entity\History;
use App\Entity\Item;
use App\Entity\User;
use Doctrine\ORM\EntityManager;

class DashboardManager extends AbstractManager
{

    /** @var string */
    private $userCode;


    public function __construct(EntityManager $entityManager)
    {
        parent::__construct($entityManager);
    }

    public function init($settings = [])
    {
        parent::setSettings($settings);

        if ($this->getUserCode()) {

            // find existing User
            $this->user = $this->apiEntityManager
                ->getRepository(User::class)
                ->findOneBy(['code' => $this->getUserCode()]);

            if (!$this->user instanceof User) {
                throw new \Exception('UNKNOWN_USER');
            }
        }

        return $this;
    }


    /**
     * @return string
     */
    public function getUserCode()
    {
        return $this->userCode;
    }



    /**
     * @param string $userCode
     */
    public function setUserCode(string $userCode)
    {
        $this->userCode = $userCode;
    }


    function getQuickAccess()
    {

        $filters = [
            'user' => $this->user->getId()
        ];

        $data =   $this->apiEntityManager
            ->getRepository(Document::class)->findByFilters($filters);

        return ['data' => $data];
    }
    function getTaggedFolders()
    {


        $filters = [
            'user' => $this->user->getId(),
            'is_tagged' => "1",
            'type'=> "folder"
        ];

        $data =   $this->apiEntityManager
            ->getRepository(Item::class)->findByFilters($filters);

        return ['data' => $data];
    }

    function getBreafHistory()
    {
        $filters = [
            'index' => 1 ,
            'size' => 7
        ];

        $data =   $this->apiEntityManager
            ->getRepository(History::class)->findByFilters($filters);
        return ['data' => $data];
    }


}
