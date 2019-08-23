import { AgendaEntidad } from './agenda_Entidad';

export interface Agenda {
  msg: string;
  citas: AgendaEntidad[];
}
