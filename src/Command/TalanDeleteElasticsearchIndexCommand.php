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


class TalanDeleteElasticsearchIndexCommand extends Command
{
    protected static $defaultName = 'talan:delete:elastic:index';
    protected static $defaultDescription = 'delete index elasticsearch';

    protected function configure()
    {
        $this
            ->setDescription(self::$defaultDescription)
            ->addArgument('index_name', InputArgument::REQUIRED, 'Index Name ')
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);
        $index_name = $input->getArgument('index_name');
        $helper = $this->getHelper('question');

        if ($index_name) {
            $io->note(sprintf('You passed an argument: %s', $index_name));

            $hostQuestion = new Question("Enter the host : (127.0.0.1) ", "127.0.0.1");
            $host = $helper->ask($input, $output, $hostQuestion);
            $output->writeln($host);
           
            $portQuestion = new Question("Enter the port : (9200) ", "9200");
            $port = $helper->ask($input, $output, $portQuestion);
            $output->writeln($port);
            $array = [
                $host.':'.$port
           ];
           
            $client = ClientBuilder::create()->setHosts((array)$array[0]) ->build(); 
             $params = [
                'index' =>   $index_name
              ];
    
            $response=  $this->client->delete($params);
        }

        $io->success('You deleted name of index ');

        return 0;
    }
}
