import { errorResponse, successResponse } from "@/shared/domain/constants";
import { ApiResponse } from "@/shared/domain/entities";
import { CreateAgentUseCase, FindAgentUseCase, FindAllAgentsUseCase } from "@modules-agent/application/use-cases";
import { AgentEntity } from "@modules-agent/domain/entities";
import { CreateAgentDto } from "@modules-agent/presentation/dtos";
import { Body, Controller, Get, InternalServerErrorException, NotFoundException, Param, Post } from "@nestjs/common";

@Controller('agents')
export class AgentController {
    constructor(
        private readonly createAgentUseCase: CreateAgentUseCase,
        private readonly findAgentUseCase: FindAgentUseCase,
        private readonly findAllAgentsUseCase: FindAllAgentsUseCase
    ) { }
    @Get()
    async findAll(): Promise<ApiResponse<AgentEntity[]>> {
        try {
            const agents = await this.findAllAgentsUseCase.execute();
            return successResponse(agents, 'Agents retrieved successfully');
        } catch (error) {
            throw new InternalServerErrorException(errorResponse('Failed to retrieve agents'));
        }
    }
    @Post()
    async create(@Body() agent: CreateAgentDto): Promise<ApiResponse<{ id: number }>> {
        try {
            const id = await this.createAgentUseCase.execute(agent);
            if (!id) throw new InternalServerErrorException(errorResponse('Failed to create agent'));
            return successResponse({ id }, 'Agent created successfully');
        } catch (error) {
            if (error instanceof InternalServerErrorException) throw error;
            if (error instanceof NotFoundException) throw error;
            throw new InternalServerErrorException(errorResponse('Failed to create agent'));
        }
    }
    @Get(':id')
    async findById(@Param('id') id: number): Promise<ApiResponse<AgentEntity | null>> {
        try {
            const agent = await this.findAgentUseCase.execute(id);
            if (!agent) throw new NotFoundException(`Agent with id "${id}" not found`);
            return successResponse(agent, 'Agent retrieved successfully');
        } catch (error) {
            if (error instanceof NotFoundException) throw error;
            if (error instanceof InternalServerErrorException) throw error;
            throw new InternalServerErrorException(errorResponse('Failed to retrieve agent'));
        }
    }
}
