<?php



namespace App\Tests\Unit;

use PHPUnit\Framework\TestCase;
use App\Entity\Document;

class DocumentTest extends TestCase  {

    
   
    public function testGetExtension(): void{

        $document= new Document();
        $value='extension 1';
        $document->setExtension($value);
        $this->assertEquals($value, $document->getExtension());

    }



    public function testGeSize(): void{

        $document= new Document();
        $value='size 1';
        $document->setSize($value);
        $this->assertEquals($value, $document->getSize());

    }

}

   
   