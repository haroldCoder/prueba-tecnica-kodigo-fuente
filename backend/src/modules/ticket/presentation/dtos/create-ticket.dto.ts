import { IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { PriorityEnum, StatusEnum } from "@modules-ticket/domain/enums";

export class CreateTicketDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    description: string;

    @IsEnum(StatusEnum)
    status: StatusEnum;

    @IsEnum(PriorityEnum)
    priority: PriorityEnum;

    @IsNumber()
    @IsNotEmpty()
    client_id: number;

    @IsNumber()
    agent_id: number;
}