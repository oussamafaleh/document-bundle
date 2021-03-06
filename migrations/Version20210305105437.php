<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210305105437 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE item (id INT AUTO_INCREMENT NOT NULL, folder_id INT DEFAULT NULL, document_id INT DEFAULT NULL, code VARCHAR(255) NOT NULL, label VARCHAR(255) NOT NULL, create_at DATETIME NOT NULL, update_at DATETIME NOT NULL, path VARCHAR(255) NOT NULL, icon VARCHAR(255) NOT NULL, discr VARCHAR(255) NOT NULL, extension VARCHAR(255) DEFAULT NULL, size VARCHAR(255) DEFAULT NULL, INDEX IDX_1F1B251E162CB942 (folder_id), INDEX IDX_1F1B251EC33F7837 (document_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE folder_folder (folder_source INT NOT NULL, folder_target INT NOT NULL, INDEX IDX_91A73BBBA320505 (folder_source), INDEX IDX_91A73BBA3D7558A (folder_target), PRIMARY KEY(folder_source, folder_target)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user (id INT AUTO_INCREMENT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user_item_property (id INT AUTO_INCREMENT NOT NULL, id_user_id INT DEFAULT NULL, id_item_id INT DEFAULT NULL, roles JSON NOT NULL, accepted TINYINT(1) NOT NULL, is_tagged TINYINT(1) NOT NULL, UNIQUE INDEX UNIQ_971794579F37AE5 (id_user_id), UNIQUE INDEX UNIQ_9717945CCF2FB2E (id_item_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE item ADD CONSTRAINT FK_1F1B251E162CB942 FOREIGN KEY (folder_id) REFERENCES item (id)');
        $this->addSql('ALTER TABLE item ADD CONSTRAINT FK_1F1B251EC33F7837 FOREIGN KEY (document_id) REFERENCES item (id)');
        $this->addSql('ALTER TABLE folder_folder ADD CONSTRAINT FK_91A73BBBA320505 FOREIGN KEY (folder_source) REFERENCES item (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE folder_folder ADD CONSTRAINT FK_91A73BBA3D7558A FOREIGN KEY (folder_target) REFERENCES item (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE user_item_property ADD CONSTRAINT FK_971794579F37AE5 FOREIGN KEY (id_user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE user_item_property ADD CONSTRAINT FK_9717945CCF2FB2E FOREIGN KEY (id_item_id) REFERENCES item (id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE item DROP FOREIGN KEY FK_1F1B251E162CB942');
        $this->addSql('ALTER TABLE item DROP FOREIGN KEY FK_1F1B251EC33F7837');
        $this->addSql('ALTER TABLE folder_folder DROP FOREIGN KEY FK_91A73BBBA320505');
        $this->addSql('ALTER TABLE folder_folder DROP FOREIGN KEY FK_91A73BBA3D7558A');
        $this->addSql('ALTER TABLE user_item_property DROP FOREIGN KEY FK_9717945CCF2FB2E');
        $this->addSql('ALTER TABLE user_item_property DROP FOREIGN KEY FK_971794579F37AE5');
        $this->addSql('DROP TABLE item');
        $this->addSql('DROP TABLE folder_folder');
        $this->addSql('DROP TABLE user');
        $this->addSql('DROP TABLE user_item_property');
    }
}
