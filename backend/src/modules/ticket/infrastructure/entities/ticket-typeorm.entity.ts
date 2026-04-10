import {
    Column,
    CreateDateColumn,
    Entity,
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

    @Column({ type: 'text' })
    description: string;

    @Column({ type: 'varchar', length: 50, default: 'open' })
    status: string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;
}
