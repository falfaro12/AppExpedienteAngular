import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HorarioRoutingModule } from './horario-routing.module';
import { HorarioAllComponent } from './horario-all/horario-all.component';
import { HorarioMantComponent } from './horario-mant/horario-mant.component';
import { HorarioCreateComponent } from './horario-create/horario-create.component';
import { HorarioDropoComponent } from './horario-dropo/horario-dropo.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [HorarioAllComponent, HorarioMantComponent, HorarioCreateComponent, HorarioDropoComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HorarioRoutingModule
  ]
})
export class HorarioModule { }
