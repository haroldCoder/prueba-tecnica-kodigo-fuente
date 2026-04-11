import type { ClientModel, CreateClientModel } from "@/shared/domain/models";

export interface ClientsRepository {
    getClients(): Promise<ClientModel[]>;
    getClientById(id: number): Promise<ClientModel>;
    createClient(client: CreateClientModel): Promise<ClientModel>;
}
