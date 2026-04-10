import { TicketEntity } from '@modules-ticket/domain/entities';
import { TicketRepository } from '@modules-ticket/domain/repositories';

export class FindTicketUseCase {
    constructor(private readonly ticketRepository: TicketRepository) { }

    async execute(id: string): Promise<TicketEntity | null> {
        return this.ticketRepository.findById(id);
    }
}