import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CitaRoutingModule } from './cita-routing.module';
import { MedicosIndexComponent } from './medicos-index/medicos-index.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HorarioDetalleComponent } from './horario-detalle/horario-detalle.component';



@NgModule({
  declarations: [MedicosIndexComponent, HorarioDetalleComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CitaRoutingModule
  ]
})
export class CitaModule { }
