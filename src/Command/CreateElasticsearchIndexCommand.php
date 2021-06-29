<?php

namespace App\Command;

use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

use Symfony\Component\Console\Question\Question;
use Elasticsearch\ClientBuilder;

class CreateElasticsearchIndexCommand extends Command
{
    protected static $defaultName = 'talan:create:elastic:index';
    protected static $defaultDescription = 'Add a short description for your command';
    

    protected function configure()
    {
        $this
            ->setDescription(self::$defaultDescription)
            ->addArgument('index_name', InputArgument::REQUIRED, 'index name of elasticsearch')
            ->addArgument('attachment', InputArgument::REQUIRED, 'id attachment if you would index files pdf or docs for example')
          
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);
        $index_name = $input->getArgument('index_name');
        $attachment = $input->getArgument('attachment');
        $helper = $this->getHelper('question');


        if ($index_name) {
            $io->note(sprintf('You passed an argument: %s', $index_name));

            $hostQuestion = new Question("Enter the host : (elasticsearch) ", "elasticsearch");
            $host = $helper->ask($input, $output, $hostQuestion);
            $output->writeln($host);
           
            $portQuestion = new Question("Enter the port : (9200) ", "9200");
            $port = $helper->ask($input, $output, $portQuestion);
            $output->writeln($port);
            $array = [
                $host.':'.$port
           ];

            $client = ClientBuilder::create()
            ->setHosts((array)$array[0])
            ->build(); 
             $params = [
                'index' =>   $index_name,
                 'body' => [
                     'settings' => [
                         'number_of_shards' => 1,
                         'number_of_replicas' => 0,
//                         'analysis' => [
//                             'filter' => [
//                                 'shingle' => [
//                                     'type' => 'shingle'
//                                 ]
//                             ],
//                             'char_filter' => [
//                                 'pre_negs' => [
//                                     'type' => 'pattern_replace',
//                                     'pattern' => '(\\w+)\\s+((?i:never|no|nothing|nowhere|noone|none|not|havent|hasnt|hadnt|cant|couldnt|shouldnt|wont|wouldnt|dont|doesnt|didnt|isnt|arent|aint))\\b',
//                                     'replacement' => '~$1 $2'
//                                 ],
//                                 'post_negs' => [
//                                     'type' => 'pattern_replace',
//                                     'pattern' => '\\b((?i:never|no|nothing|nowhere|noone|none|not|havent|hasnt|hadnt|cant|couldnt|shouldnt|wont|wouldnt|dont|doesnt|didnt|isnt|arent|aint))\\s+(\\w+)',
//                                     'replacement' => '$1 ~$2'
//                                 ]
//                             ],
//                             'analyzer' => [
//                                 'reuters' => [
//                                     'type' => 'custom',
//                                     'tokenizer' => 'standard',
//                                     'filter' => ['lowercase', 'stop', 'kstem']
//                                 ]
//                             ]
//                         ]
                     ],
                     'mappings' => [
                         'properties' => [
                             'label' => [
                                 'type' => 'text',
                                 'analyzer' => 'standard'
                             ]
                         ]
                     ]
                 ]
              ];
    
             $response = $client->indices()->create($params);

        }

        if($attachment){

            
           $params = [
            'id' => $attachment,
            'body' => [
                'processors' => [
                    [
                        $attachment => [
                            'field' => 'data',
                            'indexed_chars' => -1
                        ]
                    ]
                ]
            ]
        ];
        $client->ingest()->putPipeline($params);
        }
        $io->success('You have created new Index And Attachement , Good Job ');
        return 0;
    }
}
