<?php


namespace App\Entity;
use Doctrine\ODM\MongoDB\Mapping\Annotations as MongoDB;

/**
 * @MongoDB\Document
 */

class FileChunk
{
    /** @MongoDB\Id */
    private $id;

    /** @MongoDB\File */
    private $file;

    /** @MongoDB\String */
    private $filename;

    /** @MongoDB\String */
    private $mimeType;

    /** @MongoDB\Date */
    private $uploadDate;

    /** @MongoDB\Int */
    private $length;

    /** @MongoDB\Int */
    private $chunkSize;

    /** @MongoDB\String */
    private $md5;

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

    public function getMimeType()
    {
        return $this->mimeType;
    }

    public function setMimeType($mimeType)
    {
        $this->mimeType = $mimeType;
    }

    public function getChunkSize()
    {
        return $this->chunkSize;
    }

    public function getLength()
    {
        return $this->length;
    }

    public function getMd5()
    {
        return $this->md5;
    }

    public function getUploadDate()
    {
        return $this->uploadDate;
    }
}