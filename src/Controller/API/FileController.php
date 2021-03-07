<?php

 namespace App\Controller\API;

use App\Entity\file;
use App\Annotations\Mapping;
use App\Manager\FileManager;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Guard\GuardAuthenticatorHandler;
use Symfony\Component\HttpFoundation\Request;
use Swagger\Annotations as SWG;
use Nelmio\ApiDocBundle\Annotation\Operation;

/**
 * Class fileController
 * @package App\Controller\API
 * @Route("/api")
 *
 */
 class FileController extends AbstractController
 {

     private $manager = null;

    /**
     * ProfilController constructor.
     */
    public function __construct(FileManager $fileManager)
    {
        $this->manager = $fileManager;
    }

    /**
     * @Route("/upload", name="upload_file", methods={"POST"})
     * @Mapping(object="App\ApiModel\File\File", as="file")
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
     *     @SWG\Parameter(
     *         name="parent_code",
     *         in="query",
     *         type="string",
     *         description="parent folder",
     *         required=true
     *     ),
     *     @SWG\Parameter(
     *         name="user_code",
     *         in="query",
     *         type="string",
     *         description="code of user",
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
        $fileParam = (array)$request->get('file');
        return $this->manager->create($file ,$fileParam  );
    }

    
}
