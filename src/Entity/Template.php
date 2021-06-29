<?php

namespace App\Entity;

use App\Repository\DocumentRepository;
use Doctrine\ORM\Mapping as ORM;
use App\Entity\Item;

/**
 * @ORM\Entity(repositoryClass=TemplateRepository::class)
 */
class Template extends Item
{
    

}
