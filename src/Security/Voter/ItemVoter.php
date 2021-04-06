<?php

namespace App\Security\Voter;

use App\Entity\UserItemProperty;
use Doctrine\ORM\EntityManagerInterface;
use phpDocumentor\Reflection\Types\Self_;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Authorization\Voter\Voter;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\Security\Core\User\UserInterface;

class ItemVoter extends Voter
{
    private $em;
    private $security;
    private $ROLES_HIRARCHY = [
        'ROLE_READ' => ['ROLE_READ'],
        'ROLE_CREATE' => ['ROLE_CREATE','ROLE_READ'],
        'ROLE_REMOVE' => ['ROLE_REMOVE','ROLE_READ'],
        'ROLE_EDIT' => ['ROLE_EDIT','ROLE_READ'],
        'ROLE_OWNER' => ['ROLE_OWNER', 'ROLE_CREATE','ROLE_REMOVE','ROLE_READ','ROLE_EDIT'],
];

    public function __construct(EntityManagerInterface $em, Security $security )
    {
        $this->em = $em;
        $this->security = $security;
    }

    protected function supports($attribute, $subject)
    {
        // replace with your own logic
        // https://symfony.com/doc/current/security/voters.html
        return in_array($attribute, ['ROLE_OWNER', 'ROLE_CREATE','ROLE_REMOVE','ROLE_READ'])
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

      //  dd( $userItemProp);
        return in_array($attribute,$allUserRoles);
    }
    protected function getAllRoles($roles)
    {
        $allRoles = $roles;
        foreach ($roles as $role) {
            foreach ($this->ROLES_HIRARCHY[$role] as $subRoleHyrarchy) {
                if (!in_array($subRoleHyrarchy, $allRoles)) {
                    array_push($allRoles, $subRoleHyrarchy);
                }
            }
        }
        return $allRoles;
    }
}
