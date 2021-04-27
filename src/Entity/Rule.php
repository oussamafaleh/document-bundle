<?php

namespace App\Entity;

use App\Repository\RuleRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
/**
 * @ORM\Entity(repositoryClass=RuleRepository::class)
 */
class Rule
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @var string
     * @ORM\Column(name="event_name", type="string", length=50)
     */
    private $eventName ;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $expression;

    /**
     * @var ArrayCollection
     * @ORM\OneToMany(targetEntity=Action::class , mappedBy="rule",fetch="EAGER")
     */
    private $actions ;

    /**
     * rule constructor.
     * @param ArrayCollection $actions
     */
    public function __construct()
    {
        $this->actions = new ArrayCollection();
    }
    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEventName()
    {
        return $this->eventName;
    }

    public function setEventName(string $eventName): self
    {
        $this->eventName = $eventName;

        return $this;
    }

    public function getExpression(): ?string
    {
        return $this->expression;
    }

    public function setExpression(string $expression): self
    {
        $this->expression = $expression;

        return $this;
    }
    /**
     * @return Collection|Action[]
     */
    public function getActions(): Collection
    {
        return $this->actions;
    }

    public function setActions(array $actions): self
    {
        $this->actions = $actions;

        return $this;
    }
}
