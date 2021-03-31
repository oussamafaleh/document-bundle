<?php

namespace App\Manager;

use App\Entity\User;
use App\Entity\UserItemProperty;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Exception\AuthenticationException;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Security\Core\User\UserProviderInterface;
use Symfony\Component\Security\Guard\AbstractGuardAuthenticator;

class AuthenticationManager extends AbstractGuardAuthenticator
{

    private $em;
    private $security;

    public function __construct(EntityManager $em, Security $security )
    {
        $this->em = $em;
        $this->security = $security;
    }

    /**
     * Called on every request to decide if this authenticator should be
     * used for the request. Returning false will cause this authenticator
     * to be skipped.
     */
    public function supports(Request $request)
    {
        $controller = $request->attributes->get('_controller');
        return  str_starts_with($controller , "App\Controller\Twig") || str_starts_with($controller , "App\Controller\Twig");
    }

    /**
     * Called on every request. Return whatever credentials you want to
     * be passed to getUser() as $credentials.
     */
    public function getCredentials(Request $request)
    {
        $controller = $request->attributes->get('_controller');
        if(str_starts_with($controller , "App\Controller\API")){
            $credentials = $request->headers->get('authorization');
        };
        if(str_starts_with($controller , "App\Controller\Twig")){
            $credentials = $this->security->getUser();

        };
        //dd($credentials);
        return $credentials;
    }

    public function checkCredentials($credentials, UserInterface $user)
    {
        // check credentials - e.g. make sure the password is valid
        // no credential check is needed in this case
        // return true to cause authentication success
        return true;
    }

    public function getUser($credentials, UserProviderInterface $userProvider)
    {
        if (null === $credentials) {
            // The token header was empty, authentication fails with 401
            return null;
        }

        // if a User is returned, checkCredentials() is called
        return $this->em->getRepository(UserItemProperty::class)
            ->findOneBy(['user' => $credentials]);
    }



    public function start(Request $request, AuthenticationException $authException = null)
    {

    }

    public function onAuthenticationFailure(Request $request, AuthenticationException $exception)
    {throw new \Exception($exception);
    }

    public function onAuthenticationSuccess(Request $request, TokenInterface $token, $providerKey)
    {
        // TODO: Implement onAuthenticationSuccess() method.
    }

    public function supportsRememberMe()
    {
        // TODO: Implement supportsRememberMe() method.
    }
}