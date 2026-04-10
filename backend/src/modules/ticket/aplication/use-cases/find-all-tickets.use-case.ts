import { TicketEntity } from '@modules-ticket/domain/entities';
import { TicketRepository } from '@modules-ticket/domain/repositories';

export class FindAllTicketsUseCase {
    constructor(private readonly ticketRepository: TicketRepository) { }

    async execute(): Promise<TicketEntity[]> {
        return this.ticketRepository.findAll();
    }
}