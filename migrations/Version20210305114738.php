<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210305114738 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE folder_folder');
        $this->addSql('ALTER TABLE item DROP FOREIGN KEY FK_1F1B251E162CB942');
        $this->addSql('ALTER TABLE item DROP FOREIGN KEY FK_1F1B251EC33F7837');
        $this->addSql('DROP INDEX IDX_1F1B251E162CB942 ON item');
        $this->addSql('DROP INDEX IDX_1F1B251EC33F7837 ON item');
        $this->addSql('ALTER TABLE item DROP folder_id, DROP document_id');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE folder_folder (folder_source INT NOT NULL, folder_target INT NOT NULL, INDEX IDX_91A73BBA3D7558A (folder_target), INDEX IDX_91A73BBBA320505 (folder_source), PRIMARY KEY(folder_source, folder_target)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE folder_folder ADD CONSTRAINT FK_91A73BBBA320505 FOREIGN KEY (folder_source) REFERENCES item (id) ON UPDATE NO ACTION ON DELETE CASCADE');
        $this->addSql('ALTER TABLE folder_folder ADD CONSTRAINT FK_91A73BBA3D7558A FOREIGN KEY (folder_target) REFERENCES item (id) ON UPDATE NO ACTION ON DELETE CASCADE');
        $this->addSql('ALTER TABLE item ADD folder_id INT DEFAULT NULL, ADD document_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE item ADD CONSTRAINT FK_1F1B251E162CB942 FOREIGN KEY (folder_id) REFERENCES item (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('ALTER TABLE item ADD CONSTRAINT FK_1F1B251EC33F7837 FOREIGN KEY (document_id) REFERENCES item (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('CREATE INDEX IDX_1F1B251E162CB942 ON item (folder_id)');
        $this->addSql('CREATE INDEX IDX_1F1B251EC33F7837 ON item (document_id)');
    }
}
