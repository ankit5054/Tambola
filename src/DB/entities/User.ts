import { Entity, PrimaryGeneratedColumn, Column, Generated } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column({ name: "email", type: "varchar", length: 100, nullable: false })
  email!: string;

  @Column({ name: "password", type: "varchar", length: 1000, nullable: false })
  password!: string;

  @PrimaryGeneratedColumn("uuid", { name: "uuid" })
  userId!: string;
}
