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

        $parent = MyTools::getOption($filters, 'parent');
        $sortColumn = MyTools::getOption($filters, 'sort_column', 'created_at');
        $sortOrder = MyTools::getOption($filters, 'sort_order', 'DESC');
        $page = MyTools::getOption($filters, 'index', 1);
        $maxPerPage = MyTools::getOption($filters, 'size', 10);
        $dateFormat = MyTools::getOption($filters, 'date_format', 'YYYY-MM-DD');

        $where = [];
        $parameters =  [
            ':parent_id' => $parent];
        $select = [
            'code' => 'i.code',
            'label' => "i.label",
            'type' => "i.type",
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
            . 'WHERE i.parent_id =:parent_id'
        ;


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
