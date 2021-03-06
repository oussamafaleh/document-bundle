<?php

 namespace App\Controller\API;

use App\Entity\Quiz;
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
 * Class QuizController
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
     * @Route("/upload", name="quiz_lists", methods={"POST"})
     * @Operation(
     *     tags={"File"},
     *     summary="file for skeleton",
     *     @SWG\Parameter(
     *         name="name",
     *         in="query",
     *         type="string",
     *         description="name of user",
     *         required=true
     *     ),
     *     @SWG\Response(
     *         response="200",
     *         description="Returned when successful"
     *     ),
     *     @SWG\Response(
     *         response="403",
     *         description="Returned when the ws-quiz is not authorized"
     *     ),
     *     @SWG\Response(
     *         response="404",
     *         description="Returned when the quiz is not found"
     *     )
     * )
     */
    public function upload(Request $request)
    {
        return $this->manager->upload('file');
    }

    
}
