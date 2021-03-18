<?php

namespace App\Manager;

use App\Entity\Demo;
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

    public function __construct(EntityManager $entityManager, $targetDirectory ,FolderManager $folderManager)
    {
        parent::__construct($entityManager);
        $this->targetDirectory = $targetDirectory;
        $this->folderManager = $folderManager;
    }
    

    public function getTargetDirectory()
    {
        return $this->targetDirectory;
    }

    public function create($RequestFile , $fileParam )
    {

        $user = $this->apiEntityManager
            ->getRepository(User::class)->findOneBy(['code' => $fileParam['user_code']]);

        $parent = $this->apiEntityManager
            ->getRepository(Folder::class)->findOneBy(['code' => $fileParam['parent_code']]);
        if ($user === null || $parent === null) {
            dump('not_fond_exeption');exit();
            return ['data' => [
                'messages' => 'not_fond_exeption',
            ]];
        }
        if( !$this->folderManager->checkSubItemsLabelUniqueness($fileParam['parent_code'],$fileParam['user_code'],$RequestFile->getClientOriginalName())){
            return ['messages' => 'fond_exeption'];
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
            ->setParent($parent);
        $this->apiEntityManager->persist($this->document);


        $this->user_item_property = new UserItemProperty();
        $this->user_item_property->setItem($this->document)
            ->setUser($user)
            ->setIsTagged(false)
            ->setRoles(array("OWNER" => "ROLE_OWNER"));
        $this->apiEntityManager->persist($this->user_item_property);
        $parent->setUpdatedAt(new \DateTime());
        $this->apiEntityManager->persist($parent);
        $this->apiEntityManager->flush();
        $connection->commit();

        $item = $this->document->toArray();
        $item["code"]=$this->document->getCode();
        return ['data' => [
        'messages' => 'create_success',
        'object' => $item
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
