<?php

namespace App\Manager;

use App\Document\FileChunk;
use App\Document\FileMetadata;
use Doctrine\ODM\MongoDB\DocumentManager;
use Doctrine\ODM\MongoDB\Repository\UploadOptions;
use Doctrine\ORM\EntityManager;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpFoundation\HeaderUtils;
use Symfony\Component\HttpFoundation\StreamedResponse;

class FileChunksManager extends AbstractManager
{


    /**
     * @var DocumentManager
     */
    private $documentManager;

    public function __construct(EntityManager $entityManager, DocumentManager $documentManager)
    {
        parent::__construct($entityManager);
        $this->documentManager = $documentManager;
    }


    function uploadChunks(UploadedFile $data)
    {
        $uploadOptions = new UploadOptions();
        $uploadOptions->metadata = new FileMetadata($data->getClientMimeType());
        $document = $this->documentManager->getRepository(FileChunk::class)->uploadFromFile($data->getPathName(),$data->getClientOriginalName(), $uploadOptions);


        return ['data' => [
            'messages' => 'create_success',
            'code' => $document->getId(),
            'label' => $document->getFilename(),
        ]];
    }
    public function downloadChunks($id)
    {

        $repository = $this->documentManager->getRepository(FileChunk::class);
        $stream = $repository->openDownloadStream($id);
        $fileMetadata = $repository->find($id);
        $response = new StreamedResponse(function()use ($stream) {
            try {
                $outputStream = fopen('php://output', 'wb');
                stream_copy_to_stream($stream, $outputStream);
                // $file =$stream->getFileDocumentForStream($stream);
            } finally {
                fclose($stream);
            }
        });
        // Set content disposition inline of the file
        $disposition = HeaderUtils::makeDisposition(
            HeaderUtils::DISPOSITION_ATTACHMENT,
            $fileMetadata->getFilename()
        );
        $response->headers->set('Content-Disposition', $disposition);
        $response->headers->set('Content-Type', 'application/octet-stream'/*$fileMetadata->getMetadata()->getContentType()*/);
        return $response;
//        return ['data' => [
//            'messages' => 'create_success',
//            'code' => $fileMetadata->getId(),
//            'fileName' => $fileMetadata->getFilename(),
//            'content' => $contents,
//        ]];

    }

}
