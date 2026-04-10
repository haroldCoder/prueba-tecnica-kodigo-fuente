import { AgentTypeormEntity } from '@modules-agent/infrastructure/entities';
import { ClientTypeormEntity } from '@modules-client/infrastructure/enities';
import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';

/**
 * @description Entidad que representa el modelo de ticket en la base de datos.
 * Se pone en la carpeta infrastructure porque es una entidad externa, de typeorm.
 */

@Entity('ticket')
export class TicketTypeormEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255 })
    title: string;

    @Column({ type: 'text', nullable: true })
    description: string;

    @Column({ type: 'varchar', length: 50, default: 'open', nullable: true })
    status: string;

    @Column({ type: 'varchar', length: 50, default: 'low' })
    priority: string;

    @ManyToOne(() => ClientTypeormEntity, (client) => client.tickets)
    @JoinColumn({ name: 'client_id' })
    client: ClientTypeormEntity;

    @ManyToOne(() => AgentTypeormEntity, (agent) => agent.tickets)
    @JoinColumn({ name: 'agent_id' })
    agent: AgentTypeormEntity;

    @Column({ name: 'client_id' })
    clientId: number;

    @Column({ name: 'agent_id', nullable: true })
    agentId: number;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;
}
