<?php

namespace App\Repository;

use App\Entity\UserItemProperty;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\Query\ResultSetMapping;
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
    public function findByUserAndItem($user, $item)
    {
        $parameters = $where = [];
        $select = [
            'code' => 'i.code',
            'label' => "i.label",
            'extension' => "d.extension",
            'size' => "d.size",
            'roles' => 'p.roles',
            'updated_at' => "i.updated_at",
            'created_at' => "i.created_at",
        ];

        $sql = '';
        $rsm = new ResultSetMapping();

        foreach ($select as $column => $value) {
            $sql .= $value . ' AS ' . $column . ', ';
            $rsm->addScalarResult($column, $column);
        }
        $sql = 'SELECT ' . substr($sql, 0, -2)
            . ' FROM  item   AS i '
            . ' INNER JOIN document AS d ON ( d.id = i.id ) '
            . ' INNER JOIN user_item_property AS p ON ( p.item_id = i.id ) ';

        if (!empty($user)) {
            $parameters[':user_id'] = $user;
            $where [] = ' p.user_id = :user_id';
        }
        if (!empty($parent)) {
            $parameters[':parent_id'] = $parent;
            $where [] = ' i.parent_id = :parent_id';
        }

        if (!empty($where)) {
            $sql .= ' WHERE ' . implode(' AND ', $where);
        }
        if (isset($select[$sortColumn])) {
            $sql .= ' ORDER BY ' . $select[$sortColumn] . '  ' . $sortOrder;
        }

        if ($page > 0) {
            $sql .= ' LIMIT ' . $maxPerPage . ' OFFSET ' . (($page - 1) * $maxPerPage);
        }


        $cacheKey = sha1($sql . json_encode($parameters));
        return $this->getEntityManager()
            ->createNativeQuery($sql, $rsm)
            ->setParameters($parameters)
            ->enableResultCache(3000, $cacheKey)
            ->getResult();

    }
}
