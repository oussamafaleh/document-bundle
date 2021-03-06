<?php

namespace App\Entity;

use App\Repository\UserItemPropertyRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\UserInterface;

/**
 * @ORM\Entity(repositoryClass=UserItemPropertyRepository::class)
 */
class UserItemProperty implements UserInterface
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @var json
     *
     * @ORM\Column(name="roles", type="json", nullable=false)
     *
     */
    private $roles;

    /**
     * @ORM\Column(type="boolean")
     */
    private $isTagged;

    /**
     * @ORM\ManyToOne(targetEntity=User::class)
     * @ORM\JoinColumn(onDelete="CASCADE")
     */
    private $user;

    /**
     * @ORM\ManyToOne(targetEntity=Item::class)
     * @ORM\JoinColumn(onDelete="CASCADE")
     */
    private $item;

    /**
     * User constructor.
     */
    public function __construct()
    {
        $this->roles = [];
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getRoles(): ?array
    {
        return $this->roles;
    }

    public function addRoles(array $roles): self
    {

        foreach ($roles as $role) {
            if (!in_array($role, $this->roles, true)) {
                $this->roles[] = $role;
            }

        }

        return $this;
    }


    public function getIsTagged(): ?bool
    {
        return $this->isTagged;
    }

    public function setIsTagged(bool $isTagged): self
    {
        $this->isTagged = $isTagged;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }

    public function getItem(): ?Item
    {
        return $this->item;
    }

    public function setItem(?Item $item): self
    {
        $this->item = $item;

        return $this;
    }

    public function getPassword()
    {
        // TODO: Implement getPassword() method.
    }

    public function getSalt()
    {
        // TODO: Implement getSalt() method.
    }

    public function getUsername()
    {
        return $this->user->getCode();
    }

    public function eraseCredentials()
    {
        // TODO: Implement eraseCredentials() method.
    }
}
