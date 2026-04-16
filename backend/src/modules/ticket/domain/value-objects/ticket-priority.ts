export class TicketPriority {
    constructor(public readonly value: string) { }

    static create(value: string): TicketPriority {
        if (!value) throw new Error('Ticket priority is required');
        return new TicketPriority(value);
    }

    static calculePriority(priority: string): number {
        const priorityDictionary: Record<string, number> = {
            'low': 1,
            'medium': 2,
            'high': 3,
        };
        return priorityDictionary[priority] || 2;
    }
}