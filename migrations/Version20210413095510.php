<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210413095510 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE action CHANGE rule_id rule_id INT DEFAULT NULL, CHANGE attributes attributes JSON NOT NULL');
        $this->addSql('ALTER TABLE document ADD classification VARCHAR(255) NULL');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE action CHANGE rule_id rule_id INT NOT NULL, CHANGE attributes attributes JSON DEFAULT NULL');
        $this->addSql('ALTER TABLE document DROP classification');
    }
}
