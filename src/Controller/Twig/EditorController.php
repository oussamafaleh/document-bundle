<?php

namespace App\Controller\Twig;

use App\Manager\FileManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

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
     * @Route("/editdoc/{item_code}", name="edit_docs_twig", methods={"GET"})
     */

    public function readDocs($item_code)
    {

        $docContent = $this->manager->DocToHTML($item_code);


        return $this->render('editor/editor.html.twig', $docContent);
    }

    /**
     * @Route("/edithtml/{item_code}", name="edit_template_twig", methods={"GET"})
     */

    public function readHTML($item_code)
    {

        $HTMLContent = $this->manager->HTMLContent($item_code);


        return $this->render('editor/editor.html.twig', $HTMLContent);
    }

}
