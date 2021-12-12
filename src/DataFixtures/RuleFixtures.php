<?php


namespace App\DataFixtures;


use App\Entity\Rule;
use App\Event\RuleEvent\FileEvent;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class RuleFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {

        $rule = new Rule();

// set the events this rule should be executed on.
        $rule->setEventName(
            FileEvent::classifyFileRule
        );

// set the expression to evaluate when the rule is executed.
// if the user has loved more than 20 items and the price of the product is more than 50 dollars.
// the expression string will be evaluated by the Symfony expression language.
        $rule->setExpression('file HAS_LABEL_AS "architec" CLASSIFY "dev department"');

// set the action events to dispatch when the expression evaluates to true.


        $manager->persist($rule);

        $manager->flush();

    }


}