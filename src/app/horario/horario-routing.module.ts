import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HorarioAllComponent } from './horario-all/horario-all.component';
import { HorarioCreateComponent } from './horario-create/horario-create.component';
import { HorarioMantComponent } from './horario-mant/horario-mant.component';


const routes: Routes = [
  {
    path: 'horarioM',
    component: HorarioMantComponent,
    children: [
      {
        path: 'lista',
        component: HorarioAllComponent
      },
      {
        path: 'create',
        component: HorarioCreateComponent
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HorarioRoutingModule { }
