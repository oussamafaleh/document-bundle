<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210406130031 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE item DROP FOREIGN KEY FK_1F1B251E727ACA70');
        $this->addSql('ALTER TABLE item ADD CONSTRAINT FK_1F1B251E727ACA70 FOREIGN KEY (parent_id) REFERENCES folder (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE user ADD email VARCHAR(255) NOT NULL');
        $this->addSql('ALTER TABLE user_item_property DROP FOREIGN KEY FK_9717945126F525E');
        $this->addSql('ALTER TABLE user_item_property DROP FOREIGN KEY FK_9717945A76ED395');
        $this->addSql('ALTER TABLE user_item_property ADD CONSTRAINT FK_9717945126F525E FOREIGN KEY (item_id) REFERENCES item (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE user_item_property ADD CONSTRAINT FK_9717945A76ED395 FOREIGN KEY (user_id) REFERENCES user (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE item DROP FOREIGN KEY FK_1F1B251E727ACA70');
        $this->addSql('ALTER TABLE item ADD CONSTRAINT FK_1F1B251E727ACA70 FOREIGN KEY (parent_id) REFERENCES folder (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('ALTER TABLE user DROP email');
        $this->addSql('ALTER TABLE user_item_property DROP FOREIGN KEY FK_9717945A76ED395');
        $this->addSql('ALTER TABLE user_item_property DROP FOREIGN KEY FK_9717945126F525E');
        $this->addSql('ALTER TABLE user_item_property ADD CONSTRAINT FK_9717945A76ED395 FOREIGN KEY (user_id) REFERENCES user (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('ALTER TABLE user_item_property ADD CONSTRAINT FK_9717945126F525E FOREIGN KEY (item_id) REFERENCES item (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
    }
}
