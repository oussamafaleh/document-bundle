<?php

namespace App\Entity;

use App\Repository\UserItemPropertyRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=UserItemPropertyRepository::class)
 */
class UserItemProperty
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
     * @ORM\ManyToOne(targetEntity=User::class, cascade={"persist", "remove"})
     */
    private $user;

    /**
     * @ORM\ManyToOne(targetEntity=Item::class, cascade={"persist", "remove"})
     */
    private $item;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getRoles(): ?array
    {
        return $this->roles;
    }

    public function setRoles(array $roles): self
    {
        $this->roles = $roles;

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
}
