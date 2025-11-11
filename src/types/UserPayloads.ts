export interface UserRequest {
  nome: string;
  email: string;
  senha: string;
}

export interface UserResponse {
  id: number;
  nome: string;
  email: string;
}

export interface UpdateUserPayload {
  nome: string;
  email: string;
  senha?: string;
}
