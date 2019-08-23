import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgendaShowComponent } from './agenda-show/agenda-show.component';
import { AgendaDetalleComponent } from './agenda-detalle/agenda-detalle.component';
import { AuthGuard } from '../share/helpers/auth.guard';


const routes: Routes = [
  {
    path: 'agendaMedico',
    children:
    [
      {
        path: 'agenda',
        component: AgendaShowComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'detalle/:id',
        component: AgendaDetalleComponent,
        canActivate: [AuthGuard]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgendaRoutingModule { }
