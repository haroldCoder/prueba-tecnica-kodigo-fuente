import { CreateTicketEntity } from '@modules-ticket/domain/entities';
import { TicketRepository } from '@modules-ticket/domain/repositories';

export class CreateTicketUseCase {
    constructor(private readonly ticketRepository: TicketRepository) { }

    async execute(ticket: CreateTicketEntity): Promise<string> {
        return this.ticketRepository.create(ticket);
    }
}