<?php


namespace App\EventListener;

use Psr\Log\LoggerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Event\RequestEvent;
use Symfony\Component\HttpKernel\Exception\HttpExceptionInterface;
use Symfony\Component\VarDumper\Cloner\VarCloner;
use Symfony\Component\VarDumper\Dumper\HtmlDumper;

class ExceptionListener
{
    public const TWIG_ROUT = 'Twig';
    /**
     * On kernel exception redirect to 404 page.
     */
    public function onKernelException(RequestEvent $event)
    {
        $url = $event->getRequest()->get('_controller') !== null ? $event->getRequest()->get('_controller') : "";
        if (!str_contains($url, self::TWIG_ROUT)) {

            $request = $event->getRequest();
            $env = getEnv('APP_ENV');
            $debug = (bool)getEnv('APP_DEBUG');

            $exception = $event->getThrowable();

            $message = $exception->getMessage();
            $parameter = '';
            if (method_exists($exception, 'getStatusCode')) {

                if ($exception instanceof HttpExceptionInterface) {

                    $error = json_decode($message, true);
                    $message = isset($error['error']) ? $error['error'] : $message;
                    $parameter = isset($error['parameter']) ? json_decode($error['parameter'], true) : '';
                }
            }
            $response = [
                'status' => 'failure',
                'messages' => [
                    'code' => $exception instanceof HttpExceptionInterface ? $exception->getStatusCode() : $exception->getCode(),
                    'level' => 'ERROR',
                    'scope' => 'TECHNICAL',
                    'value' => isset($message) ? $message : 'error occured, please try again later',
                    'parameter' => $parameter,
                    'file' => $exception->getFile() . ':' . $exception->getLine(),
                    'trace' => $env == 'dev' ? $exception->getTrace() : '',
                    'details' => $exception instanceof ExceptionProcessInterface ? $exception->getDetails() : []
                ],
                'results' => [],
            ];
            $response = new JsonResponse($response);

            $response->headers->set('Access-Control-Allow-Origin', '*');
            $event->setResponse($response);


        }
    }
}