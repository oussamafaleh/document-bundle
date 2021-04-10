<?php


namespace App\Tests\Unit;


abstract class AbstractUnitTestCase extends \PHPUnit\Framework\TestCase
{
    protected $repository;
    protected $entityManager;

    public function setUp():void
    {

        $this->repository = $this
            ->getMockBuilder('Doctrine\ORM\EntityRepository')
            ->setMethods(['findByFilters','findOneBy'])
            ->disableOriginalConstructor()
            ->getMock();

        $this->entityManager = $this
            ->getMockBuilder('Doctrine\ORM\EntityManager')
            ->disableOriginalConstructor()
            ->getMock();
    }
    protected function getDoctrineEntityManager(string $emMethod, $i, $repMethod = null  , $mockResult = null)
    {

        if($repMethod !== null){
            $this->repository
                ->expects($this->at($i))
                ->method($repMethod)
                ->willReturn($mockResult);

            $this->entityManager
                ->expects($this->at($i))
                ->method($emMethod)
                ->willReturn($this->repository);
        }


        else{
            $this->entityManager
                ->expects($this->at($i))
                ->method($emMethod)
                ->willReturn(null);

        }

    }
}