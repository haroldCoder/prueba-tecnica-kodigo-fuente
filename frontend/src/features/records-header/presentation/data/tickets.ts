import { PriorityTicketEnum, StatusTicketEnum } from "@shared/domain/enums";

export interface RecordTicket {
    id: number;
    status: StatusTicketEnum;
    priority: PriorityTicketEnum;
}

export const tickets: RecordTicket[] = [
    {
        id: 1,
        status: StatusTicketEnum.CLOSED,
        priority: PriorityTicketEnum.HIGH
    },
    {
        id: 2,
        status: StatusTicketEnum.OPEN,
        priority: PriorityTicketEnum.LOW
    },
    {
        id: 3,
        status: StatusTicketEnum.IN_PROGRESS,
        priority: PriorityTicketEnum.MEDIUM
    },
    {
        id: 4,
        status: StatusTicketEnum.CLOSED,
        priority: PriorityTicketEnum.HIGH
    },
    {
        id: 5,
        status: StatusTicketEnum.OPEN,
        priority: PriorityTicketEnum.LOW
    },
    {
        id: 6,
        status: StatusTicketEnum.IN_PROGRESS,
        priority: PriorityTicketEnum.MEDIUM
    },
    {
        id: 7,
        status: StatusTicketEnum.CLOSED,
        priority: PriorityTicketEnum.HIGH
    },
    {
        id: 8,
        status: StatusTicketEnum.OPEN,
        priority: PriorityTicketEnum.LOW
    },
    {
        id: 9,
        status: StatusTicketEnum.IN_PROGRESS,
        priority: PriorityTicketEnum.MEDIUM
    },
    {
        id: 10,
        status: StatusTicketEnum.CLOSED,
        priority: PriorityTicketEnum.HIGH
    },
    {
        id: 11,
        status: StatusTicketEnum.OPEN,
        priority: PriorityTicketEnum.LOW
    },
    {
        id: 12,
        status: StatusTicketEnum.IN_PROGRESS,
        priority: PriorityTicketEnum.MEDIUM
    },
];