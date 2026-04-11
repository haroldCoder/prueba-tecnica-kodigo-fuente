import type { CreateTicketModel, TicketModel, UpdateTicketModel } from "@shared/domain/models"

export interface ITicketsRepository { /* Creamos los contratos */
    getTickets(): Promise<TicketModel[]>
    getTicketById(id: number): Promise<TicketModel>
    createTicket(ticket: CreateTicketModel): Promise<TicketModel>
    updateTicket(id: number, ticket: UpdateTicketModel): Promise<TicketModel>
    deleteTicket(id: number): Promise<void>
}