<?php

namespace App\Form;

use App\Entity\UserItemProperty;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class UserItemPropertyEditType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            /*  ->add('roles', CollectionType::class, [
                  'entry_type' => ChoiceType::class,
                  'entry_options' => [
                      'label' => false,
                      'choices' => [
                          'User' => 'ROLE_USER',
                          'Admin' => 'ROLE_ADMIN',
                      ],
                  ],
              ])

              */
            ->add('roles');
    }


    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'csrf_protection' => false,

            'data_class' => UserItemProperty::class,

        ]);
    }
}
