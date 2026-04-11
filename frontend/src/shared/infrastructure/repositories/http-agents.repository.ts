import { API_URL } from "@/shared/config/api-url";
import type { AgentModel, CreateAgentModel } from "@/shared/domain/models";
import type { AgentsRepository } from "@/shared/domain/respositories";

export class HttpAgentsRepository implements AgentsRepository {
    async getAgents(): Promise<AgentModel[]> {
        const response = await fetch(`${API_URL}/agents`);
        if (!response.ok) throw new Error("Error fetching agents");
        const data = await response.json();
        return data.data;
    }

    async getAgentById(id: number): Promise<AgentModel> {
        const response = await fetch(`${API_URL}/agents/${id}`);
        if (!response.ok) throw new Error("Error fetching agent");
        const data = await response.json();
        return data.data;
    }

    async createAgent(agent: CreateAgentModel): Promise<AgentModel> {
        const response = await fetch(`${API_URL}/agents`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(agent),
        });
        if (!response.ok) throw new Error("Error creating agent");
        const data = await response.json();
        return data.data;
    }
}
