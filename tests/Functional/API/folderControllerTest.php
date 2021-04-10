<?php


namespace Functional;



use App\Tests\Functional\API\AbstractWebTestCase;

class folderControllerTest extends AbstractWebTestCase
{

    public function getListDataTests()
    {
        return [
            [
                ['parent_code'  =>  "d51a834f-5f7c-4ec0-8a49-0bdd3d375c00"  ,  'user_code'  =>  "7067ef79-c685-40cd-8763-14e051ac4c82" ],
                ['status'=>"failure" ,'messages'=> ['code' => 404 ,'value' =>'UNKNOWN_USER']]
            ],
            [
                ['parent_code'  =>  "580359cd-9380-4df3-99c"  ,  'user_code'  =>  "0970229e-4867-4ada-b0ac-a199446cbc21"  ],
                ['status'=>"failure" ,'messages'=> ['code' => 404 ,'value' =>'UNKNOWN_PARENT']]
            ],
            [
                ['parent_code'  =>  "84150eb1-336a-4193-ba8d-6237bb7e374e"  ,  'user_code'  =>  "0970229e-4867-4ada-b0ac-a199446cbc21" ],
                ['status'=>"success" ,'messages'=> ['code' => 200 ,'value' =>'list-item-success']]
            ]
        ];
    }
    /**
     * @dataProvider getListDataTests
     */
    public function testGetCountriesAction(array $requestAttr ,array $result)
    {
        $client = static::createClient([], ['content-Type' => 'application/json']);

        $crawler = $client->request('GET', '/api/folder/list-sub-item/'. $requestAttr['parent_code'], [
            "user_code"=> $requestAttr['user_code'],
            "is_tagged"=> "0",
            "index" => 2
        ], []
        );
        $content = json_decode($client->getResponse()->getContent(), true);
        $this->testResponseStructure($content);
        $this->assertEquals($content['status'], $result['status']);
        $this->assertEquals($content['messages']['value'], $result['messages']['value']);
        $this->assertEquals($content['messages']['code'], $result['messages']['code']);
    }
}