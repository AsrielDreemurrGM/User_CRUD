export interface AxiosErrorResponse {
  response?: {
    data?: string;
    status?: number;
  };
  message: string;
}
