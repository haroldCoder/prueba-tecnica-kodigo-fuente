import { AgentRepository } from "@modules-agent/domain/repositories";
import { AgentEntity, CreateAgentEntity } from "@modules-agent/domain/entities";
import { Repository } from "typeorm";
import { AgentTypeormEntity } from "@modules-agent/infrastructure/entities";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class AgentService implements AgentRepository {
    constructor(
        @InjectRepository(AgentTypeormEntity)
        private readonly agentRepo: Repository<AgentTypeormEntity>
    ) { }
    create(agent: CreateAgentEntity): Promise<number> {
        const agentEntity = this.agentRepo.create(agent);
        return this.agentRepo.save(agentEntity).then(agent => agent.id);
    }
    findById(id: number): Promise<AgentEntity | null> {
        return this.agentRepo.findOne({ where: { id } });
    }
    async findAll(): Promise<AgentEntity[]> {
        const agents: AgentEntity[] = await this.agentRepo.find();
        return agents.map(agent => {
            return {
                id: agent.id,
                name: agent.name,
                email: agent.email
            };
        });
    }
}
