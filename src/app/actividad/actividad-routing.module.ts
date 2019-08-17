import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActividadAllComponent } from './actividad-all/actividad-all.component';


const routes: Routes = [
  {
    path: 'actividad',
    component: ActividadAllComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActividadRoutingModule { }
