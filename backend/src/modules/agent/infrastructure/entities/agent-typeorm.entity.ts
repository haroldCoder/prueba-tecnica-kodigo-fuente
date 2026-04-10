import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('agent')
export class AgentTypeormEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;
}
