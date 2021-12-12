<?php


namespace App\Document;
//use App\Document\FileMetadata;
use DateTimeInterface;
use Doctrine\ODM\MongoDB\Mapping\Annotations as MongoDB;

/** @MongoDB\File(bucketName="filechunk") */
class FileChunk
{
    /** @MongoDB\Id */
    private $id;

    /** @MongoDB\File\Filename */
    private $filename;

    /** @MongoDB\File\UploadDate */
    private $uploadDate;

    /** @MongoDB\File\Length */
    private $length;

    /** @MongoDB\File\ChunkSize */
    private $chunkSize;

    /** @MongoDB\File\Metadata(targetDocument=FileMetadata::class) */
    private $metadata;

    public function getId(): ?string
    {
        return $this->id;
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

    public function getUploadDate(): DateTimeInterface
    {
        return $this->uploadDate;
    }

    public function getMetadata(): ?FileMetadata
    {
        return $this->metadata;
    }

}