import { AgentEntity, CreateAgentEntity } from "@modules-agent/domain/entities";

export interface AgentRepository {
    create(agent: CreateAgentEntity): Promise<number>;
    findById(id: number): Promise<AgentEntity | null>;
}
