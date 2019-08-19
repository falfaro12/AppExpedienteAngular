import { FumadoEntidad} from './fumado-entidad';
import { AlcoholEntidad } from './alcohol-entidad';
import { DeseaseEntidad } from './desease-entidad';
import { AlergiaEntidad } from './alergia-entidad';
import { MedicamentoEntidad } from './medicamento-entidad';
import { ActividadEntidad } from './actividad-entidad';
import { CirugiaEntidad } from './cirugia-entidad';

export interface ExpedienteEntidad {
  id: number;
  tieneAlergia: boolean;
  tieneEnfermedad: boolean;
  tieneActividad: boolean;
  idfumado: number;
  fumado: FumadoEntidad;
  idalcoholismo: number;
  alcohol: AlcoholEntidad;
  alergias: AlergiaEntidad[];
  deseases: DeseaseEntidad[];
  medicamentos: MedicamentoEntidad[];
  activities: ActividadEntidad[];
  cirugias: CirugiaEntidad[];
  created_at: Date;
  updated_at: Date;
}
