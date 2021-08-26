<?php


namespace Manager;


use PHPUnit\Framework\TestCase;

class FolderManagerTest extends DataFixtureTestCase
{
    protected $fooService;

    /**
     * {@inheritDoc}
     */
    public function setUp(): void
    {
        parent::setUp();
        $this->folderManager = $this->container->get('folderManager');
    }

    public function testFooTrue()
    {

        ...
        //custom logic
        ...

        $this->assertEquals(true, $value);
    }




