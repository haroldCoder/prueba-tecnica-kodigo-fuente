import { ApiResponse } from "@shared/domain/entities";

export const successResponse = <T>(
    data: T,
    message = 'Operation successful',
): ApiResponse<T> => ({
    status: 'success',
    message,
    data,
});