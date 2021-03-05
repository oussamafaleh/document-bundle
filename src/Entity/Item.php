<?php

namespace App\Entity;

use App\Repository\ItemRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ItemRepository::class)
 * @ORM\InheritanceType("SINGLE_TABLE")
 * @ORM\DiscriminatorColumn(name="discr", type="string")
 * @ORM\DiscriminatorMap({"folder" = "Folder", "document" = "Document"})
 */
abstract class Item
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
    private $code;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $label;

    /**
     * @ORM\Column(type="datetime")
     */
    private $Create_At;

    /**
     * @ORM\Column(type="datetime")
     */
    private $update_At;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $path;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $icon;

    /**
     * @ORM\OneToOne(targetEntity=Folder::class, cascade={"persist", "remove"})
     */
    private $folder;

    /**
     * @ORM\OneToOne(targetEntity=Document::class, inversedBy="item", cascade={"persist", "remove"})
     */
    private $document;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCode(): ?string
    {
        return $this->code;
    }

    public function setCode(string $code): self
    {
        $this->code = $code;

        return $this;
    }

    public function getLabel(): ?string
    {
        return $this->label;
    }

    public function setLabel(string $label): self
    {
        $this->label = $label;

        return $this;
    }

    public function getCreateAt(): ?\DateTimeInterface
    {
        return $this->Create_At;
    }

    public function setCreateAt(\DateTimeInterface $Create_At): self
    {
        $this->Create_At = $Create_At;

        return $this;
    }

    public function getUpdateAt(): ?\DateTimeInterface
    {
        return $this->update_At;
    }

    public function setUpdateAt(\DateTimeInterface $update_At): self
    {
        $this->update_At = $update_At;

        return $this;
    }

    public function getPath(): ?string
    {
        return $this->path;
    }

    public function setPath(string $path): self
    {
        $this->path = $path;

        return $this;
    }

    public function getIcon(): ?string
    {
        return $this->icon;
    }

    public function setIcon(string $icon): self
    {
        $this->icon = $icon;

        return $this;
    }

    public function getFolder(): ?Folder
    {
        return $this->folder;
    }

    public function setFolder(?Folder $folder): self
    {
        $this->folder = $folder;

        return $this;
    }

    public function getDocument(): ?Document
    {
        return $this->document;
    }

    public function setDocument(?Document $document): self
    {
        $this->document = $document;

        return $this;
    }
}
