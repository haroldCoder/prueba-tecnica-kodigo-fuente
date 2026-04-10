
import { Module } from "@nestjs/common";
import { ClientController } from "./presentation/controllers/client.controller";
import { ClientService } from "./infrastructure/repositories";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ClientTypeormEntity } from "@modules-client/infrastructure/enities";
import { CreateClientUseCase, FindClientUseCase } from "@modules-client/application/use-cases";

@Module({
    imports: [
        TypeOrmModule.forFeature([ClientTypeormEntity])
    ],
    controllers: [ClientController],
    providers: [
        ClientService,
        {
            provide: CreateClientUseCase,
            useFactory: (clientRepository: ClientService) => new CreateClientUseCase(clientRepository),
            inject: [ClientService]
        },
        {
            provide: FindClientUseCase,
            useFactory: (clientRepository: ClientService) => new FindClientUseCase(clientRepository),
            inject: [ClientService]
        }
    ],
    exports: [ClientService]
})
export class ClientModule { }