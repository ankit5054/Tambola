import { MigrationInterface, QueryRunner } from "typeorm";

export class Mig1705829102784 implements MigrationInterface {
    name = 'Mig1705829102784'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "email" character varying(100) NOT NULL, "password" character varying(100) NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tickets" ("identifier" SERIAL NOT NULL, "ticket" jsonb NOT NULL, CONSTRAINT "PK_b0e622a927a982f1f10df2fc7b7" PRIMARY KEY ("identifier"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "tickets"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
