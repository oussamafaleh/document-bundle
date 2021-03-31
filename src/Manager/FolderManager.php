<?php

namespace App\Manager;

use App\Entity\Folder;
use App\Entity\Item;
use App\Entity\User;
use App\Entity\UserItemProperty;
use App\Form\DocumentType;
use App\Form\FolderType;
use App\Utils\MyTools;
use DateTime;
use Doctrine\ORM\EntityManager;
use Symfony\Component\Form\FormFactory;
use Symfony\Component\Security\Core\Security;

class FolderManager extends AbstractManager
{

    /** @var string */
    private $itemCode;

    /** @var string */
    private $userCode;

    /** @var string */
    private $parentCode;

    /**
     * @var FormFactory
     */
    private $form;


    private $security;


    public function __construct(EntityManager $entityManager, Security $security ,FormFactory $formFactory)
    {
        parent::__construct($entityManager);

        $this->form  = $formFactory ;
        $this->security = $security;
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
        if ($this->getParentCode()) {

            // find existing Parent
            $this->parent = $this->apiEntityManager
                ->getRepository(Folder::class)
                ->findOneBy(['code' => $this->getParentCode()]);

            if (!$this->parent instanceof Folder) {
                throw new \Exception('UNKNOWN_PARENT');
            }
        }
        if ($this->getItemCode()) {

            // find existing Item
            $this->item = $this->apiEntityManager
                ->getRepository(Item::class)
                ->findOneBy(['code' => $this->getItemCode()]);

            if (!$this->item instanceof Item) {
                throw new \Exception('UNKNOWN_ITEM');
            }
        }

        return $this;
    }


    /**
     * @return string
     */
    public function getItemCode()
    {
        return $this->itemCode;
    }



    /**
     * @return string
     */
    public function getUserCode()
    {
        return $this->userCode;
    }


    /**
     * @return string
     */
    public function getParentCode()
    {
        return $this->parentCode;
    }

    /**
     * @param string $itemCode
     */
    public function setItemCode(string $itemCode)
    {
        $this->itemCode = $itemCode;
    }

    /**
     * @param string $userCode
     */
    public function setUserCode(string $userCode)
    {
        $this->userCode = $userCode;
    }

    /**
     * @param string $parentCode
     */
    public function setParentCode(string $parentCode)
    {
        $this->parentCode = $parentCode;
    }



    /**
     * @return array
     * this method creates new folder for specific user
     */
    public function create($folderParam)
    {
        if (!$this->checkSubItemsLabelUniqueness($folderParam['label'])) {
            throw new \Exception('FOUND_ITEM');
        }
        $connection = $this->apiEntityManager->getConnection();
        $connection->beginTransaction();
        $folder = new Folder();
        $folder->setLabel($folderParam['label'])
            ->setParent($this->parent);
        $this->apiEntityManager->persist($folder);


        $user_item_property = new UserItemProperty();
        $user_item_property->setItem($folder)
            ->setUser($this->user)
            ->setIsTagged(false)
            ->setRoles(array("OWNER" => "ROLE_OWNER"));
        $this->apiEntityManager->persist($user_item_property);
        $this->parent->setUpdatedAt(new DateTime());
        $this->apiEntityManager->persist($this->parent);

        $this->apiEntityManager->flush();
        $connection->commit();
        return ['data' => [
            'messages' => 'create_success',
            'code' => $folder->getCode()
        ]];

    }

    /**
     * @return array
     * @var parentCode == parent folder code
     * list of subItems
     */
    public function listSubItem($filters)
    {

        $filters['parent'] = $this->parent->getId();
        $filters['user'] = $this->user->getId();

        $data = $this->apiEntityManager
            ->getRepository(Item::class)->findByFilters($filters);
        $parentRole =
            $this->apiEntityManager
                ->getRepository(UserItemProperty::class)
                ->findOneBy(['item' => $this->parent, 'user' => $this->user])
                ->getRoles();

        return ['data' => MyTools::paginator($data, $filters['index'], $filters['size']),
            'parent_folder' => $this->parent->getLabel(),
            'parent_code' => $this->parent->getCode(),
            'parent_roles' =>$parentRole ];
    }


    /**
     * @return array
     *
     * schema of current folder
     */
    public function getschema()
    {
        $i = 0;
        $schema = array();
         $current = ['label' => $this->parent->getLabel(), 'code' => $this->parent->getCode()];

        while (null !== $this->parent->getParent()) {
            $i++;
            $this->parent = $this->parent->getParent();
            array_push($schema, ['label' => $this->parent->getLabel(), 'code' => $this->parent->getCode()]);
        }
        $schema = array_reverse($schema);
        return ['current' => $current, 'schema' => $schema];

    }

    /**
     * var parent_id
     * @return bool
     *
     */
    public function checkSubItemsLabelUniqueness( $label)
    {
        $filters = [
            'index' => -1,
            'size' => -1
        ];
        $subItems = $this->listSubItem($filters)['data']['rows'];
        foreach ($subItems as $subItem) {
            if ($subItem['label'] === $label) {
                return false;
            }
        }
        return true;
    }

    /**
     * @return array
     *
     * move Item
     */
    public function moveItem()
    {

        $this->item->setParent($this->parent);

        $this->apiEntityManager->persist($this->item);
        $this->apiEntityManager->persist($this->item);

        $parent = $this->item->getParent($this->parent);
        $parent->setUpdatedAt(new DateTime());
        $this->apiEntityManager->persist($this->item);

        $this->apiEntityManager->flush();
        return ['data' => [
            'messages' => 'update_success',
            'code' => $this->item->getCode(),
            'label' => $this->item->getParent()->getLabel(),
        ]];
    }

    public function setTagged()
    {

        $itemProperty = $this->apiEntityManager
            ->getRepository(UserItemProperty::class)->findOneBy(['item' => $this->item, 'user' => $this->user]);
        $itemProperty->setIsTagged("1");
        $this->apiEntityManager->persist($itemProperty);

        $this->apiEntityManager->flush();
        return ['data' => [
            'messages' => 'update_success',
            'object' => $this->item->getLabel(),
        ]];

    }
    /**
     * @return array
     * this method creates new folder for specific user
     */
    public function createTag($folderParam)
    {

        $connection = $this->apiEntityManager->getConnection();
        $connection->beginTransaction();
        $folder = new Folder();
        $folder->setLabel($folderParam['label']);
        $this->apiEntityManager->persist($folder);


        $user_item_property = new UserItemProperty();
        $user_item_property->setItem($folder)
            ->setUser($this->user)
            ->setIsTagged(true)
            ->setRoles(array("OWNER" => "ROLE_OWNER"));
        $this->apiEntityManager->persist($user_item_property);
        $this->apiEntityManager->flush();
        $connection->commit();
        return ['data' => [
            'messages' => 'create_success',
            'code' => $folder->getCode()
        ]];

    }
    public function listSubItemTwigData($filters){
        $data = $this->listSubItem( $filters);
        $schema = $this->getschema();
        $rederedData = [
            'data' => $data['data'],
            'current' => $schema['current'],
            'schema' => []
        ];
        if ($this->security->isGranted('ROLE_OWNER',$this->parent )){
            $rederedData['schema'] =$schema['schema'];
        }
        if ($this->security->isGranted("ROLE_CREATE",$this->parent )){
            $folderForm = $this->form->create(FolderType::class );
            $rederedData['folder_form'] = $folderForm->createView();

            $fileForm = $this->form->create(DocumentType::class );
            $rederedData['file_form'] =$fileForm->createView();
        }


        return $rederedData;
    }
}




