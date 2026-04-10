import { TicketEntity } from '@modules-ticket/domain/entities';
import { TicketRepository } from '@modules-ticket/domain/repositories';

export class UpdateTicketUseCase {
    constructor(private readonly ticketRepository: TicketRepository) { }

    async execute(ticket: TicketEntity): Promise<number> {
        return this.ticketRepository.update(ticket);
    }
}