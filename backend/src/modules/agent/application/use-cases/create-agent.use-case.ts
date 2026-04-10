import { AgentRepository } from "@modules-agent/domain/repositories";
import { CreateAgentEntity } from "@modules-agent/domain/entities";

export class CreateAgentUseCase {
    constructor(
        private readonly agentRepository: AgentRepository
    ) { }
    execute(agent: CreateAgentEntity): Promise<number> {
        return this.agentRepository.create(agent);
    }
}
