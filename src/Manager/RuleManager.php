<?php


namespace App\Manager;


use App\Entity\Rule;
use App\Form\RuleType;
use App\Utils\MyTools;
use Doctrine\ORM\EntityManager;
use App\ExpressionLanguage\RuleExpressionLanguage;
use Symfony\Component\Form\FormFactory;
use Symfony\Component\Security\Core\Security;

class RuleManager extends AbstractManager
{
    private $expressionLanguage;

    /**
     * @var FormFactory
     */
    private $form;


    private $security;
    public function __construct(EntityManager $entityManager, Security $security ,FormFactory $formFactory)
    {
        parent::__construct($entityManager);
        $this->expressionLanguage = new RuleExpressionLanguage();

        $this->form  = $formFactory ;
        $this->security = $security;

    }
    public function evaluateRule($expression, $exprArg )
    {
        $ast =  $this->expressionLanguage->evaluate($expression, $exprArg);
        return ['data' => $ast];

    }
    public function getTwigData($filters = null){

       // if ($this->security->isGranted("ROLE_CREATE_RULE" )) {
            $ruleForm = $this->form->create(RuleType::class );
      //  }
        $operators = $this->getOperators();
        return [
            'operators' => $operators['operators'],
            'rules' => $this->getRules($filters)['data'],
            'rule_form' => $ruleForm->createView()
        ] ;
    }
    public function getRules(){
        $rules = $this->apiEntityManager
            ->getRepository(Rule::class)
            ->findByFilters();
        return [
            'messages' => 'list-rules-success',
            'data' =>  MyTools::paginator((array)$rules),
    ];
    }
    public function getOperators(){
        $operators = [];
        foreach ($this->expressionLanguage->getOperators() as $operatorName => $operatorDescription){
            $operators[]= [
                'key' => $operatorName,
                'description' => $operatorDescription['description']
            ];
        }
        return [
            'operators' => $operators,
        ] ;
    }

    public function createRule($ruleData){
        $rule = new Rule;
        $rule->setEventName($ruleData['eventName'])
            ->setExpression($ruleData['expression']);

        $this->apiEntityManager->persist($rule);
        $this->apiEntityManager->flush();
        return ['data' => [
            'messages' => 'create_success',
            'code' => $rule->getEventName()
        ]];
    }
}