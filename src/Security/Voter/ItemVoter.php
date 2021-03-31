<?php

namespace App\Security\Voter;

use App\Entity\UserItemProperty;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Authorization\Voter\Voter;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\Security\Core\User\UserInterface;

class ItemVoter extends Voter
{
    private $em;
    private $security;

    public function __construct(EntityManagerInterface $em, Security $security )
    {
        $this->em = $em;
        $this->security = $security;
    }
    protected function supports($attribute, $subject)
    {
        // replace with your own logic
        // https://symfony.com/doc/current/security/voters.html
        return in_array($attribute, ['ROLE_OWNER', 'ROLE_CREATE'])
            && $subject instanceof \App\Entity\Item;
    }

    protected function voteOnAttribute($attribute, $subject, TokenInterface $token)
    {
        $user = $token->getUser();
        // if the user is anonymous, do not grant access
        if (!$user instanceof UserInterface) {
            return false;
        }
        $userItemProp = $this->em->getRepository(UserItemProperty::class)
            ->findOneBy(['user' => $user ]);
        $allUserRoles = $this->getAllRoles( $userItemProp->getRoles());

        return in_array($attribute,$allUserRoles);
    }
    private function getAllRoles($roles){
        $allRoles =$roles;
        foreach($roles as $role){
            switch ($role) {
                case 'ROLE_OWNER':
                    if (!in_array('ROLE_CREATE', $allRoles))
                    {
                        array_push($allRoles,'ROLE_CREATE');
                    }
                    break;
            }
        }
        return $allRoles;
    }
}
