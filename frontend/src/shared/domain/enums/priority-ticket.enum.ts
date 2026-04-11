export const PriorityTicketEnum = {
    LOW: 'Low',
    MEDIUM: 'Medium',
    HIGH: 'High',
    CRITICAL: 'Critical'
} as const

export type PriorityTicketEnum = (typeof PriorityTicketEnum)[keyof typeof PriorityTicketEnum]