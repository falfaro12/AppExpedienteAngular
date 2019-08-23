import { ActividadPivotEntidad } from './actividad-pivot-entidad';

export interface ActividadEntidad {
  id: number;
  nombre: string;
  ruta_imagen: string;
  pivot: ActividadPivotEntidad;
}
