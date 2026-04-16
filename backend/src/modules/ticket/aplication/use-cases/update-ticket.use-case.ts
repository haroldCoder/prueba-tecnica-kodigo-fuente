import { BadRequestException, NotFoundException } from '@nestjs/common';
import { TicketEntity } from '@modules-ticket/domain/entities';
import { TicketRepository } from '@modules-ticket/domain/repositories';
import { StatusEnum } from '@modules-ticket/domain/enums';

export class UpdateTicketUseCase {
    constructor(private readonly ticketRepository: TicketRepository) { }

    async execute(ticket: TicketEntity): Promise<number> {
        const existingTicket = await this.ticketRepository.findById(ticket.id);
        if (!existingTicket) {
            throw new NotFoundException(`Ticket with id "${ticket.id}" not found`);
        }

        if (existingTicket.status === StatusEnum.CLOSED) {
            throw new BadRequestException('Ticket is closed');
        }

        return this.ticketRepository.update(ticket);
    }
}