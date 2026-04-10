import { AgentRepository } from "@modules-agent/domain/repositories";
import { AgentEntity } from "@modules-agent/domain/entities";

export class FindAgentUseCase {
    constructor(
        private readonly agentRepository: AgentRepository
    ) { }
    execute(id: number): Promise<AgentEntity | null> {
        return this.agentRepository.findById(id);
    }
}
