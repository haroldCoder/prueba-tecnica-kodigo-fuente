import { ClientEntity, CreateClientEntity } from "@modules-client/domain/entities";

export interface ClientRepository {
    create(client: CreateClientEntity): Promise<number>;
    findById(id: number): Promise<ClientEntity | null>;
}