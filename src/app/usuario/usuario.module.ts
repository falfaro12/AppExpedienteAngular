import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { ConfiguracionComponent } from './configuracion/configuracion.component';


@NgModule({
  declarations: [ConfiguracionComponent],
  imports: [
    CommonModule,
    UsuarioRoutingModule
  ],
  exports: [ConfiguracionComponent]
})
export class UsuarioModule { }
