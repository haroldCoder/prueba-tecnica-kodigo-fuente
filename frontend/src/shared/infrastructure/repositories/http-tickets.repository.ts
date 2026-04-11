import type { CreateTicketModel, TicketModel, UpdateTicketModel } from "@/shared/domain/models";
import type { ITicketsRepository } from "@shared/domain/respositories";
import { API_URL } from "@shared/config";

export class HttpTicketsRepository implements ITicketsRepository {
    async getTickets(): Promise<TicketModel[]> {
        const response = await fetch(`${API_URL}/tickets`);
        const data = await response.json();
        return data.data;
    }
    async getTicketById(id: number): Promise<TicketModel> {
        const response = await fetch(`${API_URL}/tickets/${id}`);
        const data = await response.json();
        return data.data;
    }
    async createTicket(ticket: CreateTicketModel): Promise<TicketModel> {
        const response = await fetch(`${API_URL}/tickets`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(ticket),
        });
        const data = await response.json();
        return data.data;
    }
    async updateTicket(id: number, ticket: UpdateTicketModel): Promise<TicketModel> {
        const response = await fetch(`${API_URL}/tickets/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(ticket),
        });
        const data = await response.json();
        return data.data;
    }
    async deleteTicket(id: number): Promise<void> {
        const response = await fetch(`${API_URL}/tickets/${id}`, {
            method: "DELETE",
        });
        return response.json();
    }
}