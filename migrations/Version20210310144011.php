<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210310144011 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE user_item_property DROP INDEX UNIQ_971794579F37AE5, ADD INDEX IDX_971794579F37AE5 (id_user_id)');
        $this->addSql('ALTER TABLE user_item_property DROP INDEX UNIQ_9717945CCF2FB2E, ADD INDEX IDX_9717945CCF2FB2E (id_item_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE user_item_property DROP INDEX IDX_971794579F37AE5, ADD UNIQUE INDEX UNIQ_971794579F37AE5 (id_user_id)');
        $this->addSql('ALTER TABLE user_item_property DROP INDEX IDX_9717945CCF2FB2E, ADD UNIQUE INDEX UNIQ_9717945CCF2FB2E (id_item_id)');
    }
}
