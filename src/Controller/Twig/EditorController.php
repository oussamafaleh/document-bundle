<?php

namespace App\Controller\Twig;

use App\Annotations\Mapping;
use App\Manager\FileManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Core\Security;

/**
 * Class RuleController
 * @package App\Controller\Twig
 * @Route("/doc-bundle/editor")
 *
 */
class EditorController extends AbstractController
{


    private $security;

    private $manager = null;

    /**
     * fileController constructor.
     */
    public function __construct(FileManager $fileManager)
    {
        $this->manager = $fileManager;
    }


    /**
     * @Route("/", name="index_editor_twig", methods={"GET"})
     */
    public function index(Request $request)
    {

        return $this->render('editor/editor.html.twig');
    }

    /**
     * @Route("/editdocs/{item_code}", name="edit_docs_twig", methods={"GET"})
     */

    public function readDocs($item_code)
    {

        $docContent = $this->manager->DocToHTML($item_code);


        return $this->render('editor/editor.html.twig', $docContent);
    }


}
