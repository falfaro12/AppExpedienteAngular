import { Time } from '@angular/common';
import { ServicioConsultasEntidad } from './ServicioConsultas-entidad';

export interface HorarioEntidad {
  id: number;
  Fecha_cita: Date;
  hora_cita: Time;
  estado: boolean;
  id_servicioConsulta: number;
  servicio__consultas: ServicioConsultasEntidad;
  created_at: Date;
  updated_at: Date;

}
