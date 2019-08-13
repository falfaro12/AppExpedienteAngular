import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../share/helpers/auth.guard';
import { MantenimientoPerfilComponent } from './mantenimiento-perfil/mantenimiento-perfil.component';
import { PerfilIndexComponent } from './perfil-index/perfil-index.component';
import { PerfilCrearComponent } from './perfil-crear/perfil-crear.component';
import { DetallePerfilComponent } from './detalle-perfil/detalle-perfil.component';


const routes: Routes = [  { path: 'perfil/detalle/:id', component: DetallePerfilComponent, canActivate: [AuthGuard] },
{
  path: 'MantPerfil',
  component: MantenimientoPerfilComponent,
  canActivate: [AuthGuard],
  children: [
    {
      path: 'lista',
      component: PerfilIndexComponent ,
      canActivate: [AuthGuard]
    },
    {
      path: 'crear',
      component: PerfilCrearComponent,
      canActivate: [AuthGuard]
    }

  ]
},

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerfilRoutingModule { }
