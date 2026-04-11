import type { PriorityTicketEnum, StatusTicketEnum } from "@shared/domain/enums"

export interface CreateTicketModel {
    title: string
    description?: string
    status?: StatusTicketEnum
    priority: PriorityTicketEnum,
    client_id: string
    agent_id?: string
}