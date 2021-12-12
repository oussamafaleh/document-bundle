<?php

namespace App\Repository;

use App\Entity\History;
use App\Utils\MyTools;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\Query\ResultSetMapping;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method History|null find($id, $lockMode = null, $lockVersion = null)
 * @method History|null findOneBy(array $criteria, array $orderBy = null)
 * @method History[]    findAll()
 * @method History[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class HistoryRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, History::class);
    }

    // /**
    //  * @return History[] Returns an array of History objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('h')
            ->andWhere('h.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('h.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?History
    {
        return $this->createQueryBuilder('h')
            ->andWhere('h.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
    public function findByFilters($filters)
    {
        $user = MyTools::getOption($filters, 'user');
        $item = MyTools::getOption($filters, 'item');
        $sortColumn = MyTools::getOption($filters, 'sort_column', 'created_at');
        $sortOrder = MyTools::getOption($filters, 'sort_order', 'DESC');
        $page = MyTools::getOption($filters, 'index', 1);
        $maxPerPage = MyTools::getOption($filters, 'size', 10);


        $parameters = $where = [];
        $select = [
            'total' => 'count(*) OVER() ',
            'message' => 'h.message',
//            'item' => 'i.label',
//            'user' => 'u.code',
            'created_at' => "h.created_at",
        ];

        $sql = '';
        $rsm = new ResultSetMapping();

        foreach ($select as $column => $value) {
            $sql .= $value . ' AS ' . $column . ', ';
            $rsm->addScalarResult($column, $column);
        }
        $sql = 'SELECT ' . substr($sql, 0, -2)
            . ' FROM  history   AS h '
//            . ' INNER JOIN user AS u ON ( h.user = u.id ) '
//            . ' INNER JOIN item AS i ON ( h.item_id = i.id ) '
        ;


        if (!empty($user)) {
            $parameters[':user_id'] = $user;
            $where [] = ' h.user_id = :user_id';
        }

        if (!empty($item)) {
            $parameters[':item_id'] = $item;
            $where [] = ' h.item_id = :item_id';
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
