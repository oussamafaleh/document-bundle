<?php


namespace App\Tests\Unit\Manager;

use App\Entity\Folder;
use App\Entity\User;
use App\Entity\UserItemProperty;
use App\Manager\FolderManager;
use App\Tests\AbstractTestCase;

class FolderManagerTest extends AbstractTestCase
{

    public function getCreateAtributesTests()
    {

        $user1 = new User();
        $user1->setCode('0970229e-4867-4ada-b0ac-a199446cbc21');


        // cerate root folder

        $folder1 = new Folder();
        $folder1->setLabel('root')
            ->setCode('84150eb1-336a-4193-ba8d-6237bb7e374e')
            ->setCreatedAt(new \DateTime());

        // cerate other folders under root

        $subFolder1 = new Folder();
        $subFolder1->setLabel('sub_folder_1')
            ->setCode('b9c4c548-058c-48cf-8caa-c086d5a030be')
            ->setParent($folder1)
            ->setCreatedAt(new \DateTime());


        $subFolder2 = new Folder();
        $subFolder2->setLabel('sub_folder_2')
            ->setCode('3776d01e-a994-433b-ba95-a7720ed65fe9')
            ->setParent($folder1)
            ->setCreatedAt(new \DateTime());

        $userItemProp = new UserItemProperty();
        $userItemProp->setIdUser($user1)
            ->setIdItem($folder1)
            ->setIsTagged(false)
            ->setRoles(array("OWNER" => "ROLE_OWNER"));

        return [
//            [
//                ['parent_code'  =>  "d51a834f-5f7c-4ec0-8a49-0bdd3d375c00"  ,  'user_code'  =>  "7067ef79-c685-40cd-8763-14e051ac4c82"  ,  'label'  =>  "wrong_parent_user"],
//                ['parent'  =>  null  ,  'user'  =>  null  ],
//                ['messages'=> 'not_fond_exeption']
//            ],
//            [
//                ['parent_code'  =>  "580359cd-9380-4df3-99c6-4e9c37f661c3"  ,  'user_code'  =>  "7067ef79-c685-40cd-8763-14e051ac4c82"  ,  'label'  =>  "wrong_parent_user"],
//                ['parent'  =>  null  ,  'user'  =>  null  ],
//                ['messages'=> 'not_fond_exeption']
//            ],
//            [
//                ['parent_code'  =>  "68506df4-6bae-4c83-8774-a94ef43347c3"  ,  'user_code'  =>  "0970229e-4867-4ada-b0ac-a199446cbc21"  ,  'label'  =>  "wrong_parent"],
//                ['parent'  =>  null  ,  'user'  =>  $user1  ],
//                ['messages'=> 'not_fond_exeption']
//            ],
//            [
//                ['parent_code'  =>  "68506df4-6bae-4c83-8774-a94ef43347c3"  ,  'user_code'  =>  "0970229e-4867-4ada-b0ac-a199446cbc21"  ,  'label'  =>  "wrong_parent"],
//                ['parent'  =>  null  ,  'user'  =>  null  ],
//                ['messages'=> 'not_fond_exeption']
//            ],
            [
                ['parent_code'  =>  "84150eb1-336a-4193-ba8d-6237bb7e374e"  ,  'user_code'  =>  "0970229e-4867-4ada-b0ac-a199446cbc21"  ,  'label'  =>  "folder_test1"],
                ['parent'  =>  $folder1  ,  'user'  =>  $user1  ],
                ['messages'=> 'create_success']
            ],
            [
                ['parent_code'  =>  "84150eb1-336a-4193-ba8d-6237bb7e374e"  ,  'user_code'  =>  "0970229e-4867-4ada-b0ac-a199446cbc21"  ,  'label'  =>  "folder_test1"],
                ['parent'  =>  $folder1  ,  'user'  =>  $user1  ],
                ['messages'=> 'fond_exeption']
            ]
        ];
    }

    /**
     * @dataProvider getCreateAtributesTests
     */
    public function testCreate(array $attr ,array $mockResult ,array $methodResult ){

        $this->entityManager =$this->getDoctrineEntityManager('getRepository',0,'findOneBy',$mockResult['user']);
        $this->entityManager =$this->getDoctrineEntityManager('getRepository',1,'findOneBy',$mockResult['parent']);
        $this->entityManager =$this->getDoctrineEntityManager('getConnection',2);
        $this->entityManager =$this->getDoctrineEntityManager('persist',3);
        $this->entityManager =$this->getDoctrineEntityManager('persist',4);
        $this->entityManager =$this->getDoctrineEntityManager('flush',5);
        $this->entityManager =$this->getDoctrineEntityManager('commit',6);


        $folderManager = new FolderManager($this->entityManager );
        $content = $folderManager->create($attr);
        $this->assertArrayHasKey('data', $content);
        $this->assertArrayHasKey('messages', $content['data']);
        $this->assertEquals($content['data']['messages'] , $methodResult['messages']);
        $this->assertEquals($content['data']['messages'] , $methodResult['messages']);
    }
}