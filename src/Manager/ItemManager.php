<?php

namespace App\Manager;


use App\Entity\Folder;
use App\Entity\Item;
use App\Entity\User;
use App\Entity\UserItemProperty;
use App\Form\DocumentEditType;
use App\Form\FolderEditType;
use App\Form\ItemType;
use Doctrine\ORM\EntityManager;
use Elasticsearch\ClientBuilder;
use Exception;
use Symfony\Component\Form\FormFactory;
use Symfony\Component\HttpKernel\Exception\HttpException;
use Symfony\Component\Security\Core\Security;


class ItemManager extends AbstractManager
{

    /**
     * @var FormFactory
     */
    private $form;

    private $uploads_directory;
    private $indexName;
    private $es_config;
    private $attachment;
    private $es_port;
    private $es_host;
    private $security;

    public function __construct(EntityManager $entityManager, string $uploads_directory, FormFactory $formFactory, Security $security, string $indexName, $es_port, $es_host, string $attachment)
    {
        parent::__construct($entityManager);
        $this->uploads_directory = $uploads_directory;
        $this->form = $formFactory;
        $this->security = $security;
        $this->indexName = $indexName;
        $this->es_port = $es_port;
        $this->es_host = $es_host;
        $this->es_config = $attachment;


    }

    public function getAttachment()
    {
        return $this->attachment;
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
                throw new HttpException('UNKNOWN_USER');
            }
        }
        if ($this->getParentCode()) {

            // find existing Parent
            $this->parent = $this->apiEntityManager
                ->getRepository(Folder::class)
                ->findOneBy(['code' => $this->getParentCode()]);

            if (!$this->parent instanceof Folder) {
                throw new HttpException('UNKNOWN_PARENT');
            }
        }
        if ($this->getItemCode()) {

            // find existing Item
            $this->item = $this->apiEntityManager
                ->getRepository(Item::class)
                ->findOneBy(['code' => $this->getItemCode()]);

            if (!$this->item instanceof Item) {
                throw new HttpException('UNKNOWN_ITEM');
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
     * @return string
     */
    public function getParentCode()
    {
        return $this->parentCode;
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

    public function delete($item_code)
    {
        $publicResourcesFolderPath = $this->uploads_directory;


        $item = $this->apiEntityManager
            ->getRepository(Item::class)->findOneBy(['code' => $item_code]);

        if (!$item) {
            return ' Error not found!';
        }
        $connection = $this->apiEntityManager->getConnection();
        $connection->beginTransaction();

        $this->deleteIndex($item_code);


        if ($item->getType() == "Document") {
            $file_to_delete = $item->getCode();
            $path = $publicResourcesFolderPath . $file_to_delete;
            unlink($path);
            $this->apiEntityManager->remove($item);
            $this->apiEntityManager->flush();
            $connection->commit();


            return "File Deleted Successfully!";


        }

        $this->apiEntityManager->remove($item);
        $this->apiEntityManager->flush();
        $connection->commit();

        return 'Folder Deleted Successfully!';
    }

    public function deleteIndex($item_code)
    {
        $array = [
            $this->es_host . ':' . $this->es_port
        ];
        $client = ClientBuilder::create()
            ->setHosts($array)
            ->build();

        $index = $this->getIndexName();
        $params = [
            'index' => $index,
            'id' => $item_code
        ];

        $client->delete($params);


    }

    public function getIndexName()
    {
        return $this->indexName;
    }

    public function generateLink($item_code)
    {
        $item = $this->apiEntityManager
            ->getRepository(Item::class)->findOneBy(['code' => $item_code]);

        if (!$item) {
            return ' Error not found!';
        }
        $type = $item->getType();
        if ($type == "Folder") {
            $prefixe = "http://localhost:8000/folder/list-sub-item/";
            $url = $prefixe . $item_code;

        } else {
            $url = "pas encore";
        }


        return $url;
    }


    public function shareByEmail($item_code, $email, $roles)
    {

        $connection = $this->apiEntityManager->getConnection();
        $connection->beginTransaction();

        $item = $this->apiEntityManager
            ->getRepository(Item::class)->findOneBy(['code' => $item_code]);

        $user = $this->apiEntityManager
            ->getRepository(User::class)->findOneByEmail($email);
        /*
          $userItemProperty = $this->apiEntityManager
          ->getRepository(UserItemProperty::class)->findOneByRole($roles);
          dump( $userItemProperty );
          exit;

          */
        //  $userItemProperty = $this->apiEntityManager
        //  ->getRepository(UserItemProperty::class)->findOneByRole($roles);

        /*
                $userItemProperty = $this->apiEntityManager
                ->getRepository(UserItemProperty::class)->findOneBy(array(
                    'item' =>  $item->getId(),
                    'user' =>  $user->getId(),
                    'roles' => $roles


                ));

                */


        /*
        if(!empty($userItemProperty)){
            return "already shared";
        }
       */


        $userItemProperty = new UserItemProperty();

        $userItemProperty->setItem($item)
            ->setUser($user)
            ->setIsTagged(false)
            ->setRoles($roles);
        $this->apiEntityManager->persist($userItemProperty);
        $this->apiEntityManager->flush();

        $connection->commit();
        return [
            'link' => $link,
        ];

    }


    public function shareLink($item_code, $roles)
    {

        $connection = $this->apiEntityManager->getConnection();
        $connection->beginTransaction();

        /*
       $itemExist =$this->itemManager->init([$item_code=> $this->getItemCode]);
       var_dump($fileExist);
      
       */

        $item = $this->apiEntityManager
            ->getRepository(Item::class)->findOneBy(['code' => $item_code]);


        $userItemProperty = $this->apiEntityManager
            ->getRepository(UserItemProperty::class)->findOneBy(array(
                'item' => $item->getId(),
                'user' => null,
                'roles' => $roles

            ));


        if (!empty($userItemProperty)) {
            return "already shared";
        }

        $userItemProperty = new UserItemProperty();

        $userItemProperty->setItem($item)
            ->setUser(null)
            ->setIsTagged(false)
            ->setRoles($roles);
        $this->apiEntityManager->persist($userItemProperty);
        $this->apiEntityManager->flush();

        $connection->commit();

        $prefixe = "http://localhost:8000/folder/list-sub-item/";
        $link = $prefixe . $item_code;

        //  $sharedLink= generateLink($item_code);
        return ['data' => [
            'link' => $link,

        ]];

    }


    public function CancelShareLink($item_code)
    {

        /*
              $itemExist =$this->itemManager->init([$item_code=> $this->getItemCode]);
              var_dump($fileExist);

              */
        $item = $this->apiEntityManager
            ->getRepository(Item::class)->findOneBy(['code' => $item_code]);


        $userItemProperty = $this->apiEntityManager
            ->getRepository(UserItemProperty::class)->findOneBy(array(
                'item' => $item->getId(),
                'user' => null

            ));

        if (!empty($userItemProperty)) {
            $this->apiEntityManager->remove($userItemProperty);

            $this->apiEntityManager->flush();
            return "link removed";
        } else {
            return "Link not found";


        }
    }


    public function CancelSharePerEmail($item_code, $email)
    {


        $item = $this->apiEntityManager
            ->getRepository(Item::class)->findOneBy(['code' => $item_code]);

        $user = $this->apiEntityManager
            ->getRepository(User::class)->findOneByEmail($email);

        $userItemProperty = $this->apiEntityManager
            ->getRepository(UserItemProperty::class)->findOneBy(array(
                'item' => $item->getId(),
                'user' => $user->getId()

            ));


        if (!empty($userItemProperty)) {
            $this->apiEntityManager->remove($userItemProperty);

            $this->apiEntityManager->flush();
            return "link removed";
        } else {
            return "Link not found";


        }


    }


    public function changePermission($item_code, $roles)
    {
        /*
       $itemExist =$this->itemManager->init([$item_code=> $this->getItemCode]);
       var_dump($fileExist);
      
       */
        $item = $this->apiEntityManager
            ->getRepository(Item::class)->findOneBy(['code' => $item_code]);


        $userItemProperty = $this->apiEntityManager
            ->getRepository(UserItemProperty::class)->findOneBy(array(
                'item' => $item->getId(),
                'user' => null

            ));


        $userItemProperty->setRoles($roles);


        $this->apiEntityManager->persist($userItemProperty);

        $this->apiEntityManager->flush();
        return ['data' => [
            'messages' => 'update_success',
        ]];

    }


    public function rename($item_code, $request)
    {


        /*
        $itemExist =$this->itemManager->init([$item_code=> $this->getItemCode]);
        var_dump($fileExist);

        */
        $item = $this->apiEntityManager
            ->getRepository(Item::class)->findOneBy(['code' => $item_code]);

        if (empty($item)) {
            return ['data' => [
                'messages' => 'no item found',


            ]];
        }


        $itemForm = $this->form->create(ItemType::class, $item);


        $itemForm->submit($request->request->all(), false);


        if (!$itemForm->isValid()) {
            $errors = [];
            foreach ($itemForm->getErrors(true) as $error) {
                if ($error->getOrigin()) {
                    $errors[$error->getOrigin()->getName()][] = $error->getMessage();
                }

            }
            return $errors;


        }


        $content = $request->getContent();
        $params = json_decode($content, true);

        $item->setLabel($params['label']);

        $this->updateIndex($params['label'], $item_code);

        $this->apiEntityManager->flush();

        return "success";


    }


    public function updateIndex($label, $item_code)
    {

        // $user_code = $this->security->getUser()->getCode();  
        $user_code = "0970229e-4867-4ada-b0ac-a199446cbc21";
        $array = [
            $this->es_host . ':' . $this->es_port
        ];

        $client = ClientBuilder::create()
            ->setHosts((array)$array[0])
            ->build();
        $updated_at = date('d-m-y h:i:s');
        $index = $this->getIndexName();
        $paramIndex = [
            'index' => $index,
            'id' => $item_code,

            'body' => [

                'doc' => [
                    'label' => $label,
                    'updated_at' => $updated_at,
                    //    'user_code' =>  $user_code ,
                ]

            ]
        ];

        $client->update($paramIndex);
    }


    public function searchKeyWord($keyword)
    {

        $user_code = $this->security->getUser()->getCode();
        $array = [
            $this->es_host . ':' . $this->es_port
        ];

        $client = ClientBuilder::create()
            ->setHosts((array)$array[0])
            ->build();

        $index = $this->getIndexName();
        $params = [
            'index' => $index,
            'body' => [
                'query' => [
                    'query_string' => [
                        'query' => $keyword,
                        'user_code' => $user_code
                    ]
                ]
            ]
        ];


        return $response = $client->search($params);

    }

    public function searchType($search, $searchType)
    {
        switch ($searchType) {
            case "label":
                $search =
                    [
                        "query_string" => [
                            "query" => "*" . $search . "*",
                            "fields" => [
                                "label"
                            ]
                        ]
                    ];
                break;
                break;
            case "typeDoc":
                $search = [
                    'match' => [
                        'type' => $search
                    ]];
                break;
            case "content":
                $search =
                    [
                        "query_string" => [
                            "query" => "*" . $search . "*",
                            "fields" => [
                                "attachment.content"
                            ]
                        ]
                    ];
                break;
            case "extension":
                $search = [
                    'match' =>
                        [
                            'extension' => $search
                        ]];
                break;


        }
        return $this->search($search);

    }

    public function search($search)
    {

        $user_code = $this->security->getUser()->getCode();
        $array = [
            $this->es_host . ':' . $this->es_port
        ];

        $client = ClientBuilder::create()
            ->setHosts((array)$array[0])
            ->build();

        $index = $this->getIndexName();
        $params = [
            'index' => $index,
            'body' => [
                'query' => [
                    "bool" => [
                        "must" => [
                            ['match' => [
                                'user_code' => $user_code
                            ]]
                        ]
                    ]
                ]
            ]
        ];
        $params['body']['query']['bool']['must'][] = $search;
        return $client->search($params);


    }


}
