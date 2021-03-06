<?php

namespace App\Manager;

use App\Entity\Demo;
use App\Entity\Document;
use App\Entity\Folder;
use App\Entity\User;
use App\Entity\UserItemProperty;
use App\Utils\MyTools;
use Symfony\Component\HttpFoundation\RequestStack;
use Doctrine\Bundle\DoctrineBundle\Registry;



class FileManager extends AbstractManager
{



    public function __construct(Registry $entityManager, RequestStack $requestStack, $targetDirectory )
    {
        parent::__construct($entityManager, $requestStack);
        $this->targetDirectory = $targetDirectory;
    }
    

    public function getTargetDirectory()
    {
        return $this->targetDirectory;
    }

    public function create(string $key )
    {
        $file =$this->upload($key);
        $fileParam = (array)$this->request->get('file');
        $icon = $this->upload('icon');
        $user = $this->apiEntityManager
            ->getRepository(User::class)->findOneBy(['code' => $fileParam['user_code']]);

        $parent = $this->apiEntityManager
            ->getRepository(Folder::class)->findOneBy(['code' => $fileParam['parent_code']]);

        $connection = $this->apiEntityManager->getConnection();
        $connection->beginTransaction();
        $this->document = new Document();
        $this->document->setLabel($file['name'])
            ->setCode($file['code'])
            ->setExtension($file['extention'])
            ->setSize($file['size'])
            ->setIcon($icon['name'])
            ->setParent($parent);
        $this->apiEntityManager->persist($this->document);


        $this->user_item_property = new UserItemProperty();
        $this->user_item_property->setIdItem($this->document)
            ->setIdUser($user)
            ->setIsTagged(false)
            ->setRoles(array("OWNER" => "ROLE_OWNER"));
        $this->apiEntityManager->persist($this->user_item_property);
        $this->apiEntityManager->flush();
        $connection->commit();


        return ['data' => [
        'messages' => 'create_success',
        'object' => $this->document->toArray()
    ]];
    }
    public function upload(string $key)
    {

        $file =$this->request->files->get($key);

        $fileName= explode(".", $file->getClientOriginalName());
        $fileCode = $fileName[0] . MyTools::GUIDv4() . "." . $fileName[1];
        $file->move($this->getTargetDirectory(), $fileCode);
        

        return [
            "name" => $file->getClientOriginalName(),
            "code" => $fileCode,
            "extention" => $fileName[1],
            "size" => $file->getSize()];
    }
 
    



}
