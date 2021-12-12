<?php

namespace App\Event\RuleEvent;

use App\Entity\Document;
use Symfony\Contracts\EventDispatcher\Event;

class FileEvent extends Event
{
    const classifyFileRule = 'classify_file';

    /** @var string */
    private $eventName;

    /**
     * @var Document
     */
    private $file;

    /** @var string */
    private $fileClass;


    /**
     * ExampleEvent constructor.
     * @param string $eventName
     * @param Document $file
     */
    public function __construct(string $eventName, Document $file)
    {
        $this->eventName = $eventName;
        $this->file = $file;
    }

    /**
     * @return string
     */
    public function getEventName(): string
    {
        return $this->eventName;
    }

    /**
     * @param string $eventName
     */
    public function setEventName(string $eventName): void
    {
        $this->eventName = $eventName;
    }

    /**
     * @return Document
     */
    public function getFile()
    {
        return $this->file;
    }

    /**
     * @param Document $file
     */
    public function setFile(Document $file)
    {
        $this->file = $file;
    }

    /**
     * @return string
     */
    public function getFileClass(): string
    {
        return $this->fileClass;
    }

    /**
     * @param string $fileClass
     */
    public function setFileClass(string $fileClass): void
    {
        $this->fileClass = $fileClass;
    }

}