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
    create(client: CreateClientEntity): Promise<number> {
        const clientEntity = this.clientRepo.create(client);
        return this.clientRepo.save(clientEntity).then(client => client.id);
    }
    findById(id: number): Promise<ClientEntity | null> {
        return this.clientRepo.findOne({ where: { id } });
    }
}