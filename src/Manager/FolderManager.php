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
use Elasticsearch\ClientBuilder;
use Exception;
use Symfony\Component\Form\FormFactory;
use Symfony\Component\HttpKernel\Exception\HttpException;
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
    private $indexName;
    private $es_port;
    private $es_host;

    public function __construct(EntityManager $entityManager, Security $security, FormFactory $formFactory, $indexName, $es_port, $es_host)
    {
        parent::__construct($entityManager);

        $this->form = $formFactory;
        $this->security = $security;
        $this->indexName = $indexName;
        $this->es_port = $es_port;
        $this->es_host = $es_host;


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
                throw new HttpException('UNKNOWN_USER', 404);
            }
        }
        if ($this->getParentCode()) {
            // find existing Parent
            $this->parent = $this->apiEntityManager
                ->getRepository(Folder::class)
                ->findOneBy(['code' => $this->getParentCode()]);

            if (!$this->parent instanceof Folder) {
                throw new HttpException('UNKNOWN_PARENT', 404);
            }
        }
        if ($this->getItemCode()) {

            // find existing Item
            $this->item = $this->apiEntityManager
                ->getRepository(Item::class)
                ->findOneBy(['code' => $this->getItemCode()]);

            if (!$this->item instanceof Item) {
                throw new HttpException('UNKNOWN_ITEM', 404);
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

    /**
     * @return string
     */
    public function getParentCode()
    {
        return $this->parentCode;
    }

    /**
     * @param string $parentCode
     */
    public function setParentCode(string $parentCode)
    {
        $this->parentCode = $parentCode;
    }

    /**
     * @return string
     */
    public function getItemCode()
    {
        return $this->itemCode;
    }

    /**
     * @param string $itemCode
     */
    public function setItemCode(string $itemCode)
    {
        $this->itemCode = $itemCode;
    }

    /**
     * @return array
     * this method creates new folder for specific user
     */
    public function create($folderParam)
    {
        if (!$this->checkSubItemsLabelUniqueness($folderParam['label'])) {
            throw new HttpException('FOUND_ITEM');
        }
        $connection = $this->apiEntityManager->getConnection();
        $connection->beginTransaction();
        $folder = new Folder();
        $folder->setLabel($folderParam['label'])
            ->setParent($this->parent);
        $this->apiEntityManager->persist($folder);

        try {
            $folder = new Folder();
            $folder->setLabel($folderParam['label'])
                ->setParent($this->parent);
            $this->apiEntityManager->persist($folder);

            $user_item_property = new UserItemProperty();
            $user_item_property->setItem($folder)
                ->setUser($this->user)
                ->setIsTagged(false)
                ->addRoles(["ROLE_OWNER"]);
            $this->apiEntityManager->persist($user_item_property);
            $this->parent->setUpdatedAt(new DateTime());
            $this->apiEntityManager->persist($this->parent);

            $this->IndexCreateFolder($folder);

            $this->apiEntityManager->flush();
            $connection->commit();
            return [
                'data' => [
                    'code' => $folder->getCode()
                ],
                'messages' => 'create_success'
            ];
        } catch (Exception $ex) {
            $connection->rollback();
            throw new HttpException($ex->getMessage());
        }
    }

    /**
     * var parent_id
     * @return bool
     *
     */
    public function checkSubItemsLabelUniqueness($label)
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

        return [
            'messages' => 'list-item-success',
            'data' => MyTools::paginator($data, $filters['index'], $filters['size']),
            'parent_folder' => $this->parent->getLabel(),
            'parent_code' => $this->parent->getCode(),
            'parent_roles' => $parentRole];
    }

    public function IndexCreateFolder(Folder $folder)
    {


        $user_code = $this->security->getUser()->getCode();

        $array = [
            $this->es_host . ':' . $this->es_port
        ];

        $client = ClientBuilder::create()
            ->setHosts((array)$array[0])
            ->build();

        $created_at = date('d-m-y h:i:s');


        $params = [
            'index' => $this->getIndexName(),
            'id' => $folder->getCode(),
            'body' => [
                'label' => $folder->getlabel(),
                'created_at' => $created_at,
                'update_at' => null,
                'type' => 'folder',
                'user_code' => $user_code


            ]
        ];

        $client->index($params);

    }

    public function getIndexName()
    {
        return $this->indexName;
    }

    /**
     * @return array
     * list of subItems
     */
    public function listSharedItem($filters)
    {

        $data = $this->apiEntityManager
            ->getRepository(Item::class)->findByFilters($filters);
        return [
            'messages' => 'list-item-success',
            'data' => MyTools::paginator($data, $filters['index'], $filters['size']),


        ];
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
            ->addRoles(["ROLE_OWNER"]);
        $this->apiEntityManager->persist($user_item_property);
        $this->apiEntityManager->flush();
        $connection->commit();
        return ['data' => [
            'messages' => 'create_success',
            'code' => $folder->getCode()
        ]];

    }

    public function listSubItemTwigData($filters)
    {
        $schema = $this->getschema();
        $data = $this->listSubItem($filters);
        $rederedData = [
            'data' => $data['data'],
            'current' => $schema['current'],
            'schema' => []
        ];

        if ($this->security->isGranted('ROLE_OWNER', $this->parent->getCode())) {
            $rederedData['schema'] = $schema['schema'];
        }
        if ($this->security->isGranted("ROLE_CREATE", $this->parent->getCode())) {
            $folderForm = $this->form->create(FolderType::class);
            $rederedData['folder_form'] = $folderForm->createView();

            $fileForm = $this->form->create(DocumentType::class);
            $rederedData['file_form'] = $fileForm->createView();
        }

        return $rederedData;
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
        $parent = $this->parent;
        $current = ['label' => $parent->getLabel(), 'code' => $parent->getCode()];

        while (null !== $parent->getParent()) {
            $i++;
            $parent = $parent->getParent();
            array_push($schema, ['label' => $parent->getLabel(), 'code' => $parent->getCode()]);
        }
        $schema = array_reverse($schema);
        return ['current' => $current, 'schema' => $schema];

    }
}




