<?php


namespace App\Tests\Functional\API;


use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

abstract class AbstractWebTestCase extends WebTestCase
{
    protected function testResponseStructure ( $content )
    {
        $this->assertArrayHasKey('status', $content);
        $this->assertArrayHasKey('messages', $content);
        $this->assertArrayHasKey('results', $content);

    }
}