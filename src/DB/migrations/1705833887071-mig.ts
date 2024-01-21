import { MigrationInterface, QueryRunner } from "typeorm";

export class Mig1705833887071 implements MigrationInterface {
    name = 'Mig1705833887071'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "uuid" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "PK_cace4a159ff9f2512dd42373760"`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "PK_3a3aed0a19c7bfa39d07cc3ab91" PRIMARY KEY ("id", "uuid")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "PK_3a3aed0a19c7bfa39d07cc3ab91"`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "uuid"`);
    }

}
