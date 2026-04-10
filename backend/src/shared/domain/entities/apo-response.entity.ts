export interface ApiResponse<T = null> {
    status: 'success' | 'error';
    message: string;
    data: T | null;
}