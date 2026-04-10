import { IsEnum, IsNumber, IsString } from "class-validator";

export class CreateTicketDto {
    @IsString()
    title: string;

    @IsString()
    description: string;

    @IsEnum(['Open', 'In Progress', 'Closed'])
    status: string;

    @IsEnum(['Low', 'Medium', 'High', 'Critical'])
    priority: string;

    @IsNumber()
    user_id: number;

    @IsNumber()
    agent_id: number;
}