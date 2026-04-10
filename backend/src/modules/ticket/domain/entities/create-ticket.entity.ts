export interface CreateTicketEntity {
    title: string;
    description: string;
    status: string;
    priority: string;
    user_id: number;
    agent_id: number;
}