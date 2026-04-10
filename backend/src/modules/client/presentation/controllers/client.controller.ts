import { errorResponse, successResponse } from "@/shared/domain/constants";
import { ApiResponse } from "@/shared/domain/entities";
import { CreateClientUseCase, FindClientUseCase } from "@modules-client/application/use-cases";
import { ClientEntity } from "@modules-client/domain/entities";
import { CreateClientDto } from "@modules-client/presentation/dtos";
import { Body, Controller, Get, InternalServerErrorException, NotFoundException, Param, Post } from "@nestjs/common";

@Controller('client')
export class ClientController {
    constructor(
        private readonly createClientUseCase: CreateClientUseCase,
        private readonly findClientUseCase: FindClientUseCase
    ) { }
    @Post()
    async create(@Body() client: CreateClientDto): Promise<ApiResponse<number>> {
        try {
            return successResponse(await this.createClientUseCase.execute(client));
        } catch (error) {
            if (error instanceof NotFoundException) throw error;
            if (error instanceof InternalServerErrorException) throw error;
            throw new InternalServerErrorException(errorResponse('Failed to create client'));
        }
    }
    @Get(':id')
    async findById(@Param('id') id: number): Promise<ApiResponse<ClientEntity | null>> {
        try {
            return successResponse(await this.findClientUseCase.execute(id));
        } catch (error) {
            if (error instanceof NotFoundException) throw error;
            if (error instanceof InternalServerErrorException) throw error;
            throw new InternalServerErrorException(errorResponse('Failed to retrieve client'));
        }
    }
}