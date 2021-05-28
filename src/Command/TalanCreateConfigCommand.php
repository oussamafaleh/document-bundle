<?php

namespace App\Command;

use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;
use Symfony\Component\Console\Question\Question;

class TalanCreateConfigCommand extends Command
{
    protected static $defaultName = 'app:talan:create:config';
    protected static $defaultDescription = 'Create a new configuration for database';

    protected function configure()
    {
        $this
            ->setDescription(self::$defaultDescription)   
            ->addArgument('type_db', InputArgument::REQUIRED, 'type of sgbd')
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);
        $type_db = $input->getArgument('type_db');
        $helper = $this->getHelper('question');

        if ($type_db) {
            $io->note(sprintf('You passed an argument: %s', $type_db));

            
        if($type_db == 'mysql'){

            $hostQuestion = new Question("Enter the host : (localhost) ", "localhost");
            $host = $helper->ask($input, $output, $hostQuestion);
            $output->writeln($host);

            $portQuestion = new Question("Enter the port : (3306) ", "3306");
            $port = $helper->ask($input, $output, $portQuestion);
            $output->writeln($port);

            $userQuestion = new Question("Enter the database user : (root) ", "root");
            $user = $helper->ask($input, $output, $userQuestion);
            $output->writeln($user);

            $pwdQuestion = new Question('Enter the database password : (" ") ', '');
            $pwdQuestion->setHidden(true);
            $pwd = $helper->ask($input, $output, $pwdQuestion);

            $dbQuestion = new Question('Enter the database name : (test) ', 'test');
            $db = $helper->ask($input, $output, $dbQuestion);
            $output->writeln($db);

            $array = [
                 $type_db => ['host' => $host, 'port' => $port, 'user' => $user, 'password' => $pwd, 'db_name' => $db],
            ];
        }
        else if($type_db == 'mongodb'){
            $hostQuestion = new Question("Enter the host : (mongodb) ", "mongodb");
            $host = $helper->ask($input, $output, $hostQuestion);
            $output->writeln($host);

            $portQuestion = new Question("Enter the port : (27017) ", "27017");
            $port = $helper->ask($input, $output, $portQuestion);
            $output->writeln($port);



            $dbQuestion = new Question('Enter the database name : (test) ', 'test');
            $db = $helper->ask($input, $output, $dbQuestion);
            $output->writeln($db);

          
            $array = [
                 $type_db => ['host' => $host, 'port' => $port, 'db_name' => $db],
            ];
            

        }
        else {
            $output->writeln('<error>Error type</error>');
            return 0;
        }


        }

      


        $io->success('you created config for database');

        return 0;
    }
}
