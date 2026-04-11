export const PRIORITY_TICKET_ENUM = {
    LOW: 'low',
    MEDIUM: 'medium',
    HIGH: 'high'
} as const

export type PriorityTicketEnum = typeof PRIORITY_TICKET_ENUM[keyof typeof PRIORITY_TICKET_ENUM]