export interface PerfilEntidad {
  id: number;
  nombre: string;
  primerApellido: string;
  segundoApellido: string;
  sexo: string;
  email: string;
  password: string;
  rol_id: number;
  fechaNacimiento: Date;
  tipoSangre: string;
  direccion: string;
  numTelefonico: number;
  contactoEmergencia: number;
  esDuenho: boolean;
  created_at: Date;
  updated_at: Date;
}
