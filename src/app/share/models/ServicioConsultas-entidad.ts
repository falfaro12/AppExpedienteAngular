import { EspecialidadEntidad } from './Especialidad-entidad';
import { UserEntidad } from './user-entidad';
import { HorarioEntidad } from './horario-entidad';

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

  horarios: HorarioEntidad[];
}
