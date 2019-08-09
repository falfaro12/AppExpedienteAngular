import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MantenimientoServicioComponent } from './mantenimiento-servicio/mantenimiento-servicio.component';
import { ServicioIndexComponent } from './servicio-index/servicio-index.component';
import { CrearServicioComponent } from './crear-servicio/crear-servicio.component';
import { AuthGuard } from '../share/helpers/auth.guard';


const routes: Routes = [
  {
    path: 'MantServicioConsulta',
    component: MantenimientoServicioComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'lista',
        component: ServicioIndexComponent ,
        canActivate: [AuthGuard]
      },
      {
        path: 'crear',
        component: CrearServicioComponent,
        canActivate: [AuthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicioConsultaRoutingModule { }
