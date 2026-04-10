import { ClientRepository } from "@modules-client/domain/repositories";
import { ClientEntity, CreateClientEntity } from "@modules-client/domain/entities";
import { Repository } from "typeorm";
import { ClientTypeormEntity } from "../enities";
import { InjectRepository } from "@nestjs/typeorm";

export class ClientService implements ClientRepository {
    constructor(
        @InjectRepository(ClientTypeormEntity)
        private readonly clientRepo: Repository<ClientTypeormEntity>
    ) { }
    async create(client: CreateClientEntity): Promise<number> {
        const clientEntity = this.clientRepo.create(client);
        const clientSaved = await this.clientRepo.save(clientEntity);
        return clientSaved.id;
    }
    async findById(id: number): Promise<ClientEntity | null> {
        const client = await this.clientRepo.findOne({ where: { id } });
        if (!client) return null;
        return {
            id: client.id,
            name: client.name,
            email: client.email,
        };
    }
}