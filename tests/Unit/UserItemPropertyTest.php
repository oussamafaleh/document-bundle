<?php



namespace App\Tests\Unit;

use PHPUnit\Framework\TestCase;
use App\Entity\UserItemProperty;

class UserItemPropertyTest extends TestCase  {

    
    public function testGetRole(): void{

        $Useritem= new UserItemProperty();
        $value='User';
        $Useritem->setRole($value);
        $this->assertEquals($value, $Useritem->getRole());

    }

     
    public function testIsAccepted(): void{

        $Useritem= new UserItemProperty();
        $value=TRUE;
        $Useritem->setAccepted($value);
        $this->assertEquals($value, $Useritem->getAccepted());

    }

    public function testIsTagged(): void{

        $Useritem= new UserItemProperty();
        $value=TRUE;
        $Useritem->setIsTagged($value);
        $this->assertEquals($value, $Useritem->getIsTagged());

    }


    
}