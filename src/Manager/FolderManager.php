<?php

namespace App\Manager;

use App\Entity\Folder;
use App\Entity\Item;
use App\Entity\User;
use App\Entity\UserItemProperty;
use App\Manager\FileManager;
use App\Utils\MyTools;
use Symfony\Component\HttpFoundation\RequestStack;
use Doctrine\Bundle\DoctrineBundle\Registry;

class FolderManager extends AbstractManager
{


    /**
     * @var FileManager
     */
    private $fileManager;

    public function __construct(Registry $entityManager ,RequestStack $requestStack,  FileManager $fileManager)
    {
        parent::__construct($entityManager, $requestStack);
        $this->fileManager = $fileManager;
    }

 
    /**
     * @return array
     * this method creates new folder for specific user
     */
    public function create()
    {


        $folder = (array)$this->request->get('folder');
        $icon = $this->fileManager->upload('icon');
        $user = $this->apiEntityManager
            ->getRepository(User::class)->findOneBy(['code' => $folder['user_code']]);

        $parent = $this->apiEntityManager
            ->getRepository(Folder::class)->findOneBy(['code' => $folder['parent_code']]);

        $connection = $this->apiEntityManager->getConnection();
        $connection->beginTransaction();
        $this->folder = new Folder();
        $this->folder->setLabel($folder['label'])
            ->setIcon($icon)
            ->setParent($parent);
        $this->apiEntityManager->persist($this->folder);


        $this->user_item_property = new UserItemProperty();
        $this->user_item_property->setIdItem($this->folder)
            ->setIdUser($user)
            ->setIsTagged(false)
            ->setRoles(array("OWNER" => "ROLE_OWNER"));
        $this->apiEntityManager->persist($this->user_item_property);
        $this->apiEntityManager->flush();
        $connection->commit();
        return ['data' => [
            'messages' => 'create_success',
            'object' => $this->folder->getCode()
        ]];

    }
        /**
         * @return array
         *
         * list of subItems
         */
        public function listSubItem($parentCode)
        {
            $filters =  (Array) $this->request->get("subItems");
//            $user = $this->apiEntityManager
//                ->getRepository(User::class)->findOneBy(['code' => $userCode]);

            $parent = $this->apiEntityManager
                ->getRepository(Folder::class)->findOneBy(['code' => $parentCode]);
            $filters['parent']= $parent->getId();

            $data = $this->apiEntityManager
                ->getRepository(Item::class)->findByFilters($filters);


            return ['data' => MyTools::paginator($data, $filters['index'], $filters['size'])];
        }

        /**
         * @return array
         *
         * schema of current folder
         */
        public function getschema($parentCode)
        {
            $i = 0;
            $schema = array();
            $parent = $this->apiEntityManager
                ->getRepository(Folder::class)->findOneBy(['code' => $parentCode]);
            array_push($schema, $parent->getLabel());
            while( null !== $parent->getParent()){
                $i ++;
                $parent = $parent->getParent();
                $schema[$i] = $parent->getLabel();
            }
            return['schema' => array_reverse($schema)];

        }

    }




