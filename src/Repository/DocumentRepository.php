<?php

namespace App\Repository;

use App\Entity\Document;
use App\Utils\MyTools;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\Query\ResultSetMapping;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Document|null find($id, $lockMode = null, $lockVersion = null)
 * @method Document|null findOneBy(array $criteria, array $orderBy = null)
 * @method Document[]    findAll()
 * @method Document[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class DocumentRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Document::class);
    }

    // /**
    //  * @return Document[] Returns an array of Document objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('d')
            ->andWhere('d.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('d.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Document
    {
        return $this->createQueryBuilder('d')
            ->andWhere('d.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
    public function findByFilters($filters = [])
    {

        $user = MyTools::getOption($filters, 'user');
        $parent = MyTools::getOption($filters, 'parent');
        $sortColumn = MyTools::getOption($filters, 'sort_column', 'updated_at');
        $sortOrder = MyTools::getOption($filters, 'sort_order', 'DESC');
        $page = MyTools::getOption($filters, 'index', 1);
        $maxPerPage = MyTools::getOption($filters, 'size', 10);
        $dateFormat = MyTools::getOption($filters, 'date_format', 'YYYY-MM-DD');


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
