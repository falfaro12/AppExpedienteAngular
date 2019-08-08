import { EspecialidadEntidad } from './Especialidad-entidad';

// Funciona solo para un listado de medico
export interface Especialidad {
  msg: string;
  especialidades: EspecialidadEntidad[];
}
