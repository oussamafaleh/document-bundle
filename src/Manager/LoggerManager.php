<?php

namespace App\Manager;

use App\Entity\History;
use App\Entity\Item;
use App\Entity\ServiceMessage;
use App\Entity\User;
use Doctrine\ORM\EntityManager;
use Symfony\Component\HttpFoundation\RequestStack;
use Psr\Log\LoggerInterface;

/**
 * Logger Manager.
 */
class LoggerManager extends AbstractManager
{

    /**
     * @var RequestStack
     */
    private $requestStack;




    /**
     * @var bool
     */
    private $logsEnabled;

    /**
     * @var LoggerInterface 
     */
    private $loggerFile;


    public function __construct(EntityManager $entityManager,RequestStack $requestStack,  bool $logsEnabled)
    {
        parent::__construct($entityManager, $requestStack);

        $this->logsEnabled = $logsEnabled;

    }

    /**
     * Add a log row
     *
     * @param $type
     * @param $message
     * @param bool $error
     * @return bool
     */
   /* public function sendLog($type, $message = '', $error = false)
    {
        //$type, $sessionId, $message, $duration = 0, $error = ''
        $fct = $error ? 'err' : 'info';
        $this->loggerFile->$fct($type . ': ' . $message);

        return $this->add($type, !$error ? $message : '', 0, $error ? $message : '');
    }*/

    /**
     * Add a log row in database
     *
     * @param $type
     * @param $message
     * @param int $duration
     * @param string $error
     * @return bool
     */
    public function add($type,  $duration = 0, $error = '')
    {
        // @todo disabled before manager initialization ?
        if (!$this->logsEnabled) {
            return false;
        }
        $service = $this->apiEntityManager
            ->getRepository(ServiceMessage::class)
            ->findOneBy(['label' => $this->request->get('_route')]);

        if($service instanceof ServiceMessage){
            $user = $this->apiEntityManager
                ->getRepository(User::class)
                ->findOneBy(['code' => $this->request->get('user_code')]);
            $item = $this->apiEntityManager
                ->getRepository(Item::class)
                ->findOneBy(['code' =>$this->request->get('parent_code')]);
            $message = $user->getCode()." ".$service->getMessage()." ".$item->getLabel();
            $historyField = new History();
            $historyField->setIp( $this->request->getClientIp())
                ->setRouteName($this->request->get('_route'))
                ->setUser($user->getCode())
                ->setUserAgent($this->request->server->get('HTTP_USER_AGENT'))
                ->setMessage($message)
                ->setMicrotime(microtime(true))
                ->setLocation($this->request->getUri())
                ->setItem($item);
            $this->apiEntityManager->persist($historyField);

        }


        $this->apiEntityManager->flush();

    }

}
