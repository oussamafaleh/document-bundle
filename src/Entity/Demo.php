<?php

namespace App\Entity;

use App\Repository\DemoRepository;
use Doctrine\ORM\Mapping as ORM;
use \App\Entity\AbstractEntity;
/**
 * @ORM\Entity(repositoryClass=DemoRepository::class)
 */
class Demo extends AbstractEntity
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
    private $name;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }
}
