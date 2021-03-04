<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210304131908 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE test_m (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE test_n (id INT AUTO_INCREMENT NOT NULL, namen VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE test_n_test_m (test_n_id INT NOT NULL, test_m_id INT NOT NULL, INDEX IDX_58EDB8266C469C1 (test_n_id), INDEX IDX_58EDB827471C62F (test_m_id), PRIMARY KEY(test_n_id, test_m_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE test_n_test_m ADD CONSTRAINT FK_58EDB8266C469C1 FOREIGN KEY (test_n_id) REFERENCES test_n (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE test_n_test_m ADD CONSTRAINT FK_58EDB827471C62F FOREIGN KEY (test_m_id) REFERENCES test_m (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE test_n_test_m DROP FOREIGN KEY FK_58EDB827471C62F');
        $this->addSql('ALTER TABLE test_n_test_m DROP FOREIGN KEY FK_58EDB8266C469C1');
        $this->addSql('DROP TABLE test_m');
        $this->addSql('DROP TABLE test_n');
        $this->addSql('DROP TABLE test_n_test_m');
    }
}
