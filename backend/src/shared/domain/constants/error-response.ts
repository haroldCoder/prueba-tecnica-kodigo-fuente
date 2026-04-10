import { ApiResponse } from "@shared/domain/entities";

export const errorResponse = (message: string): ApiResponse<null> => ({
    status: 'error',
    message,
    data: null,
});
