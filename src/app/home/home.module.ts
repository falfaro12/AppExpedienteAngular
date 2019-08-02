import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HomeRoutingModule } from './home-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [InicioComponent],
  imports: [CommonModule, HomeRoutingModule, FormsModule],
  exports: [InicioComponent]
})
export class HomeModule {}
