<?php

namespace App\Entity;

use App\Repository\ActionRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ActionRepository::class)
 */
class Action
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
    private $eventName;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $recipientExpression;

    /**
     * @var json
     *
     * @ORM\Column(name="attributes", type="json", nullable=false)
     *
     */
    private $attributes;

    /**
     * @ORM\ManyToOne(targetEntity=Rule::class, inversedBy="actions")
     */
    private $rule;

    public function __construct()
    {
        $this->rule = new ArrayCollection();

    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEventName(): ?string
    {
        return $this->eventName;
    }

    public function setEventName(string $eventName): self
    {
        $this->eventName = $eventName;

        return $this;
    }

    public function getRule(): ?Rule
    {
        return $this->rule;
    }

    public function setRule(?Rule $rule): self
    {
        $this->rule = $rule;

        return $this;
    }

    /**
     * @return mixed
     */
    public function getRecipientExpression()
    {
        return $this->recipientExpression;
    }

    /**
     * @param mixed $recipientExpression
     */
    public function setRecipientExpression($recipientExpression): self
    {
        $this->recipientExpression = $recipientExpression;
        return $this;
    }

    /**
     * @return json
     */
    public function getAttributes(): ?array
    {
        return $this->attributes;
    }

    /**
     * @param json $attributes
     */
    public function setAttributes(array $attributes): self
    {
        $this->attributes = $attributes;
        return $this;
    }

}
