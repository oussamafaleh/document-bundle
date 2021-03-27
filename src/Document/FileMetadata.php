<?php


namespace App\Document;
use Doctrine\ODM\MongoDB\Mapping\Annotations as MongoDB;
/** @MongoDB\File(bucketName="filechunk") */

class FileChunk
{
    /** @MongoDB\Id */
    private $id;

    /** @MongoDB\File */
    private $file;

    /** @MongoDB\File\Filename */
    private $filename;

    /** @MongoDB\Field */
    private $mimeType;

    /** @MongoDB\File\UploadDate */
    private $uploadDate;

    /** @MongoDB\File\Length */
    private $length;

    /** @MongoDB\File\ChunkSize */
    private $chunkSize;

    /** @File\Metadata(targetDocument=FileMetadata::class) */
    private $metadata;

    public function getId(): ?string
    {
        return $this->id;
    }
    public function getFile()
    {
        return $this->file;
    }

    public function setFile($file)
    {
        $this->file = $file;
    }
    public function getFilename()
    {
        return $this->filename;
    }

    public function setFilename($filename)
    {
        $this->filename = $filename;
    }

    public function getChunkSize(): ?int
    {
        return $this->chunkSize;
    }

    public function getLength(): ?int
    {
        return $this->length;
    }

    public function getUploadDate(): \DateTimeInterface
    {
        return $this->uploadDate;
    }
    public function getMetadata(): ?FileMetadata
    {
        return $this->metadata;
    }

}