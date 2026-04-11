import { Module } from "@nestjs/common";
import { AgentController } from "@modules-agent/presentation/controllers";
import { AgentService } from "@modules-agent/infrastructure/repositories";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AgentTypeormEntity } from "@modules-agent/infrastructure/entities";
import { CreateAgentUseCase, FindAgentUseCase, FindAllAgentsUseCase } from "@modules-agent/application/use-cases";

@Module({
    imports: [
        TypeOrmModule.forFeature([AgentTypeormEntity])
    ],
    controllers: [AgentController],
    providers: [
        AgentService,
        {
            provide: CreateAgentUseCase,
            useFactory: (agentRepository: AgentService) => new CreateAgentUseCase(agentRepository),
            inject: [AgentService]
        },
        {
            provide: FindAgentUseCase,
            useFactory: (agentRepository: AgentService) => new FindAgentUseCase(agentRepository),
            inject: [AgentService]
        },
        {
            provide: FindAllAgentsUseCase,
            useFactory: (agentRepository: AgentService) => new FindAllAgentsUseCase(agentRepository),
            inject: [AgentService]
        }
    ],
    exports: [AgentService]
})
export class AgentModule { }
