<?php


namespace Functional;



use App\Tests\Functional\API\AbstractWebTestCase;
use Symfony\Component\HttpFoundation\File\UploadedFile;

class FileControllerTest extends AbstractWebTestCase
{

    public function getListDataTests()
    {
        return [
            [
                ['parent_code'  =>  "65f0a100-c902-4d83-be59-a1534da1eee8"  ,  'user_code'  =>  "0970229e-4867-4ada-b0ac-a199446cbc21" , 'fileName' =>'class_diagram.png' , 'fileType' =>'image/png'],
                ['status'=>"success" ,'messages'=> ['code' => 200 ,'value' =>'create_success'] , 'result' =>['class' => null ]]
            ],
            [
                ['parent_code'  =>  "65f0a100-c902-4d83-be59-a1534da1eee8"  ,  'user_code'  =>  "0970229e-4867-4ada-b0ac-a199446cbc21" , 'file' =>'description_stage.pdf' , 'fileType' =>'application/pdf'],
                ['status'=>"success" ,'messages'=> ['code' => 200 ,'value' =>'create_success'] , 'result' =>['class' => 'stage']]
            ],
            [
                ['parent_code'  =>  "65f0a100-c902-4d83-be59-a1534da1eee8"  ,  'user_code'  =>  "0970229e-4867-4ada-b0ac-a199446cbc21", 'file' =>'design-thinking.png' , 'fileType' =>'image/png'],
                ['status'=>"success" ,'messages'=> ['code' => 200 ,'value' =>'create_success'] , 'result' =>['class' => null ]]
            ]
        ];
    }
    /**
     * @dataProvider getListDataTests
     */
    public function testGetCountriesAction(array $requestAttr ,array $result)
    {
        $client = static::createClient([], ['content-Type' => 'application/json']);
        $file = new UploadedFile('/var/www/symfony/public/test-upload/'.$requestAttr['fileName'], $requestAttr['fileName'], $requestAttr['fileType'], 123);
        $crawler = $client->request('POST', '/api/file/upload', [
            "user_code"=> $requestAttr['user_code'],
            "parent_code"=> $requestAttr['parent_code'],
            ],
            ["file"=> $file]
        );
        $content = json_decode($client->getResponse()->getContent(), true);
        dd($content);
        $this->testResponseStructure($content);
        $this->assertEquals($content['status'], $result['status']);
        $this->assertEquals($content['messages']['value'], $result['messages']['value']);
        $this->assertEquals($content['messages']['code'], $result['messages']['code']);
        if( $result['status'] == "success" ){
            $this->assertEquals($content['results']['data']['class'], $result['result']['class']);

        }
    }
}