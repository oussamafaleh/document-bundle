<?php

namespace App\Repository;

use App\Entity\UserItemProperty;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method UserItemProperty|null find($id, $lockMode = null, $lockVersion = null)
 * @method UserItemProperty|null findOneBy(array $criteria, array $orderBy = null)
 * @method UserItemProperty[]    findAll()
 * @method UserItemProperty[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UserItemPropertyRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UserItemProperty::class);
    }

    // /**
    //  * @return UserItemProperty[] Returns an array of UserItemProperty objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('u')
            ->andWhere('u.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('u.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?UserItemProperty
    {
        return $this->createQueryBuilder('u')
            ->andWhere('u.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
