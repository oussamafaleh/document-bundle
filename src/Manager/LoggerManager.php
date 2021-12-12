<?php

namespace App\Manager;

use App\Entity\History;
use App\Entity\Item;
use App\Entity\ServiceMessage;
use Doctrine\ORM\EntityManager;
use Psr\Log\LoggerInterface;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\Security\Core\Security;

/**
 * Logger Manager.
 */
class LoggerManager extends AbstractManager
{

    /**
     * @var bool
     */
    private $logsEnabled;


    private $security;


    public function __construct(EntityManager $entityManager, RequestStack $requestStack, bool $logsEnabled, Security $security)
    {
        parent::__construct($entityManager, $requestStack);

        $this->logsEnabled = $logsEnabled;
        $this->security = $security;

    }


    public function add()
    {
        if (!$this->logsEnabled) {
            return false;
        }
        $service = $this->apiEntityManager
            ->getRepository(ServiceMessage::class)
            ->findOneBy(['label' => $this->request->get('_route')]);

        if ($service instanceof ServiceMessage) {
            $user = $this->security->getUser();
            $item = $this->apiEntityManager
                ->getRepository(Item::class)
                ->findOneBy(['code' => $this->request->get('parent_code')]);
            $username = isset($user) ? $user->getUsername() : 'Unknown user';
            $message = $username . " " . $service->getMessage() . " " . $item->getLabel();
            $historyField = new History();
            $historyField->setIp($this->request->getClientIp())
                ->setRouteName($this->request->get('_route'))
                ->setUser($username)
                ->setUserAgent($this->request->server->get('HTTP_USER_AGENT'))
                ->setMessage($message)
                ->setMicrotime(microtime(true))
                ->setLocation($this->request->getUri())
                ->setItem($item);
            $this->apiEntityManager->persist($historyField);

            $this->apiEntityManager->flush();
        }


    }

}
