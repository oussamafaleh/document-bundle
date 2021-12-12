<?php


namespace App\Document;

use Doctrine\ODM\MongoDB\Mapping\Annotations as MongoDB;

/** @MongoDB\EmbeddedDocument */
class FileMetadata
{
    /** @MongoDB\Field(type="string") */
    private $contentType;

    public function __construct(string $contentType)
    {
        $this->contentType = $contentType;
    }

    public function getContentType(): ?string
    {
        return $this->contentType;
    }

}