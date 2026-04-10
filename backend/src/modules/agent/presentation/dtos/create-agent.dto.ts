import { IsEmail, IsString } from "class-validator";

export class CreateAgentDto {
    @IsString()
    name: string;
    @IsEmail()
    email: string;
}
