import { API_URL } from "@/shared/config/api-url";
import type { ClientModel, CreateClientModel } from "@/shared/domain/models";
import type { ClientsRepository } from "@/shared/domain/respositories";

export class HttpClientsRepository implements ClientsRepository {
    async getClients(): Promise<ClientModel[]> {
        const response = await fetch(`${API_URL}/clients`);
        if (!response.ok) throw new Error("Error fetching clients");
        const data = await response.json();
        return data.data;
    }

    async getClientById(id: number): Promise<ClientModel> {
        const response = await fetch(`${API_URL}/clients/${id}`);
        if (!response.ok) throw new Error("Error fetching client");
        const data = await response.json();
        return data.data;
    }

    async createClient(client: CreateClientModel): Promise<ClientModel> {
        const response = await fetch(`${API_URL}/client`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(client),
        });
        if (!response.ok) throw new Error("Error creating client");
        const data = await response.json();
        return data.data;
    }
}
