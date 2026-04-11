import { ClientEntity } from "@modules-client/domain/entities";
import { ClientRepository } from "@modules-client/domain/repositories";

export class FindAllClientsUseCase {
    constructor(
        private readonly clientRepo: ClientRepository
    ) { }
    async execute(): Promise<ClientEntity[]> {
        return await this.clientRepo.findAll();
    }
}