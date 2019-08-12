import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicioConsultaRoutingModule } from './servicio-consulta-routing.module';
import { ServicioIndexComponent } from './servicio-index/servicio-index.component';
import { MantenimientoServicioComponent } from './mantenimiento-servicio/mantenimiento-servicio.component';
import { CrearServicioComponent } from './crear-servicio/crear-servicio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateServicioComponent } from './update-servicio/update-servicio.component';


@NgModule({
  declarations: [ServicioIndexComponent, MantenimientoServicioComponent, CrearServicioComponent, UpdateServicioComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ServicioConsultaRoutingModule
  ]
})
export class ServicioConsultaModule { }
