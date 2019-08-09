import { EspecialidadEntidad } from './Especialidad-entidad';
import { UserEntidad } from './user-entidad';

export interface ServicioConsultasEntidad {
  id: number;
  Precio: number;
  Ubicacion: string;
  id_doctor: number;
  especialidad_id: Array<number>;
  especialidades: EspecialidadEntidad[];
  user: UserEntidad;
  created_at: Date;
  updated_at: Date;
}
