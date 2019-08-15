import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpedienteRoutingModule } from './expediente-routing.module';
import { MantenimientoExpedienteComponent } from './mantenimiento-expediente/mantenimiento-expediente.component';
import { CreateAlergiaExpedienteComponent } from './create-alergia-expediente/create-alergia-expediente.component';
import { AlergiaAllExpedienteComponent } from './alergia-all-expediente/alergia-all-expediente.component';
import { UpdateAlergiaExpedienteComponent } from './update-alergia-expediente/update-alergia-expediente.component';
import { EnfermedadAllExpedienteComponent } from './enfermedad-all-expediente/enfermedad-all-expediente.component';
import { DetalleExpedienteComponent } from './detalle-expediente/detalle-expediente.component';


@NgModule({
  declarations: [MantenimientoExpedienteComponent, CreateAlergiaExpedienteComponent, AlergiaAllExpedienteComponent, UpdateAlergiaExpedienteComponent, EnfermedadAllExpedienteComponent, DetalleExpedienteComponent],
  imports: [
    CommonModule,
    ExpedienteRoutingModule
  ]
})
export class ExpedienteModule { }
