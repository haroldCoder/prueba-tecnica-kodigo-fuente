import { HttpStatus } from "@nestjs/common";
import { ApiResponse } from "@shared/domain/entities";

export const errorResponse = (message: string): ApiResponse<null> => ({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    message,
    data: null,
});
