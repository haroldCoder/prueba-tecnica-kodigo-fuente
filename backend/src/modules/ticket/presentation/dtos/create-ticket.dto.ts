import { IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateTicketDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    description: string;

    @IsEnum(['Open', 'In Progress', 'Closed'])
    status: string;

    @IsEnum(['Low', 'Medium', 'High', 'Critical'])
    priority: string;

    @IsNumber()
    @IsNotEmpty()
    client_id: number;

    @IsNumber()
    agent_id: number;
}