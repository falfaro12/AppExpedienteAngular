import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpedienteRoutingModule } from './expediente-routing.module';
import { MantenimientoExpedienteComponent } from './mantenimiento-expediente/mantenimiento-expediente.component';
import { CreateAlergiaExpedienteComponent } from './create-alergia-expediente/create-alergia-expediente.component';
import { AlergiaAllExpedienteComponent } from './alergia-all-expediente/alergia-all-expediente.component';
import { UpdateAlergiaExpedienteComponent } from './update-alergia-expediente/update-alergia-expediente.component';
import { EnfermedadAllExpedienteComponent } from './enfermedad-all-expediente/enfermedad-all-expediente.component';
import { DetalleExpedienteComponent } from './detalle-expediente/detalle-expediente.component';
import { AlcoholAllComponent } from './alcohol-all/alcohol-all.component';
import { CreateAlcoholComponent } from './create-alcohol/create-alcohol.component';
import { UpdateAlcoholComponent } from './update-alcohol/update-alcohol.component';
import { MedicamentosAllComponent } from './medicamentos-all/medicamentos-all.component';
import { FumadoAllComponent } from './fumado-all/fumado-all.component';
import { CirugiasAllComponent } from './cirugias-all/cirugias-all.component';
import { ActividadAllExpedienteComponent } from './actividad-all-expediente/actividad-all-expediente.component';
import { CreateActividadExpedienteComponent } from './create-actividad-expediente/create-actividad-expediente.component';
import { UpdateActividadExpedienteComponent } from './update-actividad-expediente/update-actividad-expediente.component';


@NgModule({
  declarations: [MantenimientoExpedienteComponent,
                CreateAlergiaExpedienteComponent,
                AlergiaAllExpedienteComponent,
                UpdateAlergiaExpedienteComponent,
                EnfermedadAllExpedienteComponent,
                DetalleExpedienteComponent,
                AlcoholAllComponent,
                CreateAlcoholComponent,
                UpdateAlcoholComponent,
                MedicamentosAllComponent,
                FumadoAllComponent,
                CirugiasAllComponent,
                ActividadAllExpedienteComponent,
                CreateActividadExpedienteComponent,
                UpdateActividadExpedienteComponent],
  imports: [
    CommonModule,
    ExpedienteRoutingModule
  ]
})
export class ExpedienteModule { }
