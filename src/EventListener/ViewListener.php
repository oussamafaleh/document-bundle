<?php

namespace App\EventListener;

use App\Manager\LoggerManager;
use Symfony\Component\HttpKernel\Event\ViewEvent;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Translation\TranslatorInterface;

class ViewListener
{

    public function __construct(TranslatorInterface $translator, LoggerManager $loggerManager)
    {
        $this->translator = $translator;
        $this->loggerManager = $loggerManager;
    }

    /**
     * Handle the output from the controllers.
     *
     * @param ViewEvent $event
     */
    public function onKernelView(ViewEvent $event)
    {
        $result = $event->getControllerResult();

        $messages = [];
        if (isset($result['data']['messages'])) {
            $messages['value'] = $this->translator->trans($result['data']['messages'], [], 'messages');
            unset($result['data']['messages']);
        }


        $response = [
            'status' => 'success',
            'messages' => $messages,
            'results' => $result
        ];


        if ($result) {
            $response = new JsonResponse($response, JsonResponse::HTTP_OK);
        } else {
            $response['status'] = 'failure';
            $response['messages'] = [
                'code' => 400,
                'level' => 'ERROR',
                'scope' => 'RESPONSE',
                'value' => $this->translator->trans('result_not_found', [], 'errors')
            ];
            $response = new JsonResponse($response, JsonResponse::HTTP_BAD_REQUEST);
        }

        $response->headers->set('Access-Control-Allow-Origin', '*');

        $event->setResponse($response);
    }


}
