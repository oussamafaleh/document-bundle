<?php

namespace App\Repository;


use App\Utils\MyTools;
use App\Entity\Item;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\Query\ResultSetMapping;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Item|null find($id, $lockMode = null, $lockVersion = null)
 * @method Item|null findOneBy(array $criteria, array $orderBy = null)
 * @method Item[]    findAll()
 * @method Item[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ItemRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Item::class);
    }

    // /**
    //  * @return Item[] Returns an array of Item objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('i')
            ->andWhere('i.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('i.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Item
    {
        return $this->createQueryBuilder('i')
            ->andWhere('i.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
    public function findByFilters($filters)
    {
        $isTagged = MyTools::getOption($filters, 'is_tagged');
        $user = MyTools::getOption($filters, 'user');
        $parent = MyTools::getOption($filters, 'parent');
        $type = MyTools::getOption($filters, 'type');
        $sortColumn = MyTools::getOption($filters, 'sort_column', 'created_at');
        $sortOrder = MyTools::getOption($filters, 'sort_order', 'DESC');
        $page = MyTools::getOption($filters, 'index', 1);
        $maxPerPage = MyTools::getOption($filters, 'size', 10);
        $dateFormat = MyTools::getOption($filters, 'date_format', 'YYYY-MM-DD');
        $role = MyTools::getOption($filters, 'role');


        $parameters = $where = [];
        $select = [
            // https://stackoverflow.com/questions/6292679/mysql-using-correct-syntax-for-the-over-clause
            //over moch mawjouda f mysql sauf fl version 8
            'total' => 'count(*) OVER() ',
            'code' => 'i.code',
            'label' => "i.label",
            'type' => "i.type",
            'roles' => 'p.roles',
            'is_tagged' => 'p.is_tagged',
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
            . ' INNER JOIN user_item_property AS p ON ( p.item_id = i.id ) '
        ;

        if (!empty($isTagged)) {
            $parameters[':is_tagged'] = $isTagged;
            $where [] = ' p.is_tagged = :is_tagged';
        }

        if (!empty($user)) {
            $parameters[':user_id'] = $user;
            $where [] = ' p.user_id = :user_id';
        }

        if (!empty($parent)) {
            $parameters[':parent_id'] = $parent;
            $where [] = ' i.parent_id = :parent_id';
        }

        if (!empty($type)) {
            $parameters[':type'] = $type;
            $where [] = ' i.type = :type';
        }
        if (!empty($role)) {
            $parameters[':role'] = '"'.$role['name'].'"';
            $parameters[':contain'] = $role['contain'];
            $where [] = ' JSON_CONTAINS( p.roles , :role   ) = :contain';
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
