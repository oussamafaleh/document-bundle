<?php

namespace App\Controller\Twig;

use App\Entity\File;
use App\Form\DocumentType;
use App\Manager\FileManager;
use NcJoes\PopplerPhp\Config;
use NcJoes\PopplerPhp\PdfToHtml;
use PHPStamp\Document\WordDocument;
use PHPStamp\Templator;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


/**
 * Class FileController
 * @package App\Controller\Twig
 * @Route("/doc-bundle/folder")
 *
 */
class FileController extends AbstractController
{

    private $manager = null;

    /**
     * fileController constructor.
     */
    public function __construct(FileManager $fileManager)
    {
        $this->manager = $fileManager;
    }

    /**
     * @Route("/upload/{parent_code}", name="upload_file_twig", methods={"POST"})
     */
    public function upload(Request $request, $parent_code): Response

    {
        $fileParam['user_code'] = '0970229e-4867-4ada-b0ac-a199446cbc21';
        $fileParam['parent_code'] = $parent_code;
        $files = $request->files->get('document');
        $form = $this->createForm(DocumentType::class);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            foreach ($files as $file) {
                $this->manager
                    ->init(['parentCode' => $fileParam['parent_code'], 'userCode' => $fileParam['user_code']])
                    ->create($file);
            }
        }
        return $this->redirectToRoute('list_sub_items_twig', ['parent_code' => $fileParam['parent_code'], 'user_code' => $fileParam['user_code']]);
    }


    /**
     * @Route("/downloadFile/{item_code}", name="download_file_twig", methods={"GET"})
     */
    public function DownloadAction($item_code)
    {

        return $this->manager->download($item_code);
    }


    /**
     * @Route("/openBrowser/{item_code}", name="open_file_browser_twig", methods={"GET"})
     */


    public function openBrowserAction($item_code)
    {

        return $this->manager->openBrowser($item_code);

    }


    /**
     * @Route("/opendocs/{item_code}", name="open_docs_twig", methods={"GET"})
     */

    public function readDocs($item_code)
    {

        $docname = $this->manager->readDoc($item_code);


        return $this->render('file/openfile.html.twig', $docname);


    }


    /**
     * @Route("/openDocument/{item_code}", name="open_any_document_twig", methods={"GET"})
     */
    public function OpenDocument($item_code)
    {


        $docname = $this->manager->openDocument($item_code);


        return $this->render('file/openfile.html.twig', $docname);


    }


    /**
     * @Route("/pdftohtml", name="pdf to html _twig", methods={"GET"})
     */
    public function PdfToHtml()
    {

        $publicResourcesFolderPath = $this->getParameter('uploads_directory');
        $filename = $publicResourcesFolderPath . 'test.pdf';


        Config::setBinDirectory('C:/poppler-0.54_x86/bin');

// set output directory
        Config::setOutputDirectory($publicResourcesFolderPath);

        $pdfToHtml = new PdfToHtml($filename);
        $pdfToHtml->setZoomRatio(1.8);
        $pdfToHtml->exchangePdfLinks();
        $pdfToHtml->startFromPage(1)->stopAtPage(5);
        $pdfToHtml->generateSingleDocument();
        $pdfToHtml->noFrames();
        $pdfToHtml->oddPagesOnly();
        $pdfToHtml->outputToConsole();
        return "ok" . $pdfToHtml->generate();

//solution autre 
// nop limitation size https://github.com/ypio/php-microsoft-graph-file-converter

// https://github.com/meshesha/PPTXjs

    }


}
