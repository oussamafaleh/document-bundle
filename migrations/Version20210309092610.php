<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210309092610 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE document (id INT NOT NULL, extension VARCHAR(255) NOT NULL, size VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE folder (id INT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE item (id INT AUTO_INCREMENT NOT NULL, parent_id INT DEFAULT NULL, code VARCHAR(255) NOT NULL, label VARCHAR(255) NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, type VARCHAR(255) NOT NULL, INDEX IDX_1F1B251E727ACA70 (parent_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user (id INT AUTO_INCREMENT NOT NULL, code VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user_item_property (id INT AUTO_INCREMENT NOT NULL, id_user_id INT DEFAULT NULL, id_item_id INT DEFAULT NULL, roles JSON NOT NULL, is_tagged TINYINT(1) NOT NULL, UNIQUE INDEX UNIQ_971794579F37AE5 (id_user_id), UNIQUE INDEX UNIQ_9717945CCF2FB2E (id_item_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE document ADD CONSTRAINT FK_D8698A76BF396750 FOREIGN KEY (id) REFERENCES item (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE folder ADD CONSTRAINT FK_ECA209CDBF396750 FOREIGN KEY (id) REFERENCES item (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE item ADD CONSTRAINT FK_1F1B251E727ACA70 FOREIGN KEY (parent_id) REFERENCES folder (id)');
        $this->addSql('ALTER TABLE user_item_property ADD CONSTRAINT FK_971794579F37AE5 FOREIGN KEY (id_user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE user_item_property ADD CONSTRAINT FK_9717945CCF2FB2E FOREIGN KEY (id_item_id) REFERENCES item (id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE item DROP FOREIGN KEY FK_1F1B251E727ACA70');
        $this->addSql('ALTER TABLE document DROP FOREIGN KEY FK_D8698A76BF396750');
        $this->addSql('ALTER TABLE folder DROP FOREIGN KEY FK_ECA209CDBF396750');
        $this->addSql('ALTER TABLE user_item_property DROP FOREIGN KEY FK_9717945CCF2FB2E');
        $this->addSql('ALTER TABLE user_item_property DROP FOREIGN KEY FK_971794579F37AE5');
        $this->addSql('DROP TABLE document');
        $this->addSql('DROP TABLE folder');
        $this->addSql('DROP TABLE item');
        $this->addSql('DROP TABLE user');
        $this->addSql('DROP TABLE user_item_property');
    }
}
