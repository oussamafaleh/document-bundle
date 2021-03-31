<?php

namespace App\EventListener;

use App\Manager\LoggerManager;
use Symfony\Component\HttpKernel\Event\ResponseEvent;

class ActionListener
{

    public function __construct( LoggerManager $loggerManager)
    {
        $this->loggerManager = $loggerManager;
    }

    public function onKernelResponse(ResponseEvent $event)
    {
        $this->loggerManager->add('RESPONSE');

    }

}
