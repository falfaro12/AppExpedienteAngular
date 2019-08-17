import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActividadRoutingModule } from './actividad-routing.module';
import { ActividadAllComponent } from './actividad-all/actividad-all.component';


@NgModule({
  declarations: [ActividadAllComponent],
  imports: [
    CommonModule,
    ActividadRoutingModule
  ]
})
export class ActividadModule { }
