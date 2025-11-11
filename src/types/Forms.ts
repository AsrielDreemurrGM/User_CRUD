export interface RegisterFormValues {
  nome: string;
  email: string;
  senha: string;
}

export interface EditFormValues {
  nome: string;
  email: string;
  senha?: string;
}
