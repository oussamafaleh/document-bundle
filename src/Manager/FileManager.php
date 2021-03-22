<?php

namespace App\Manager;

use App\Entity\Document;
use App\Entity\Folder;
use App\Entity\Item;
use App\Entity\User;
use App\Entity\UserItemProperty;
use App\Utils\MyTools;
use Doctrine\ORM\EntityManager;
use Symfony\Component\HttpFoundation\RequestStack;



class FileManager extends AbstractManager
{


    /**
     * @var FolderManager
     */
    private $folderManager;

    /** @var string */
    private $userCode;

    /** @var string */
    private $parentCode;



    public function __construct(EntityManager $entityManager, $targetDirectory ,FolderManager $folderManager)
    {
        parent::__construct($entityManager);
        $this->targetDirectory = $targetDirectory;
        $this->folderManager = $folderManager;
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
    public function getTargetDirectory()
    {
        return $this->targetDirectory;
    }

    public function create($RequestFile )
    {

        $fileUniquness =$this->folderManager->init(['parentCode'=> $this->getParentCode(),'userCode' => $this->getUserCode()])
            ->checkSubItemsLabelUniqueness($RequestFile->getClientOriginalName());
        if(!$fileUniquness){
            throw new \Exception('FOUND_ITEM');
        }
        $file =$this->upload($RequestFile);

        $connection = $this->apiEntityManager->getConnection();
        $connection->beginTransaction();
        $this->document = new Document();
        $this->document->setLabel($file['name'])
            ->setCode($file['code'])
            ->setExtension($file['extention'])
            ->setSize(
                $this->convetFileSize($file['size']) )
            ->setParent($this->parent);
        $this->apiEntityManager->persist($this->document);


        $this->user_item_property = new UserItemProperty();
        $this->user_item_property->setItem($this->document)
            ->setUser($this->user)
            ->setIsTagged(false)
            ->setRoles(array("OWNER" => "ROLE_OWNER"));
        $this->apiEntityManager->persist($this->user_item_property);
        $this->parent->setUpdatedAt(new \DateTime());
        $this->apiEntityManager->persist($this->parent);
        $this->apiEntityManager->flush();
        $connection->commit();


        return ['data' => [
        'messages' => 'create_success',
        'code' => $this->document->getCode(),
        'label' => $this->document->getLabel(),
    ]];
    }
    public function upload( $file)
    {
        $fileName= explode(".", $file->getClientOriginalName());
        $fileCode = $fileName[0] . MyTools::GUIDv4() . "." . $fileName[1];
        $file->move($this->getTargetDirectory(), $fileCode);
        

        return [
            "name" => $file->getClientOriginalName(),
            "code" => $fileCode,
            "extention" => $fileName[1],
            "size" => $file->getSize()];
    }


    public function convetFileSize(int $size){
        $units = ["Byte","Kb","Mb"];
        foreach ( $units as $unit) {
            if( ($size / 1000) < 1 ){
                return strval($size).$unit;
            }
            $size = $size / 1000;
        }
        return strval($size) . "Gb";
    }


}
