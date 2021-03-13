<?php

namespace App\DataFixtures;

use App\Entity\Folder;
use App\Entity\User;
use App\Entity\UserItemProperty;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
         $user1 = new User();
         $user1->setCode('0970229e-4867-4ada-b0ac-a199446cbc21');
         $manager->persist($user1);
        $user2 = new User();
        $user2->setCode('e499799d-4015-430a-ab91-8ae9b36c4b76');
        $manager->persist($user2);
        $user3 = new User();
        $user3->setCode('e8a96344-bf92-4f54-94b9-3734dc7ac745');
        $manager->persist($user3);


        // cerate root folder

        $folder1 = new Folder();
        $folder1->setLabel('root')
            ->setCode('84150eb1-336a-4193-ba8d-6237bb7e374e')
            ->setCreatedAt(new \DateTime());
        $manager->persist($folder1);


        // cerate other folders under root
        foreach (range(0, 20) as $number) {
            $subFolder1 = new Folder();
            $subFolder1->setLabel('sub_folder_'.$number)
                ->setParent($folder1)
                ->setCreatedAt(new \DateTime());

            $manager->persist($subFolder1);
        }
        $subFolder2 = new Folder();
        $subFolder2->setLabel('sub_folder_2')
            ->setCode('3776d01e-a994-433b-ba95-a7720ed65fe9')
            ->setParent($folder1)
            ->setCreatedAt(new \DateTime());
        $manager->persist($subFolder2);

        $userItemProp = new UserItemProperty();
        $userItemProp->setUser($user1)
            ->setItem($folder1)
            ->setIsTagged(false)
            ->setRoles(array("OWNER" => "ROLE_OWNER"));

        $manager->flush();
    }
}
