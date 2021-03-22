<?php

namespace App\DataFixtures;

use App\Entity\Folder;
use App\Entity\ServiceMessage;
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


        // cerate root folder

        $folder1 = new Folder();
        $folder1->setLabel('root')
            ->setCode('84150eb1-336a-4193-ba8d-6237bb7e374e')
            ->setCreatedAt(new \DateTime());
        $manager->persist($folder1);
        $userItemProp = new UserItemProperty();
        $userItemProp->setUser($user1)
            ->setItem($folder1)
            ->setIsTagged(false)
            ->setRoles(array("OWNER" => "ROLE_OWNER"));

        $manager->persist($userItemProp);

        // cerate other folders under root
        foreach (range(0, 20) as $number) {
            $subFolder1 = new Folder();
            $subFolder1->setLabel('sub_folder_'.$number)
                ->setParent($folder1)
                ->setCreatedAt(new \DateTime());

            $manager->persist($subFolder1);
            $userItemProp = new UserItemProperty();
            $userItemProp->setUser($user1)
                ->setItem($subFolder1)
                ->setIsTagged(false)
                ->setRoles(array("OWNER" => "ROLE_OWNER"));
            $manager->persist($userItemProp);
        }

       //init history actions
        $createFolderService = new ServiceMessage();
        $createFolderService->setLabel("create_folder")
            ->setMessage("created the item");
        $manager->persist($createFolderService);

        $moveItemService = new ServiceMessage();
        $moveItemService->setLabel("move_item")
            ->setMessage("moved the item");
        $manager->persist($moveItemService);

        $uploadFileService = new ServiceMessage();
        $uploadFileService->setLabel("upload_file")
            ->setMessage("uploaded the file");
        $manager->persist($uploadFileService);;

        $manager->flush();
    }
}
