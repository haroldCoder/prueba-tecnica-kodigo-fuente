import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTicketEntity, TicketEntity } from '@modules-ticket/domain/entities';
import { TicketRepository } from '@modules-ticket/domain/repositories';
import { TicketTypeormEntity } from '../entities/ticket-typeorm.entity';

/**
 * @description Implementación del repositorio de tickets usando TypeORM.
 * Capa de infraestructura — adaptador secundario en arquitectura hexagonal.
 */
@Injectable()
export class TicketService implements TicketRepository {
    constructor(
        @InjectRepository(TicketTypeormEntity)
        private readonly ticketRepo: Repository<TicketTypeormEntity>,
    ) { }

    async findAll(): Promise<TicketEntity[]> {
        try {
            const result = await this.ticketRepo.find();
            return result as TicketEntity[];
        } catch {
            throw new InternalServerErrorException('Failed to retrieve tickets');
        }
    }

    async findById(id: number): Promise<TicketEntity | null> {
        try {
            const result = await this.ticketRepo.findOneBy({ id });
            if (!result) throw new NotFoundException(`Ticket with id "${id}" not found`);
            return result as TicketEntity;
        } catch (error) {
            if (error instanceof NotFoundException) throw error;
            throw new InternalServerErrorException('Failed to retrieve ticket');
        }
    }

    async create(ticket: CreateTicketEntity): Promise<number> {
        try {
            const entity = this.ticketRepo.create(ticket);
            const result = await this.ticketRepo.save(entity);
            return result.id;
        } catch {
            throw new InternalServerErrorException('Failed to create ticket');
        }
    }

    async update(ticket: TicketEntity): Promise<number> {
        try {
            const exists = await this.ticketRepo.findOneBy({ id: ticket.id });
            if (!exists) throw new NotFoundException(`Ticket with id "${ticket.id}" not found`);
            await this.ticketRepo.update(ticket.id, ticket);
            return ticket.id;
        } catch (error) {
            if (error instanceof NotFoundException) throw error;
            throw new InternalServerErrorException('Failed to update ticket');
        }
    }

    async delete(id: number): Promise<void> {
        try {
            const exists = await this.ticketRepo.findOneBy({ id });
            if (!exists) throw new NotFoundException(`Ticket with id "${id}" not found`);
            await this.ticketRepo.delete(id);
        } catch (error) {
            if (error instanceof NotFoundException) throw error;
            throw new InternalServerErrorException('Failed to delete ticket');
        }
    }
}