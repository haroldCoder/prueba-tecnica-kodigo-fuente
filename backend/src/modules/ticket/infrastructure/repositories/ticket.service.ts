import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTicketEntity, TicketEntity } from '@modules-ticket/domain/entities';
import { TicketRepository } from '@modules-ticket/domain/repositories';
import { TicketTypeormEntity } from '../entities/ticket-typeorm.entity';
import { StatusEnum } from '../../domain/enums';

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
            const result = await this.ticketRepo.find({
                relations: ['client', 'agent']
            });
            return result as TicketEntity[];
        } catch {
            throw new InternalServerErrorException('Failed to retrieve tickets');
        }
    }

    async findById(id: number): Promise<TicketEntity | null> {
        try {
            const result = await this.ticketRepo.findOne({
                where: { id },
                relations: ['client', 'agent']
            });
            if (!result) throw new NotFoundException(`Ticket with id "${id}" not found`);
            return result as TicketEntity;
        } catch (error) {
            if (error instanceof NotFoundException) throw error;
            throw new InternalServerErrorException('Failed to retrieve ticket');
        }
    }

    async create(ticket: CreateTicketEntity): Promise<number> {
        const entity = this.ticketRepo.create({
            ...ticket,
            clientId: ticket.client_id,
            agentId: ticket.agent_id ?? null,
        });
        const result = await this.ticketRepo.save(entity);
        return result.id;
    }

    async update(ticket: TicketEntity): Promise<number> {
        const exists = await this.ticketRepo.findOneBy({ id: ticket.id });
        if (!exists) throw new NotFoundException(`Ticket with id "${ticket.id}" not found`);

        if (exists.status === StatusEnum.CLOSED) throw new BadRequestException('Ticket is closed');
        await this.ticketRepo.update(ticket.id, ticket);
        return ticket.id;
    }

    async delete(id: number): Promise<void> {
        const exists = await this.ticketRepo.findOneBy({ id });
        if (!exists) throw new NotFoundException(`Ticket with id "${id}" not found`);
        await this.ticketRepo.delete(id);
    }
}