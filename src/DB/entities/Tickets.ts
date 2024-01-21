import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Tickets {
    @PrimaryGeneratedColumn()
    identifier: number | undefined

    @Column({name:"ticket", type:"jsonb", nullable:false})
    ticket: Object |undefined

}