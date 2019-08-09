import { UsuarioMedicoEntidad } from './usuarioMedico-entidad';


// Funciona solo para un listado de medico
export interface Usuario {
  msg: string;
  usaurios: UsuarioMedicoEntidad[];
}
