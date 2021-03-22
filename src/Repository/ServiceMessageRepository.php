<?php

namespace App\Repository;

use App\Entity\ServiceMessage;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method ServiceMessage|null find($id, $lockMode = null, $lockVersion = null)
 * @method ServiceMessage|null findOneBy(array $criteria, array $orderBy = null)
 * @method ServiceMessage[]    findAll()
 * @method ServiceMessage[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ServiceMessageRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ServiceMessage::class);
    }

    // /**
    //  * @return ServiceMessage[] Returns an array of ServiceMessage objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('s.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?ServiceMessage
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
