import { MigrationInterface, QueryRunner } from 'typeorm';

export class initialMigration1681853011577 implements MigrationInterface {
  name = 'initialMigration1681853011577';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`testimonial_usage\` (\`id\` int NOT NULL AUTO_INCREMENT, \`website_url\` varchar(255) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`update_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`testimonial_id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`testimonial\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`content\` varchar(255) NOT NULL, \`is_name_usage_on_website_granted\` int NOT NULL, \`is_name_usage_on_social_media_granted\` int NOT NULL, \`is_content_usage_on_website_granted\` int NOT NULL, \`is_content_usage_on_social_media_granted\` int NOT NULL, \`is_logo_usage_on_website_granted\` int NOT NULL, \`is_logo_usage_on_social_media_granted\` int NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`update_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`customer_id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`last_name\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`gender\` varchar(255) NOT NULL, \`role\` enum ('USER', 'ADMIN') NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`update_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`customer\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`update_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`user_id\` int NULL, UNIQUE INDEX \`REL_5d1f609371a285123294fddcf3\` (\`user_id\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`testimonial_usage\` ADD CONSTRAINT \`FK_4c6f4725fe82ad9961dfb25a273\` FOREIGN KEY (\`testimonial_id\`) REFERENCES \`testimonial\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`testimonial\` ADD CONSTRAINT \`FK_1de1ebd012e279b35526ac8c15d\` FOREIGN KEY (\`customer_id\`) REFERENCES \`customer\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`customer\` ADD CONSTRAINT \`FK_5d1f609371a285123294fddcf3a\` FOREIGN KEY (\`user_id\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`customer\` DROP FOREIGN KEY \`FK_5d1f609371a285123294fddcf3a\``);
    await queryRunner.query(`ALTER TABLE \`testimonial\` DROP FOREIGN KEY \`FK_1de1ebd012e279b35526ac8c15d\``);
    await queryRunner.query(`ALTER TABLE \`testimonial_usage\` DROP FOREIGN KEY \`FK_4c6f4725fe82ad9961dfb25a273\``);
    await queryRunner.query(`DROP INDEX \`REL_5d1f609371a285123294fddcf3\` ON \`customer\``);
    await queryRunner.query(`DROP TABLE \`customer\``);
    await queryRunner.query(`DROP INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` ON \`user\``);
    await queryRunner.query(`DROP TABLE \`user\``);
    await queryRunner.query(`DROP TABLE \`testimonial\``);
    await queryRunner.query(`DROP TABLE \`testimonial_usage\``);
  }
}
