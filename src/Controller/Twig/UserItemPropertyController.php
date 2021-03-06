<?php

namespace App\Controller\Twig;

use App\Entity\UserItemProperty;
use App\Form\UserItemPropertyType;
use App\Repository\UserItemPropertyRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/user/item/property")
 */
class UserItemPropertyController extends AbstractController
{
    /**
     * @Route("/", name="user_item_property_index", methods={"GET"})
     */
    public function index(UserItemPropertyRepository $userItemPropertyRepository): Response
    {
        return $this->render('user_item_property/index.html.twig', [
            'user_item_properties' => $userItemPropertyRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="user_item_property_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $userItemProperty = new UserItemProperty();
        $form = $this->createForm(UserItemPropertyType::class, $userItemProperty);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($userItemProperty);
            $entityManager->flush();

            return $this->redirectToRoute('user_item_property_index');
        }

        return $this->render('user_item_property/new.html.twig', [
            'user_item_property' => $userItemProperty,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="user_item_property_show", methods={"GET"})
     */
    public function show(UserItemProperty $userItemProperty): Response
    {
        return $this->render('user_item_property/show.html.twig', [
            'user_item_property' => $userItemProperty,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="user_item_property_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, UserItemProperty $userItemProperty): Response
    {
        $form = $this->createForm(UserItemPropertyType::class, $userItemProperty);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('user_item_property_index');
        }

        return $this->render('user_item_property/edit.html.twig', [
            'user_item_property' => $userItemProperty,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="user_item_property_delete", methods={"DELETE"})
     */
    public function delete(Request $request, UserItemProperty $userItemProperty): Response
    {
        if ($this->isCsrfTokenValid('delete'.$userItemProperty->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($userItemProperty);
            $entityManager->flush();
        }

        return $this->redirectToRoute('user_item_property_index');
    }
}
