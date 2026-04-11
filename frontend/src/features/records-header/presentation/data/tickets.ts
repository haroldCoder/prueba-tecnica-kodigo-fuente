import { StatusTicketEnum } from "@shared/domain/enums";

export interface RecordTicket {
    id: number;
    status: StatusTicketEnum;
}

export const tickets: RecordTicket[] = [
    {
        id: 1,
        status: StatusTicketEnum.CLOSED
    },
    {
        id: 2,
        status: StatusTicketEnum.OPEN
    },
    {
        id: 3,
        status: StatusTicketEnum.IN_PROGRESS
    },
    {
        id: 4,
        status: StatusTicketEnum.CLOSED
    },
    {
        id: 5,
        status: StatusTicketEnum.OPEN
    },
    {
        id: 6,
        status: StatusTicketEnum.IN_PROGRESS
    },
    {
        id: 7,
        status: StatusTicketEnum.CLOSED
    },
    {
        id: 8,
        status: StatusTicketEnum.OPEN
    },
    {
        id: 9,
        status: StatusTicketEnum.IN_PROGRESS
    },
    {
        id: 10,
        status: StatusTicketEnum.CLOSED
    },
    {
        id: 11,
        status: StatusTicketEnum.OPEN
    },
    {
        id: 12,
        status: StatusTicketEnum.IN_PROGRESS
    },
];