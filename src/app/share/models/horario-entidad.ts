import { Time } from '@angular/common';
import { ServicioConsultasEntidad } from './ServicioConsultas-entidad';
import { AgendaEntidad } from './agenda_Entidad';

export interface HorarioEntidad {
  id: number;
  Fecha_cita: Date;
  hora_cita: Time;
  estado: boolean;

  id_servicioConsulta: number;
  servicio__consultas: ServicioConsultasEntidad;

  agenda: AgendaEntidad;
  created_at: Date;
  updated_at: Date;

}
