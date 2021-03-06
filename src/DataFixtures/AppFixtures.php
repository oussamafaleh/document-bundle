<?php

namespace App\DataFixtures;

use App\Entity\Folder;
use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
         $user1 = new User();
         $manager->persist($user1);
        $user2 = new User();
        $manager->persist($user2);
        $user3 = new User();
        $manager->persist($user3);

        $folder = new Folder();
        $folder->setLabel('root')
                ->setCreatedAt(new \DateTime());
        $manager->persist($folder);
        $manager->flush();
    }
}
