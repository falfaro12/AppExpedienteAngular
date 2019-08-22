import { EspecialidadEntidad } from './Especialidad-entidad';
import { UserEntidad } from './user-entidad';

export interface ServicioConsultasEntidad {
  id: number;
  precio: DoubleRange;
  ubicacion: string;
  id_doctor: number;
  id_Especialidad: number;
  especialidad: EspecialidadEntidad;
  user: UserEntidad;
  created_at: Date;
  updated_at: Date;
  

}
