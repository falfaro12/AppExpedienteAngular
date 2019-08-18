import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnfermedadAllComponent } from './enfermedad-all/enfermedad-all.component';

const routes: Routes = [
  {
    path: 'enfermedades',
    component: EnfermedadAllComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnfermedadRoutingModule {}
