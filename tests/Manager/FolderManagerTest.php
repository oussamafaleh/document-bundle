<?php


namespace App\Tests\Unit\Manager;

use App\Entity\Folder;
use App\Entity\User;
use App\Entity\UserItemProperty;
use App\Manager\FolderManager;
use Doctrine\Bundle\DoctrineBundle\Registry;
use PHPUnit\Framework\TestCase;

class FolderManagerTest extends TestCase
{
    protected $user1;
    protected $folder1;
    protected $subFolder1;
    protected $subFolder2;
    protected $userItemProp;

    public function setUp():void
    {

        $this->user1 = new User();
        $this->user1->setCode('0970229e-4867-4ada-b0ac-a199446cbc21');


        // cerate root folder

        $this->folder1 = new Folder();
        $this->folder1->setLabel('root')
            ->setCode('84150eb1-336a-4193-ba8d-6237bb7e374e')
            ->setCreatedAt(new \DateTime());

        // cerate other folders under root

        $this->subFolder1 = new Folder();
        $this->subFolder1->setLabel('sub_folder_1')
            ->setCode('b9c4c548-058c-48cf-8caa-c086d5a030be')
            ->setParent($this->folder1)
            ->setCreatedAt(new \DateTime());


        $this->subFolder2 = new Folder();
        $this->subFolder2->setLabel('sub_folder_2')
            ->setCode('3776d01e-a994-433b-ba95-a7720ed65fe9')
            ->setParent($this->folder1)
            ->setCreatedAt(new \DateTime());

        $this->userItemProp = new UserItemProperty();
        $this->userItemProp->setIdUser($this->user1)
            ->setIdItem($this->folder1)
            ->setIsTagged(false)
            ->setRoles(array("OWNER" => "ROLE_OWNER"));
    }
        public function getDoctrineEntityManager($mockResult)
        {
            $queryExpectedValue = 'define expected return from query';

            /**
             * Infering that the the Subject Under Test is dealing with a single
             * repository.
             *
             * @var Doctrine\ORM\EntityRepository
             */
            $repository = $this
                ->getMockBuilder('Doctrine\ORM\EntityRepository')
                ->disableOriginalConstructor()
                ->setMethods(array('findOneBy'))
                ->getMock();

            $repository
                ->expects($this->any(0))
                ->method('findOneBy')
                ->will($this->returnValue($mockResult['parent']));

            $repository
                ->expects($this->any(1))
                ->method('findOneBy')
                ->will($this->returnValue($mockResult['user']));

            $entityManager = $this
                ->getMockBuilder('Doctrine\ORM\EntityManager')
                ->setMethods(array('getRepository'))
                ->disableOriginalConstructor()
                ->getMock();

            $entityManager
                ->expects($this->any(0))
                ->method('getRepository')
              //  ->with(Folder::class)
                ->will($this->returnValue($repository));

            $entityManager
                ->expects($this->any(1))
                ->method('getRepository')
            //    ->with(User::class)
                ->will($this->returnValue($repository));

            return $entityManager ;

        }


    public function getCreateAtributesTests()
    {
        return [
            [
                ['parent_code'  =>  "d51a834f-5f7c-4ec0-8a49-0bdd3d375c00"  ,  'user_code'  =>  "7067ef79-c685-40cd-8763-14e051ac4c82"  ,  'label'  =>  "wrong_parent_user"],
                ['parent'  =>  null  ,  'user'  =>  null  ],
                ['messages'=> 'not_fond_exeption']
            ],
            [
                ['parent_code'  =>  "580359cd-9380-4df3-99c6-4e9c37f661c3"  ,  'user_code'  =>  "7067ef79-c685-40cd-8763-14e051ac4c82"  ,  'label'  =>  "wrong_parent_user"],
                ['parent'  =>  null  ,  'user'  =>  null  ],
                ['messages'=> 'not_fond_exeption']
            ],
            [
                ['parent_code'  =>  "68506df4-6bae-4c83-8774-a94ef43347c3"  ,  'user_code'  =>  "0970229e-4867-4ada-b0ac-a199446cbc21"  ,  'label'  =>  "wrong_parent"],
                ['parent'  =>  null  ,  'user'  =>  $this->user1  ],
                ['messages'=> 'not_fond_exeption']
            ],
            [
                ['parent_code'  =>  "68506df4-6bae-4c83-8774-a94ef43347c3"  ,  'user_code'  =>  "0970229e-4867-4ada-b0ac-a199446cbc21"  ,  'label'  =>  "wrong_parent"],
                ['parent'  =>  null  ,  'user'  =>  null  ],
                ['messages'=> 'not_fond_exeption']
            ],
            [
                ['parent_code'  =>  "84150eb1-336a-4193-ba8d-6237bb7e374e"  ,  'user_code'  =>  "0970229e-4867-4ada-b0ac-a199446cbc21"  ,  'label'  =>  "folder_test1"],
                ['parent'  =>  $this->folder1  ,  'user'  =>  $this->user1  ],
                ['messages'=> 'create_success']
            ],
            [
                ['parent_code'  =>  "84150eb1-336a-4193-ba8d-6237bb7e374e"  ,  'user_code'  =>  "0970229e-4867-4ada-b0ac-a199446cbc21"  ,  'label'  =>  "folder_test1"],
                ['parent'  =>  $this->folder1  ,  'user'  =>  $this->user1  ],
                ['messages'=> 'fond_exeption']
            ]
        ];
    }

    /**
     * @dataProvider getCreateAtributesTests
     */
    public function testCreate(array $attr ,array $mockResult ,array $methodResult ){

        $entityManager =$this->getDoctrineEntityManager($mockResult);

        $folderManager = new FolderManager($entityManager );
        $content = $folderManager->create($attr);
        $this->assertArrayHasKey('data', $content);
        $this->assertArrayHasKey('messages', $content['data']);
        $this->assertEquals($content['data']['messages'] , $methodResult['messages']);
        $this->assertEquals($content['data']['messages'] , $methodResult['messages']);
    }
}