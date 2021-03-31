<?php

namespace App\Manager;

use Doctrine\ORM\EntityManager;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\PropertyAccess\PropertyAccess;
use Symfony\Component\PropertyAccess\Exception\ExceptionInterface;
use Symfony\Component\PropertyAccess\PropertyAccessorInterface;

/* * `
 * Base class for most animation objects.
 */

abstract class AbstractManager
{
/**
     * ROLES FRONT
     */
    const ROLE_SUPER_USER = 'ROLE_SUPER_USER';
    const ROLE_USER = 'ROLE_USER';



    /**
     * settings.
     *
     * @var array
     */
    protected $settings;

    /**
     * @var ExceptionManager
     */
    protected $exceptionManager;

    /**
     * @var entityManager
     */
    protected $apiEntityManager;



    /**
     *
     * @var Request
     */
    protected $request;


    /**
     * @var object
     */
    protected $object;

    /**
     * AbstractModel constructor.
     *
     * @param EntityManager $entityManager
     * @param ExceptionManager $exceptionManager
     * @param RequestStack $requestStack
     */
    public function __construct(EntityManager $entityManager, RequestStack $requestStack = null)
    {
        $this->apiEntityManager = $entityManager;


        if ($requestStack instanceof RequestStack) {
            $this->request = $requestStack->getCurrentRequest();
        }
    }



    protected function setSettings($settings)
    {
        $this->settings = $settings;

        $accessor = PropertyAccess::createPropertyAccessor();
        foreach ($this->settings as $property => $value) {
            try {
                $accessor->setValue($this, $property, $value);
            } catch (ExceptionInterface $e) {
                throw $e;
            }
        }
        return $this;
    }











}
