import { ClientRepository } from "@modules-client/domain/repositories";
import { CreateClientEntity } from "@modules-client/domain/entities";

export class CreateClientUseCase {
    constructor(
        private readonly clientRepository: ClientRepository
    ) { }
    execute(client: CreateClientEntity): Promise<number> {
        return this.clientRepository.create(client);
    }
}