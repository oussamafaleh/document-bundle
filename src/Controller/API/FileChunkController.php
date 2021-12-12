<?php

namespace App\Controller\API;

use App\Manager\FileChunksManager;
use Nelmio\ApiDocBundle\Annotation\Operation;
use Swagger\Annotations as SWG;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class FileChunkController
 * @package App\Controller\API
 * @Route("/api/chunk")
 *
 */
class FileChunkController extends AbstractController
{

    private $manager = null;

    /**
     * fileController constructor.
     */
    public function __construct(FileChunksManager $fileChunksManager)
    {
        $this->manager = $fileChunksManager;
    }

    /**
     * @Route("/upload", name="upload_file_chunk", methods={"POST"})
     * @Operation(
     *     tags={"File"},
     *     summary="file for skeleton",
     *     @SWG\Parameter(
     *         name="file",
     *         in="formData",
     *         type="file",
     *         description="file",
     *         required=true
     *     ),
     *     @SWG\Response(
     *         response="200",
     *         description="Returned when successful"
     *     ),
     *     @SWG\Response(
     *         response="403",
     *         description="Returned when the ws-file is not authorized"
     *     ),
     *     @SWG\Response(
     *         response="404",
     *         description="Returned when the file is not found"
     *     )
     * )
     */
    public function upload(Request $request)
    {

        $file = $request->files->get('file');
        //$fileParam = (array)$request->get('file');
        return $this->manager
            ->uploadChunks($file);
    }

    /**
     * @Route("/download/{id}", name="download-file-chunks", methods={"GET"})
     * @Operation(
     *     tags={"File"},
     *     summary="download file chunks",
     *     @SWG\Parameter(
     *         name="file",
     *         in="formData",
     *         type="file",
     *         description="file",
     *         required=true
     *     ),
     *     @SWG\Response(
     *         response="200",
     *         description="Returned when successful"
     *     ),
     *     @SWG\Response(
     *         response="403",
     *         description="Returned when the ws-file is not authorized"
     *     ),
     *     @SWG\Response(
     *         response="404",
     *         description="Returned when the file is not found"
     *     )
     * )
     */
    public function downloadChunks($id)
    {
        return $this->manager
            ->downloadChunks($id);
    }


}
