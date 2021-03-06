<?php

namespace App\Manager;

use App\Entity\Demo;
use Symfony\Component\HttpFoundation\RequestStack;
use Doctrine\Bundle\DoctrineBundle\Registry;

use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\HttpFoundation\File\UploadedFile;


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
    
    
    public function upload(string $key )
    {
        $file =$this->request->files->get($key);
        $fileName = md5(uniqid()).'.'.$file->guessExtension();
        $file->move($this->getTargetDirectory(), $fileName);
        

        return $fileName;
    }
 
    



}
