import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MedicosIndexComponent } from './medicos-index/medicos-index.component';
import { HorarioDetalleComponent } from './horario-detalle/horario-detalle.component';
import { AuthGuard } from '../share/helpers/auth.guard';



const routes: Routes = [
  {
    path: 'cita',
    children:
    [
      {
        path: 'SeleccionaMedico',
        component: MedicosIndexComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'horarios_citas/:id',
        component: HorarioDetalleComponent,
        canActivate: [AuthGuard]
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CitaRoutingModule { }
