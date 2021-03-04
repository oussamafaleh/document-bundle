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
     * @ORM\Column(type="string", length=255)
     */
    private $role;

    /**
     * @ORM\Column(type="boolean")
     */
    private $accepted;

    /**
     * @ORM\Column(type="boolean")
     */
    private $is_tagged;

    /**
     * @ORM\OneToOne(targetEntity=User::class, cascade={"persist", "remove"})
     */
    private $id_user;

    /**
     * @ORM\OneToOne(targetEntity=Item::class, cascade={"persist", "remove"})
     */
    private $id_item;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getRole(): ?string
    {
        return $this->role;
    }

    public function setRole(string $role): self
    {
        $this->role = $role;

        return $this;
    }

    public function getAccepted(): ?bool
    {
        return $this->accepted;
    }

    public function setAccepted(bool $accepted): self
    {
        $this->accepted = $accepted;

        return $this;
    }

    public function getIsTagged(): ?bool
    {
        return $this->is_tagged;
    }

    public function setIsTagged(bool $is_tagged): self
    {
        $this->is_tagged = $is_tagged;

        return $this;
    }

    public function getIdUser(): ?User
    {
        return $this->id_user;
    }

    public function setIdUser(?User $id_user): self
    {
        $this->id_user = $id_user;

        return $this;
    }

    public function getIdItem(): ?Item
    {
        return $this->id_item;
    }

    public function setIdItem(?Item $id_item): self
    {
        $this->id_item = $id_item;

        return $this;
    }
}
