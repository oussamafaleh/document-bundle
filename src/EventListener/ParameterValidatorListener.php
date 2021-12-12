<?php

namespace App\EventListener;

use App\Annotations\Mapping;
use Doctrine\Bundle\DoctrineBundle\Registry;
use Doctrine\Common\Annotations\Reader;
use ReflectionObject;
use Symfony\Component\HttpKernel\Event\ControllerEvent;
use Symfony\Component\Validator\Validator\ValidatorInterface;

/**
 * Description of ParameterValidatorListener
 *
 */
class ParameterValidatorListener
{

    /**
     * @var Registry
     */
    protected $registry;


    /**
     * @var Reader
     */
    protected $reader;

    /**
     * @var ValidatorInterface
     */
    protected $validator;

    /**
     * Is method GET ?.
     *
     * @var bool
     */
    protected $isMethodGet = true;

    /**
     * Route's list allow to bypass event listeners.
     *
     * @var array
     */
    protected $allowedRoutes = [
        '_wdt',
        '_profiler_home',
        '_profiler_search',
        '_profiler_search_bar',
        '_profiler_info',
        '_profiler_phpinfo',
        '_profiler_search_results',
        '_profiler_open_file',
        '_profiler',
        '_profiler_router',
        '_profiler_exception',
        '_profiler_exception_css',
        'common_security_authenticate',
        'nelmio_api_doc_index',
        'nelmio_api_doc_swagger_resource_list',
        'nelmio_api_doc_swagger_api_declaration',
        'home',
        'api_home',
        'api_doc_home',
        'nelmio_api_doc.swagger_ui',
        'app.swagger_ui',
        'app.swagger'
    ];

    public function __construct(Reader $reader, ValidatorInterface $validator, Registry $registry)
    {
        $this->reader = $reader;
        $this->validator = $validator;
        $this->registry = $registry;
    }

    /**
     * Performs the validation.
     */
    public function onKernelRequest(ControllerEvent $event)
    {
        if (!$event->isMasterRequest()) {
            return;
        }

        $request = $event->getRequest();

        $this->updateRequest($request);

        if (in_array($request->attributes->get('_route'), $this->allowedRoutes)) {
            return;
        }


        if (is_array($controller = $event->getController())) {
            $object = new ReflectionObject($controller[0]);
            $method = $object->getMethod($controller[1]);

            foreach ($this->reader->getMethodAnnotations($method) as $configuration) {

                if ($configuration instanceof Mapping) {

                    $apiBagClass = $configuration->object;
                    $apiBagName = $configuration->as;
                }
            }
        }

        if (!empty($apiBagClass)) {

            $apiParameterBag = new $apiBagClass();
            $apiParameterBag->populateFromRequest($request);

            $request->attributes->set($apiBagName, $apiParameterBag);

            $errors = $this->validator->validate($apiParameterBag);
            if (count($errors) > 0) {
                $errorsList = array();
//
                foreach ($errors as $error) {
                    $errorsList[$error->getPropertyPath()] = $error->getMessage();
                }

            }
        }

    }

    private function updateRequest($request)
    {
        $content = json_decode($request->getContent(), true);
//        if ($request->getContent() && empty($content)) {
//            $content = [];
//            $contentTmp = explode('&', $request->getContent());
//            foreach ($contentTmp as $elmt) {
//                list($attribute, $value) = explode('=', $elmt);
//                $content[$attribute] = $value;
//            }
//        }

        if (!empty($content)) {
            if ($request->getMethod() == 'POST') {
                foreach ($content as $param => $value) {
                    $request->request->set($param, $value);
                }
            } else {
                foreach ($content as $param => $value) {
                    $request->query->set($param, $value);
                }
            }
        }

        $content = $request->get('_route_params');
        if (!empty($content)) {
            if ($request->getMethod() == 'POST') {
                foreach ($content as $param => $value) {
                    $request->request->set($param, $value);
                }
            } else {
                foreach ($content as $param => $value) {
                    $request->query->set($param, $value);
                }
            }
        }


        if ($request->get('locale')) {
            $request->setLocale(strtolower($request->get('locale')));
        }
    }

}
