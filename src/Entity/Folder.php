<?php

namespace App\Entity;

use App\Repository\FolderRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use App\Entity\Item;

/**
 * @ORM\Entity(repositoryClass=FolderRepository::class)
 */
class Folder extends Item
{




}

