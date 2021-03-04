<?php

namespace App\Manager;

use App\Entity\Folder;
use Symfony\Component\HttpFoundation\RequestStack;
use Doctrine\Bundle\DoctrineBundle\Registry;


class FolderManager extends AbstractManager
{




    public function __construct(Registry $entityManager, RequestStack $requestStack)
    {
        parent::__construct($entityManager, $requestStack);
    }

 
    /**
     * @return array
     *
     * list folder
     */
    public function list()
    {


        $filters = (array) $this->request->get('test');
        $data = $this->apiEntityManager
            ->getRepository(Folder::class)
            ->findAll();

            return $this->twig->render('folder/index.html.twig', [
                'folders' =>  $data,
            ]);

      


    }

    }




