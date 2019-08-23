import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgendaRoutingModule } from './agenda-routing.module';
import { AgendaShowComponent } from './agenda-show/agenda-show.component';
import { AgendaDetalleComponent } from './agenda-detalle/agenda-detalle.component';



@NgModule({
  declarations: [AgendaShowComponent, AgendaDetalleComponent],
  imports: [
    CommonModule,
    AgendaRoutingModule
  ]
})
export class AgendaModule { }
