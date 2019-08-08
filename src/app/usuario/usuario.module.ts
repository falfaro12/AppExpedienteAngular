import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { FormsModule } from '@angular/forms';
import { UserEntidad } from '../share/models/user-entidad';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationServiceService } from '../share/authentication-service.service';
import { UsuarioIndexComponent } from './usuario-index/usuario-index.component';
import { CrearMedicoComponent } from './crear-medico/crear-medico.component';
import { IndexMedicoComponent } from './index-medico/index-medico.component';
import { MantenimientoMedicoComponent } from './mantenimiento-medico/mantenimiento-medico.component';
import { UsuarioComponent } from './usuario/usuario.component';


@NgModule({
  declarations: [ConfiguracionComponent, UsuarioIndexComponent, CrearMedicoComponent, IndexMedicoComponent, MantenimientoMedicoComponent, UsuarioComponent],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    FormsModule
  ],
  exports: [ConfiguracionComponent]
})
export class UsuarioModule {
}
