export const StatusTicketEnum = {
    OPEN: 'Open',
    IN_PROGRESS: 'In progress',
    CLOSED: 'Closed',
} as const;

export type StatusTicketEnum = (typeof StatusTicketEnum)[keyof typeof StatusTicketEnum];