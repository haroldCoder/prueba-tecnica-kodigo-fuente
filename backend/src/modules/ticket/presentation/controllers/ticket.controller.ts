import {
    BadRequestException,
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    HttpStatus,
    InternalServerErrorException,
    NotFoundException,
    Param,
    Post,
    Put,
} from '@nestjs/common';
import {
    CreateTicketUseCase,
    DeleteTicketUseCase,
    FindAllTicketsUseCase,
    FindTicketUseCase,
    UpdateTicketUseCase,
} from '@modules-ticket/aplication/use-cases';
import { CreateTicketDto, UpdateTicketDto } from '../dtos';
import { CreateTicketEntity, TicketEntity } from '@modules-ticket/domain/entities';
import {
    ApiResponse,
} from '@shared/domain/entities';
import {
    errorResponse,
    successResponse,
} from '@shared/domain/constants';

/**
 * @description Controlador HTTP para el módulo de tickets.
 * Capa de presentación — convierte peticiones HTTP en llamadas a use cases
 * y devuelve respuestas estructuradas.
 */
@Controller('tickets')
export class TicketController {
    constructor(
        private readonly createTicketUseCase: CreateTicketUseCase,
        private readonly findAllTicketsUseCase: FindAllTicketsUseCase,
        private readonly findTicketUseCase: FindTicketUseCase,
        private readonly updateTicketUseCase: UpdateTicketUseCase,
        private readonly deleteTicketUseCase: DeleteTicketUseCase,
    ) { }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(
        @Body() dto: CreateTicketDto,
    ): Promise<ApiResponse<{ id: number }>> {
        if (!dto.client_id) throw new BadRequestException('Client ID is required');
        if (!dto.title) throw new BadRequestException('Title is required');
        if (!dto.priority) throw new BadRequestException('Priority is required');

        try {
            const id = await this.createTicketUseCase.execute(dto);
            return successResponse({ id }, 'Ticket created successfully');
        } catch (error) {
            if (error instanceof InternalServerErrorException) throw error;
            throw new InternalServerErrorException(errorResponse('Failed to create ticket'));
        }
    }

    @Get()
    async findAll(): Promise<ApiResponse<TicketEntity[]>> {
        try {
            const tickets = await this.findAllTicketsUseCase.execute();
            return successResponse(tickets, 'Tickets retrieved successfully');
        } catch (error) {
            if (error instanceof InternalServerErrorException) throw error;
            throw new InternalServerErrorException(errorResponse('Failed to retrieve tickets'));
        }
    }

    @Get(':id')
    async findById(
        @Param('id') id: number,
    ): Promise<ApiResponse<TicketEntity>> {
        try {
            const ticket = await this.findTicketUseCase.execute(id);
            if (!ticket) throw new NotFoundException(`Ticket with id "${id}" not found`);
            return successResponse(ticket, 'Ticket retrieved successfully');
        } catch (error) {
            if (error instanceof NotFoundException) throw error;
            if (error instanceof InternalServerErrorException) throw error;
            throw new InternalServerErrorException(errorResponse('Failed to retrieve ticket'));
        }
    }

    @Put(':id')
    async update(
        @Param('id') id: number,
        @Body() dto: UpdateTicketDto,
    ): Promise<ApiResponse<{ id: number }>> {
        try {
            const updatedId = await this.updateTicketUseCase.execute({
                ...dto,
                id,
            } as TicketEntity);
            return successResponse({ id: updatedId }, 'Ticket updated successfully');
        } catch (error) {
            if (error instanceof NotFoundException) throw error;
            if (error instanceof BadRequestException) throw error;
            if (error instanceof InternalServerErrorException) throw error;
            throw new InternalServerErrorException(errorResponse('Failed to update ticket'));
        }
    }

    @Delete(':id')
    @HttpCode(HttpStatus.OK)
    async delete(@Param('id') id: number): Promise<ApiResponse<null>> {
        try {
            await this.deleteTicketUseCase.execute(id);
            return successResponse(null, 'Ticket deleted successfully');
        } catch (error) {
            if (error instanceof NotFoundException) throw error;
            if (error instanceof InternalServerErrorException) throw error;
            throw new InternalServerErrorException(errorResponse('Failed to delete ticket'));
        }
    }
}