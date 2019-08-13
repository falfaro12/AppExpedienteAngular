import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilRoutingModule } from './perfil-routing.module';
import { UpdateIndexComponent } from './update-index/update-index.component';
import { PerfilIndexComponent } from './perfil-index/perfil-index.component';
import { PerfilCrearComponent } from './perfil-crear/perfil-crear.component';
import { PerfilUpdateComponent } from './perfil-update/perfil-update.component';


@NgModule({
  declarations: [UpdateIndexComponent, PerfilIndexComponent, PerfilCrearComponent, PerfilUpdateComponent],
  imports: [
    CommonModule,
    PerfilRoutingModule
  ]
})
export class PerfilModule { }
