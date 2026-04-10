import { IsEnum, IsString } from "class-validator";

export class UpdateTicketDto {
    @IsString()
    title: string;

    @IsString()
    description: string;

    @IsEnum(['Open', 'In Progress', 'Closed'])
    status: string;

    @IsEnum(['Low', 'Medium', 'High', 'Critical'])
    priority: string;
}