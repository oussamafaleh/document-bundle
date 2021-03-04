<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210304135426 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE user_item_property (id INT AUTO_INCREMENT NOT NULL, id_user_id INT DEFAULT NULL, id_item_id INT DEFAULT NULL, role VARCHAR(255) NOT NULL, accepted TINYINT(1) NOT NULL, is_tagged TINYINT(1) NOT NULL, UNIQUE INDEX UNIQ_971794579F37AE5 (id_user_id), UNIQUE INDEX UNIQ_9717945CCF2FB2E (id_item_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE user_item_property ADD CONSTRAINT FK_971794579F37AE5 FOREIGN KEY (id_user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE user_item_property ADD CONSTRAINT FK_9717945CCF2FB2E FOREIGN KEY (id_item_id) REFERENCES item (id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE user_item_property');
    }
}
