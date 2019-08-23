import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgendaRoutingModule } from './agenda-routing.module';
import { AgendaShowComponent } from './agenda-show/agenda-show.component';
import { AgendaDetalleComponent } from './agenda-detalle/agenda-detalle.component';
import { AgendaPacienteComponent } from './agenda-paciente/agenda-paciente.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [AgendaShowComponent, AgendaDetalleComponent, AgendaPacienteComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AgendaRoutingModule
  ]
})
export class AgendaModule { }
