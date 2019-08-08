import { UserEntidad } from './user-entidad';

// Funciona solo para un listado de medico
export interface Usuario {
  msg: string;
  usaurios: UserEntidad[];
}
