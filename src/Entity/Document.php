<?php

namespace App\Entity;

use App\Repository\DocumentRepository;
use Doctrine\ORM\Mapping as ORM;
use App\Entity\Item;

/**
 * @ORM\Entity(repositoryClass=DocumentRepository::class)
 */
class Document extends Item
{
    

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $extension;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $size;




    public function getExtension(): ?string
    {
        return $this->extension;
    }

    public function setExtension(string $extension): self
    {
        $this->extension = $extension;

        return $this;
    }

    public function getSize(): ?string
    {
        return $this->size;
    }

    public function setSize(string $size): self
    {
        $this->size = $size;

        return $this;
    }

//    public function getItem(): ?Item
//    {
//        return $this->item;
//    }
//
//    public function setItem(?Item $item): self
//    {
//        // unset the owning side of the relation if necessary
//        if ($item === null && $this->item !== null) {
//            $this->item->setDocument(null);
//        }
//
//        // set the owning side of the relation if necessary
//        if ($item !== null && $item->getDocument() !== $this) {
//            $item->setDocument($this);
//        }
//
//        $this->item = $item;
//
//        return $this;
//    }
}
