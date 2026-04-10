import { CreateTicketEntity, TicketEntity, UpdateTicketEntity } from "@modules-ticket/domain/entities";

/**
 * @description Interface que define el contrato para el repositorio de tickets.
 
 */

export interface TicketRepository {
    findAll(): Promise<TicketEntity[]>;
    findById(id: number): Promise<TicketEntity | null>;
    create(ticket: CreateTicketEntity): Promise<number>;
    update(ticket: UpdateTicketEntity): Promise<number>;
    delete(id: number): Promise<void>;
}