import { ExpedienteEntidad } from './expediente-entidad';
import { UserEntidad } from './user-entidad';

export interface CompartirExpedienteEntidad {
  id: number;
  expediente_id: number;
  expediente: ExpedienteEntidad;

  user_id: number;
  user: UserEntidad;

  perfil_id: number;

  created_at: Date;
  updated_at: Date;
}
