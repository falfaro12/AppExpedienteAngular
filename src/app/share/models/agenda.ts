import { AgendaEntidad } from './agenda-entidad';

export interface Agenda {
  msg: string;
  citas: AgendaEntidad[];
}
