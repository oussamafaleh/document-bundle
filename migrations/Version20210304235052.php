<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210304235052 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SEQUENCE item_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE user_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE user_item_property_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE TABLE item (id INT NOT NULL, folder_id INT DEFAULT NULL, document_id INT DEFAULT NULL, code VARCHAR(255) NOT NULL, label VARCHAR(255) NOT NULL, create_at TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL, update_at TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL, path VARCHAR(255) NOT NULL, icon VARCHAR(255) NOT NULL, discr VARCHAR(255) NOT NULL, extension VARCHAR(255) DEFAULT NULL, size VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX IDX_1F1B251E162CB942 ON item (folder_id)');
        $this->addSql('CREATE INDEX IDX_1F1B251EC33F7837 ON item (document_id)');
        $this->addSql('CREATE TABLE folder_folder (folder_source INT NOT NULL, folder_target INT NOT NULL, PRIMARY KEY(folder_source, folder_target))');
        $this->addSql('CREATE INDEX IDX_91A73BBBA320505 ON folder_folder (folder_source)');
        $this->addSql('CREATE INDEX IDX_91A73BBA3D7558A ON folder_folder (folder_target)');
        $this->addSql('CREATE TABLE "user" (id INT NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE TABLE user_item_property (id INT NOT NULL, id_user_id INT DEFAULT NULL, id_item_id INT DEFAULT NULL, role VARCHAR(255) NOT NULL, accepted BOOLEAN NOT NULL, is_tagged BOOLEAN NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_971794579F37AE5 ON user_item_property (id_user_id)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_9717945CCF2FB2E ON user_item_property (id_item_id)');
        $this->addSql('ALTER TABLE item ADD CONSTRAINT FK_1F1B251E162CB942 FOREIGN KEY (folder_id) REFERENCES item (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE item ADD CONSTRAINT FK_1F1B251EC33F7837 FOREIGN KEY (document_id) REFERENCES item (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE folder_folder ADD CONSTRAINT FK_91A73BBBA320505 FOREIGN KEY (folder_source) REFERENCES item (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE folder_folder ADD CONSTRAINT FK_91A73BBA3D7558A FOREIGN KEY (folder_target) REFERENCES item (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE user_item_property ADD CONSTRAINT FK_971794579F37AE5 FOREIGN KEY (id_user_id) REFERENCES "user" (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE user_item_property ADD CONSTRAINT FK_9717945CCF2FB2E FOREIGN KEY (id_item_id) REFERENCES item (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE demo ALTER name TYPE VARCHAR(255)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE item DROP CONSTRAINT FK_1F1B251E162CB942');
        $this->addSql('ALTER TABLE item DROP CONSTRAINT FK_1F1B251EC33F7837');
        $this->addSql('ALTER TABLE folder_folder DROP CONSTRAINT FK_91A73BBBA320505');
        $this->addSql('ALTER TABLE folder_folder DROP CONSTRAINT FK_91A73BBA3D7558A');
        $this->addSql('ALTER TABLE user_item_property DROP CONSTRAINT FK_9717945CCF2FB2E');
        $this->addSql('ALTER TABLE user_item_property DROP CONSTRAINT FK_971794579F37AE5');
        $this->addSql('DROP SEQUENCE item_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE user_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE user_item_property_id_seq CASCADE');
        $this->addSql('DROP TABLE item');
        $this->addSql('DROP TABLE folder_folder');
        $this->addSql('DROP TABLE "user"');
        $this->addSql('DROP TABLE user_item_property');
        $this->addSql('ALTER TABLE demo ALTER name TYPE VARCHAR(50)');
    }
}
