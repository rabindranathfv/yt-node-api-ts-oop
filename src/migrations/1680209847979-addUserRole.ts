import { MigrationInterface, QueryRunner } from 'typeorm';

export class addUserRole1680209847979 implements MigrationInterface {
  name = 'addUserRole1680209847979';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`user\` ADD \`role\` enum ('USER', 'ADMIN') NOT NULL`);
    await queryRunner.query(`ALTER TABLE \`testimonial\` DROP COLUMN \`is_content_usage_on_website_granted\``);
    await queryRunner.query(`ALTER TABLE \`testimonial\` ADD \`is_content_usage_on_website_granted\` int NOT NULL`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`testimonial\` DROP COLUMN \`is_content_usage_on_website_granted\``);
    await queryRunner.query(`ALTER TABLE \`testimonial\` ADD \`is_content_usage_on_website_granted\` tinyint NOT NULL`);
    await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`role\``);
  }
}
