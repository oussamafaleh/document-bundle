<?php

namespace App\Manager;

use App\Entity\Demo;
use Symfony\Component\HttpFoundation\RequestStack;
use Doctrine\Bundle\DoctrineBundle\Registry;

class DemoManager extends AbstractManager
{

    /** @var string */
    private $code;


    /** @var Quiz */
    private $quiz;


    public function __construct(Registry $entityManager, RequestStack $requestStack)
    {
        parent::__construct($entityManager, $requestStack);
    }

 
    /**
     * @return array
     *
     * list of back user
     */
    public function list()
    {
        $filters = (array) $this->request->get('demo');
        $data = $this->apiEntityManager
                ->getRepository(Demo::class)
                    ->findOneBy(["name" => $filters["name"]])->toArray();

        return ['data' => $data];
    }




}
