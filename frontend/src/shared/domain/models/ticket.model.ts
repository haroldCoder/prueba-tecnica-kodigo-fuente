import type { PriorityTicketEnum, StatusTicketEnum } from "@shared/domain/enums"

export interface TicketModel { /* Recreamos los modelos igual como estan en la base de datos */
    id: number
    title: string
    description: string
    status: StatusTicketEnum
    priority: PriorityTicketEnum
    createdAt: Date
    updatedAt: Date
}