export interface TicketEntity {
    id: number;
    title: string;
    description: string;
    status: string;
    priority: string;
    user_id: number;
    agent_id: number;
    createdAt: Date;
    updatedAt: Date;
}