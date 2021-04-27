<?php


namespace App\Tests\Unit;

use App\Entity\Folder;
use App\Entity\User;
use App\Entity\UserItemProperty;
use App\Manager\FolderManager;
use App\Tests\Unit\AbstractUnitTestCase;
use Symfony\Component\Form\FormFactory;
use Symfony\Component\Security\Core\Security;

class FolderManagerTest extends AbstractUnitTestCase
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
        $userItemProp->setUser($user1)
            ->setItem($folder1)
            ->setIsTagged(false)
            ->setRoles(array("ROLE_OWNER"));
        $list = array(
            [
            "total" => "2",
            "code" => "3776d01e-a994-433b-ba95-a7720ed65fe9",
            "label" => "sub_folder_2",
            "type" => "folder",
            "roles" => '"["ROLE_OWNER"]"',
            "is_tagged" => "0",
            "updated_at" => null,
            "created_at" => "2021-04-14 10:40:53",
          ],
        [
            "total" => "2",
            "code" => "b9c4c548-058c-48cf-8caa-c086d5a030be",
            "label" => "sub_folder_1",
            "type" => "folder",
            "roles" => '"["ROLE_OWNER"]"',
            "is_tagged" => "0",
            "updated_at" => null,
            "created_at" => "2021-04-14 10:40:53",
        ]);



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
                ['parentCode'  =>  "84150eSb1-336a-4193-ba8d-6237bb7e374e"  ,  'userCode'  =>  "0970229e-4867-4ada-b0ac-a199446cbc21" ],  [ 'label'  =>  "folder_test1"],
                ['parent'  =>  $folder1  ,  'user'  =>  $user1 , 'list' => $list , 'property' => $userItemProp ],
                ['messages'=> 'create_success']
            ]
        ];
    }

    /**
     * @dataProvider getCreateAtributesTests
     */
    public function testCreate(array $initAttr ,array $createAttr ,array $mockResult ){
        $i =0;
        $this->getDoctrineEntityMock('getRepository',$i++,'findOneBy',$mockResult['user']);
        $this->getDoctrineEntityMock('getRepository',$i++,'findOneBy',$mockResult['parent']);
        $this->getDoctrineEntityMock('getRepository',$i++,'findByFilters',$mockResult['list']);

        $this->getDoctrineEntityMock('getRepository',$i++,'findOneBy',$mockResult['property']);
        $this->getConnectionMock('getConnection',$i++);
        $this->getCommitMock('beginTransaction',$i++);
        $this->getDoctrineEntityMock('persist',$i++);
        $this->getDoctrineEntityMock('persist',$i++);
        $this->getDoctrineEntityMock('flush',$i++);
        $this->getCommitMock('commit',$i);

        $security = $this->createMock(Security::class);
        $form = $this->createMock(FormFactory::class);
        $folderManager = new FolderManager($this->entityManager,$security ,$form);
        $init = $folderManager->init($initAttr);
        $this->assertEquals($init->getParentCode() , $initAttr['parentCode']);
        $this->assertEquals($init->getUserCode() , $initAttr['userCode']);

        $init->create($createAttr);

    }
}