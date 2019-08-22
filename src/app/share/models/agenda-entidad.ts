
import { PerfilEntidad } from './perfil-entidad';
import { HorarioEntidad } from './horario-entidad';

export interface AgendaEntidad {
  id: number;
  estado_cita?: boolean;

  horario: HorarioEntidad;
  id_Horario: number;

  perfil: PerfilEntidad;
  id_perfil: number;

  created_at: Date;
  updated_at: Date;
}
