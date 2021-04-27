<?php


namespace App\Tests\Unit;


abstract class AbstractUnitTestCase extends \PHPUnit\Framework\TestCase
{
    protected $repository;
    protected $entityManager;

    public function setUp(): void
    {

        $this->repository = $this
            ->getMockBuilder('Doctrine\ORM\EntityRepository')
            ->setMethods(['findByFilters', 'findOneBy'])
            ->disableOriginalConstructor()
            ->getMock();

        $this->entityManager = $this
            ->getMockBuilder('Doctrine\ORM\EntityManager')
            ->disableOriginalConstructor()
            ->getMock();
        $this->connection = $this
            ->getMockBuilder('Doctrine\DBAL\Connection')
            ->disableOriginalConstructor()
            ->getMock();
    }

    protected function getDoctrineEntityMock(string $emMethod, $i, $repMethod = null, $mockResult = null)
    {


        if ($repMethod !== null) {
            $this->repository
                ->expects($this->at($i))
                ->method($repMethod)
                ->willReturn($mockResult);

            return $this->entityManager
                ->expects($this->at($i))
                ->method($emMethod)
                ->willReturn($this->repository);
        } else {
            return $this->entityManager
                ->expects($this->at($i))
                ->method($emMethod)
                ->willReturn(null);

        }

    }

    protected function getConnectionMock(string $emMethod, $i, $cnxMethod = null)
    {

        return $this->entityManager
            ->expects($this->at($i))
            ->method($emMethod)
            ->willReturn($this->connection);
    }

    protected function getCommitMock($cnxMethod = null, $i)
    {

        $this->connection
            ->expects($this->at($i))
            ->method($cnxMethod)
            ->willReturn(true);
        return $this->entityManager
            ->expects($this->at($i))
            ->method('getConnection')
            ->willReturn($this->connection);

    }
}
