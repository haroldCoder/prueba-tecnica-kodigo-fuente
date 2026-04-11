import { StatusTicketEnum } from "@shared/domain/enums";

export interface RecordTicket {
    id: number;
    label: StatusTicketEnum;
}

export const tickets: RecordTicket[] = [
    {
        id: 1,
        label: StatusTicketEnum.CLOSED
    },
    {
        id: 2,
        label: StatusTicketEnum.OPEN
    },
    {
        id: 3,
        label: StatusTicketEnum.IN_PROGRESS
    },
    {
        id: 4,
        label: StatusTicketEnum.CLOSED
    },
    {
        id: 5,
        label: StatusTicketEnum.OPEN
    },
    {
        id: 6,
        label: StatusTicketEnum.IN_PROGRESS
    },
    {
        id: 7,
        label: StatusTicketEnum.CLOSED
    },
    {
        id: 8,
        label: StatusTicketEnum.OPEN
    },
    {
        id: 9,
        label: StatusTicketEnum.IN_PROGRESS
    },
    {
        id: 10,
        label: StatusTicketEnum.CLOSED
    },
    {
        id: 11,
        label: StatusTicketEnum.OPEN
    },
    {
        id: 12,
        label: StatusTicketEnum.IN_PROGRESS
    },
];