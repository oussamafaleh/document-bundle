<?php

namespace App\Entity;

use App\Repository\FolderRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=FolderRepository::class)
 */
class Folder  extends AbstractEntity
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\OneToOne(targetEntity=Item::class, mappedBy="folder", cascade={"persist", "remove"})
     */
    private $document;

    /**
     * @ORM\OneToOne(targetEntity=Item::class, mappedBy="folder", cascade={"persist", "remove"})
     */
    private $item;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDocument(): ?Item
    {
        return $this->document;
    }

    public function setDocument(?Item $document): self
    {
        // unset the owning side of the relation if necessary
        if ($document === null && $this->document !== null) {
            $this->document->setFolder(null);
        }

        // set the owning side of the relation if necessary
        if ($document !== null && $document->getFolder() !== $this) {
            $document->setFolder($this);
        }

        $this->document = $document;

        return $this;
    }

    public function getItem(): ?Item
    {
        return $this->item;
    }

    public function setItem(?Item $item): self
    {
        // unset the owning side of the relation if necessary
        if ($item === null && $this->item !== null) {
            $this->item->setFolder(null);
        }

        // set the owning side of the relation if necessary
        if ($item !== null && $item->getFolder() !== $this) {
            $item->setFolder($this);
        }

        $this->item = $item;

        return $this;
    }
}
