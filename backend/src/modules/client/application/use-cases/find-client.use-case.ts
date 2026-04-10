import { ClientRepository } from "@modules-client/domain/repositories";
import { ClientEntity } from "@modules-client/domain/entities";

export class FindClientUseCase {
    constructor(
        private readonly clientRepository: ClientRepository
    ) { }
    execute(id: number): Promise<ClientEntity | null> {
        return this.clientRepository.findById(id);
    }
}