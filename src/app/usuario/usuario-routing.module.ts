import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { UsuarioIndexComponent } from './usuario-index/usuario-index.component';
import { MantenimientoMedicoComponent } from './mantenimiento-medico/mantenimiento-medico.component';
import { IndexMedicoComponent } from './index-medico/index-medico.component';
import { CrearMedicoComponent } from './crear-medico/crear-medico.component';
import { AuthGuard } from '../share/helpers/auth.guard';



const routes: Routes = [
  { path: "configuracion", component: ConfiguracionComponent },
  { path: "Index", component: UsuarioIndexComponent },
 {path: 'MantMedico',
  component: MantenimientoMedicoComponent,
  canActivate: [AuthGuard],
  children: [
    {
      path: 'ListaMedico',
      component: IndexMedicoComponent,
      canActivate: [AuthGuard]
    },
    {
      path: 'CrearMedico',
      component: CrearMedicoComponent,
      canActivate: [AuthGuard]
    }]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule {

 }
