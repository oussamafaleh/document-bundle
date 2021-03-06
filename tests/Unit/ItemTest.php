<?php



namespace App\Tests\Unit;

use PHPUnit\Framework\TestCase;
use App\Entity\Item;

class ItemTest extends TestCase  {

    
    public function testGetCode(): void{

        $item= new Item();
        $value='code1';
        $item->setCode($value);
        $this->assertEquals($value, $item->getCode());

    }


    public function testGetLabel(): void{

        $item= new Item();
        $value='label 1';
        $item->setLabel($value);
        $this->assertEquals($value, $item->getLabel());

    }


    public function testGetPath(): void{

        $item= new Item();
        $value='path 1';
        $item->setPath($value);
        $this->assertEquals($value, $item->getPath());

    }

    public function testGetIcon(): void{

        $item= new Item();
        $value='Icon 1 ';
        $item->setIcon($value);
        $this->assertEquals($value, $item->getIcon());

    }

   
   



    
}