import type { AgentModel, CreateAgentModel } from "@/shared/domain/models";

export interface AgentsRepository {
    getAgents(): Promise<AgentModel[]>;
    getAgentById(id: number): Promise<AgentModel>;
    createAgent(agent: CreateAgentModel): Promise<AgentModel>;
}
