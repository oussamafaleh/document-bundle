<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210321103011 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE history ADD item_id INT DEFAULT NULL, ADD user VARCHAR(255) DEFAULT NULL, ADD message LONGTEXT DEFAULT NULL');
        $this->addSql('ALTER TABLE history ADD CONSTRAINT FK_27BA704B126F525E FOREIGN KEY (item_id) REFERENCES item (id)');
        $this->addSql('CREATE INDEX IDX_27BA704B126F525E ON history (item_id)');
        $this->addSql('ALTER TABLE history ADD created_at DATETIME NOT NULL');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE history DROP FOREIGN KEY FK_27BA704B126F525E');
        $this->addSql('DROP INDEX IDX_27BA704B126F525E ON history');
        $this->addSql('ALTER TABLE history DROP item_id, DROP user, DROP message');
        $this->addSql('ALTER TABLE history DROP created_at DATETIME NOT NULL');
    }
}
