<?php


namespace App\Manager;


use App\Manager\FileManager;
use App\Entity\Rule;
use App\Entity\User;
use App\Form\RuleType;
use App\Utils\MyTools;
use Doctrine\ORM\EntityManager;
use App\RuleExpressionLanguage\RuleExpressionLanguage;
use Elasticsearch\ClientBuilder;
use Symfony\Component\Form\FormFactory;
use Symfony\Component\Security\Core\Security;

class RuleManager extends AbstractManager
{
    const EXPRESSION_ARGUMENTS = [
        "file" , "user"
    ];
    private $expressionLanguage;

    /**
     * @var FormFactory
     */
//    /** @var string */
//    private $itemCode;

    /** @var string */
    private $userCode;

    private $form;
    private $indexName;
    private $es_config;
    private $attachment;
    private $es_port;
    private $es_host;


    private $security;
    public function __construct(EntityManager $entityManager, Security $security ,FormFactory $formFactory,  string $indexName, $es_port, $es_host, string $attachment , FileManager $fileManager ,  ItemManager $itemManager)
    {
        parent::__construct($entityManager);
        $this->expressionLanguage = new RuleExpressionLanguage($this);

        $this->form  = $formFactory ;
        $this->security = $security;
        $this->indexName = $indexName;
        $this->es_port = $es_port;
        $this->es_host = $es_host;
        $this->es_config = $attachment;
        $this->fileManager = $fileManager;
        $this->itemManager =$itemManager;

    }

    public function init($settings = [])
    {
        parent::setSettings($settings);

        if ($this->getUserCode()) {

            // find existing User
            $this->user = $this->apiEntityManager
                ->getRepository(User::class)
                ->findOneBy(['code' => $this->getUserCode()]);

            if (!$this->user instanceof User) {
                throw new \Exception('UNKNOWN_USER');
            }
        }elseif ($this->security->getUser()){
            $this->user =$this->security->getUser();
        }
        return $this;
    }

    /**
     * @return string
     */
    public function getUserCode()
    {
        return $this->userCode;
    }
    /**
     * @param string $userCode
     */
    public function setUserCode(string $userCode)
    {
        $this->userCode = $userCode;
    }

    public function evaluateRule( $file )
    {
        $rules = $this->apiEntityManager
            ->getRepository(Rule::class)
            ->findByFilters();

        $fileIndex = $this->fileManager
            ->init(['userCode' => $this->getUserCode()])
            ->IndexUploadDoc($file);

        $exprArg = [
        'file' => $fileIndex['code']
    ];
        $ast = [];
        foreach ($rules as $rule){
            $classification = $this->expressionLanguage->evaluate($rule['expression'], $exprArg);
            if (!in_array($classification, $ast)) {
                $ast[] = $classification;

            }
        }
        $this->itemManager->deleteIndex($fileIndex['code']);

        return ['data' => $ast];

    }
    public function getTwigData($filters = null){

        $ruleForm = $this->form->create(RuleType::class );
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

    public function compileRule($expression)
    {

        try {
            $ast =  $this->expressionLanguage->compile($expression , self::EXPRESSION_ARGUMENTS);
        } catch (\Exception $e) {
            return [
                'scope' => "danger",
                'alert' => "Syntax error : ".  $e->getMessage()
            ];
        }
        return [
            'scope' => "success",
            'alert' => "compiled successfuly"
        ];

    }

    public function contain($search,$user_code, $item_code)
    {

        $array = [
            $this->es_host . ':' . $this->es_port
        ];

        $client = ClientBuilder::create()
            ->setHosts((array)$array[0])
            ->build();

        $params = [
            'index' => $this->indexName,

            'body' => [

                'query' => [
                    'bool' => [
                        'must' => [
                            ['match' => ['_id' => $item_code]],
                            ['match' => ['user_code' => $user_code]]
                        ]
                    ]
                ]
            ]


        ];
        $params['body']['query']['bool']['must'][] = $search;

        return  $client->search($params);

    }


    public function classificationType($item_code,$searchType,$search )
    {

        switch ($searchType) {
            case "label":
                $search =
                    [
                        "query_string" => [
                            "query" => "*" . $search . "*",
                            "fields" => [
                                "label"
                            ]
                        ]
                    ];
                break;
                break;
            case "typeDoc":
                $search = [
                    'match' => [
                        'type' => $search
                    ]];
                break;
            case "content":
                $search =
                    [
                        "query_string" => [
                            "query" => "*" . $search . "*",
                            "fields" => [
                                "attachment.content"
                            ]
                        ]
                    ];
                break;
            case "extension":
                $search = [
                    'match' =>
                        [
                            'extension' => $search
                        ]];
                break;


        }

        $contain = $this->contain($search,$this->user->getCode(), $item_code);

        if($contain['hits']['total']['value'] > 0 ) {
            return true ;
        }
        return false;

    }




}