export interface UserEntidad {
  id: number;
  nombre: string;
  primerApellido: string;
  segundoApellido: string;
  email: string;
  password: string;
  rol_id: number;
  remember_token: string;
  created_at: Date;
  updated_at: Date;
}
