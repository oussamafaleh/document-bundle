<?php

namespace App\Manager;

use App\Entity\Folder;
use App\Entity\Item;
use App\Entity\User;
use App\Entity\UserItemProperty;
use App\Utils\MyTools;
use Doctrine\ORM\EntityManager;

class FolderManager extends AbstractManager
{



    public function __construct(EntityManager $entityManager )
    {
        parent::__construct($entityManager);
    }

 
    /**
     * @return array
     * this method creates new folder for specific user
     */
    public function create($folder)
    {


        $user = $this->apiEntityManager
            ->getRepository(User::class)->findOneBy(['code' => $folder['user_code']]);

        $parent = $this->apiEntityManager
            ->getRepository(Folder::class)->findOneBy(['code' => $folder['parent_code']]);


        if ($user === null || $parent === null) {
            dump('not_fond_exeption');exit();
           return ['data' => [
                'messages' => 'not_fond_exeption',
            ]];
        }
        if( !$this->checkSubItemsLabelUniqueness($folder['parent_code'],$folder['label'])){
            dump('fond_exeption');exit();
            return ['data' =>
                ['messages' => 'fond_exeption']
            ];
        }
        $connection = $this->apiEntityManager->getConnection();
        $connection->beginTransaction();
        $this->folder = new Folder();
        $this->folder->setLabel($folder['label'])
            ->setParent($parent);
        $this->apiEntityManager->persist($this->folder);


        $this->user_item_property = new UserItemProperty();
        $this->user_item_property->setItem($this->folder)
            ->setUser($user)
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
         * @var $parentCode == parent folder code
         * list of subItems
         */
        public function listSubItem($parentCode , $filters)
        {
//            $user = $this->apiEntityManager
//                ->getRepository(User::class)->findOneBy(['code' => $userCode]);

            $parent = $this->apiEntityManager
                ->getRepository(Folder::class)->findOneBy(['code' => $parentCode]);
            $filters['parent']= $parent->getId();

            $data = $this->apiEntityManager
                ->getRepository(Item::class)->findByFilters($filters);

            return ['data' => MyTools::paginator($data, $filters['index'], $filters['size']),
                    'parent_folder' => $parent->getLabel() ];
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
            $current= ['label' => $parent->getLabel() , 'code' => $parent->getCode()];
            while( null !== $parent->getParent()){
                $i ++;
                $parent = $parent->getParent();
                array_push($schema, ['label' => $parent->getLabel() , 'code' => $parent->getCode()]);
            }
            $schema = array_reverse($schema);
            return ['current'=>$current, 'schema'=>$schema];

        }
        /**
         * var parent_id
         * @return bool
         *
         */
        public function checkSubItemsLabelUniqueness ($parentCode , $label)
        {
            $filters = [
                'index' => -1 ,
                'size' => -1
            ];
            $subItems = $this->listSubItem($parentCode , $filters)['data']['rows'];
            foreach($subItems as $subItem) {
                if( $subItem['label'] === $label){
                    return false;
                }
            }
            return true ;
        }

    }




