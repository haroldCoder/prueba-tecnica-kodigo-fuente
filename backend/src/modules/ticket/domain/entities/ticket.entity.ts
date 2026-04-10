import { AgentTypeormEntity } from "@modules-agent/infrastructure/entities";
import { ClientTypeormEntity } from "@modules-client/infrastructure/enities";

export interface TicketEntity {
    id: number;
    title: string;
    description: string;
    status: string;
    priority: string;
    client: ClientTypeormEntity;
    agent: AgentTypeormEntity;
    createdAt: Date;
    updatedAt: Date;
}