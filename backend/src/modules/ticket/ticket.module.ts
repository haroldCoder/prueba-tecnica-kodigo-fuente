import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// Infrastructure
import { TicketTypeormEntity } from '@modules-ticket/infrastructure/entities/ticket-typeorm.entity';
import { TicketService } from '@modules-ticket/infrastructure/repositories';

// Presentation
import { TicketController } from '@modules-ticket/presentation/controllers';

// Application (Use Cases)
import {
    CreateTicketUseCase,
    FindAllTicketsUseCase,
    FindTicketUseCase,
    UpdateTicketUseCase,
    DeleteTicketUseCase,
} from './aplication/use-cases';

@Module({
    imports: [
        TypeOrmModule.forFeature([TicketTypeormEntity]),
    ],
    controllers: [TicketController],
    providers: [
        TicketService,

        // Caso de uso con sus respectivas dependencias
        {
            provide: CreateTicketUseCase,
            useFactory: (repository: TicketService) => new CreateTicketUseCase(repository),
            inject: [TicketService],
        },
        {
            provide: FindAllTicketsUseCase,
            useFactory: (repository: TicketService) => new FindAllTicketsUseCase(repository),
            inject: [TicketService],
        },
        {
            provide: FindTicketUseCase,
            useFactory: (repository: TicketService) => new FindTicketUseCase(repository),
            inject: [TicketService],
        },
        {
            provide: UpdateTicketUseCase,
            useFactory: (repository: TicketService) => new UpdateTicketUseCase(repository),
            inject: [TicketService],
        },
        {
            provide: DeleteTicketUseCase,
            useFactory: (repository: TicketService) => new DeleteTicketUseCase(repository),
            inject: [TicketService],
        },
    ],
    exports: [
        // Exportando casos de uso en caso de que otros módulos los necesiten
        CreateTicketUseCase,
        FindAllTicketsUseCase,
        FindTicketUseCase,
        UpdateTicketUseCase,
        DeleteTicketUseCase,
    ],
})
export class TicketModule { }
