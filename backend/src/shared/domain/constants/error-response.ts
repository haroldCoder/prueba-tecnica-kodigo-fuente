import { HttpStatus } from "@nestjs/common";
import { ApiResponse } from "@shared/domain/entities";

export const errorResponse = (message: string): ApiResponse<null> => ({
    status: HttpStatus.BAD_REQUEST,
    message,
    data: null,
});
