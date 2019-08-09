export interface UsuarioMedicoEntidad {
  id: number;
  nombre: string;
  primerApellido: string;
  segundoApellido: string;
  sexo: string;
  email: string;
  password: string;
  rol_id: number;
  created_at: Date;
  updated_at: Date;
}
