<?php
namespace App\EventListener;
use App\Event\RuleEvent\FileEvent;
use App\ExpressionLanguage\RuleExpressionLanguage;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Contracts\EventDispatcher\Event;
use Doctrine\ORM\EntityManagerInterface;
use App\Entity\Rule;
use App\Manager\RuleEventManager;

class RuleListener {


    private $entityManager;
    private $ruleEventManager;

    /**
     * RuleListener constructor.
     * @param EntityManagerInterface $entityManager
     * @param $expressionLanguage
     * @param $ruleEventManager
     */
    public function __construct(EntityManagerInterface $entityManager,RuleManager $ruleEventManager)
    {
        $this->entityManager = $entityManager;
        $this->expressionLanguage = new RuleExpressionLanguage();
        $this->ruleManager = $ruleEventManager;
    }

    public static function getSubscribedEvents()
    {
        return array(
            FileEvent::classifyFileRule => 'handleEvent',
        );
    }
    public function handleEvent(FileEvent $event)
    {
        $rule = $this->entityManager->getRepository(Rule::class)->findOneBy(['eventName' => [$event->getEventName()]]);


        $event->setFileClass();
    }
    private function evaluateRule(Rule $rule, FileEvent $event )
    {
        return $this->expressionLanguage->evaluate($rule->getExpression(), array(
            'file' => $event->getFile(),
        ));
    }

}