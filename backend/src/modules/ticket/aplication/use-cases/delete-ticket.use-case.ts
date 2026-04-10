import { TicketRepository } from '@modules-ticket/domain/repositories';

export class DeleteTicketUseCase {
    constructor(private readonly ticketRepository: TicketRepository) { }

    async execute(id: string): Promise<void> {
        return this.ticketRepository.delete(id);
    }
}