<?php

namespace App\Repository;

use App\Entity\Rule;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\Query\ResultSetMapping;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Rule|null find($id, $lockMode = null, $lockVersion = null)
 * @method Rule|null findOneBy(array $criteria, array $orderBy = null)
 * @method Rule[]    findAll()
 * @method Rule[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class RuleRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Rule::class);
    }

    // /**
    //  * @return Rule[] Returns an array of Rule objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('r')
            ->andWhere('r.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('r.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Rule
    {
        return $this->createQueryBuilder('r')
            ->andWhere('r.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */

    public function findByEvent($eventName)
    {
        $parameters =[':eventName' => $eventName];
        $select = [
            'eventName' => 'r.event_name',
            'expression' => "r.expression",
            'actions' => "a.id",
        ];

        $sql = '';
        $rsm = new ResultSetMapping();

        foreach ($select as $column => $value) {
            $sql .= $value . ' AS ' . $column . ', ';
            $rsm->addScalarResult($column, $column);
        }
        $sql = 'SELECT ' . substr($sql, 0, -2)
            . ' FROM  rule   AS r '
            . ' INNER JOIN action AS a ON ( r.id = a.rule_id ) '
            . 'WHERE r.event_name = :eventName'
        ;
        $cacheKey = sha1($sql . json_encode($parameters));
        return $this->getEntityManager()
            ->createNativeQuery($sql, $rsm)
            ->setParameters($parameters)
            ->enableResultCache(3000, $cacheKey)
            ->getResult();
    }
}
