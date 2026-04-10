import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('client')
export class ClientTypeormEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;
}
