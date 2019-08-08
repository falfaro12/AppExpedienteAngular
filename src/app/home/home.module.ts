import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HomeRoutingModule } from './home-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { FormsModule } from '@angular/forms';
import { RegistrarComponent } from './registrar/registrar.component';


@NgModule({
  declarations: [InicioComponent, RegistrarComponent],
  imports: [CommonModule, HomeRoutingModule, FormsModule],
  exports: [InicioComponent, RegistrarComponent]
})
export class HomeModule {
}
