import { AgentRepository } from "@modules-agent/domain/repositories";
import { AgentEntity } from "@modules-agent/domain/entities";

export class FindAllAgentsUseCase {
    constructor(private readonly agentRepository: AgentRepository) { }

    async execute(): Promise<AgentEntity[]> {
        return this.agentRepository.findAll();
    }
}
