<?php


namespace App\Tests;


abstract class AbstractTestCase extends \PHPUnit\Framework\TestCase
{
    protected $repository;
    protected $entityManager;

    public function setUp():void
    {

        $this->repository = $this
            ->getMockBuilder('Doctrine\ORM\EntityRepository')
            ->disableOriginalConstructor()
            ->setMethods(array('findOneBy','findByFilters'))
            ->getMock();

        $this->entityManager = $this
            ->getMockBuilder('Doctrine\ORM\EntityManager')
            ->setMethods(array('getRepository','getConnection','persist','flush','commit'))
            ->disableOriginalConstructor()
            ->getMock();
    }
    protected function getDoctrineEntityManager(string $emMethod, $i, $repMethod = null  , $mockResult = null): \PHPUnit\Framework\MockObject\Builder\InvocationMocker
    {

        if($repMethod !== null){
            $this->repository
                ->expects($this->any($i))
                ->method($repMethod)
                ->willReturn($mockResult);

            return $this->entityManager
                ->expects($this->any($i))
                ->method($emMethod)
                ->willReturn($this->repository);
        }




        return $this->entityManager
            ->expects($this->any($i))
            ->method($emMethod)
            ->willReturn(null);

    }
}