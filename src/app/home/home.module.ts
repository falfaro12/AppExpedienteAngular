import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HomeRoutingModule } from './home-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { FormsModule } from '@angular/forms';
import { ConfiguracionComponent } from '../usuario/configuracion/configuracion.component';

@NgModule({
  declarations: [InicioComponent],
  imports: [CommonModule, HomeRoutingModule, FormsModule],
  exports: [InicioComponent]
})
export class HomeModule {}
