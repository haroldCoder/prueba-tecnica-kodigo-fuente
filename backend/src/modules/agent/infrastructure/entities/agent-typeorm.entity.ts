import { TicketTypeormEntity } from "@/modules/ticket/infrastructure/entities/ticket-typeorm.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('agent')
export class AgentTypeormEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @OneToMany(() => TicketTypeormEntity, (ticket) => ticket.agent)
    tickets: TicketTypeormEntity[];
}
