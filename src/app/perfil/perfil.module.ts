import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilRoutingModule } from './perfil-routing.module';
import { PerfilIndexComponent } from './perfil-index/perfil-index.component';
import { PerfilCrearComponent } from './perfil-crear/perfil-crear.component';
import { MantenimientoPerfilComponent } from './mantenimiento-perfil/mantenimiento-perfil.component';
import { FormsModule } from '@angular/forms';
import { DetallePerfilComponent } from './detalle-perfil/detalle-perfil.component';

@NgModule({
  declarations: [
    PerfilIndexComponent,
    PerfilCrearComponent,
    MantenimientoPerfilComponent,
    DetallePerfilComponent
  ],
  imports: [CommonModule, PerfilRoutingModule, FormsModule]
})
export class PerfilModule {}
