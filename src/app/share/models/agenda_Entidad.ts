import { HorarioEntidad } from './horario-entidad';
import { PerfilEntidad } from './Perfil-entidad';

export interface AgendaEntidad {
  id: number;
  estado_cita?: boolean;

  horario: HorarioEntidad;
  id_Horario: number;

  profile: PerfilEntidad;
  id_perfil: number;


  created_at: Date;
  updated_at: Date;

}
