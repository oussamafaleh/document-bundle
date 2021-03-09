<?php


namespace App\Tests\Unit\Manager;

use App\Manager\FolderManager;
use Doctrine\Bundle\DoctrineBundle\Registry;
use PHPUnit\Framework\TestCase;
use Symfony\Component\HttpFoundation\RequestStack;

class FolderManagerTest extends TestCase
{


    public function getCreateAtributesTests()
    {
        return [
            [['parent_code'  =>  "d51a834f-5f7c-4ec0-8a49-0bdd3d375c00"  ,  'user_code'  =>  "7067ef79-c685-40cd-8763-14e051ac4c82"  ,  'label'  =>  "wrong_parent_user"]],
//            [['parent_code'  =>  "580359cd-9380-4df3-99c6-4e9c37f661c3"  ,  'user_code'  =>  "7067ef79-c685-40cd-8763-14e051ac4c82"  ,  'label'  =>  "wrong_parent_user"]],
//            [['parent_code'  =>  "68506df4-6bae-4c83-8774-a94ef43347c3"  ,  'user_code'  =>  "0970229e-4867-4ada-b0ac-a199446cbc21"  ,  'label'  =>  "wrong_parent"]],
//            [['parent_code'  =>  "68506df4-6bae-4c83-8774-a94ef43347c3"  ,  'user_code'  =>  "0970229e-4867-4ada-b0ac-a199446cbc21"  ,  'label'  =>  "wrong_parent"]],
//            [['parent_code'  =>  "84150eb1-336a-4193-ba8d-6237bb7e374e"  ,  'user_code'  =>  "0970229e-4867-4ada-b0ac-a199446cbc21"  ,  'label'  =>  "folder_test1"]],
//            [['parent_code'  =>  "84150eb1-336a-4193-ba8d-6237bb7e374e"  ,  'user_code'  =>  "0970229e-4867-4ada-b0ac-a199446cbc21"  ,  'label'  =>  "folder_test1"]]
        ];
    }

    /**
     * @dataProvider getCreateAtributesTests
     */
    public function testCreate(array $folder){
        $expectedValue =
        $entityManager = $this->createMock(Registry::class);
        $request = $this->createMock(RequestStack::class);
        $folderManager = new FolderManager($entityManager, $request);
        $content = $folderManager->create($folder);
        $this->assertArrayHasKey('code', $content['data']);
    }
}