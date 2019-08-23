import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompartirIndexComponent } from './compartir-index/compartir-index.component';
import { AuthGuard } from '../share/helpers/auth.guard';
import { CompartirStoreComponent } from './compartir-store/compartir-store.component';


const routes: Routes = [
 { path: 'Compartir',
  component: CompartirIndexComponent,
  canActivate: [AuthGuard],
  children: [
    {
      path: 'compartirExpediente:id',
      component: CompartirStoreComponent,
      canActivate: [AuthGuard]
    },
    {
      path: 'index',
      component: CompartirIndexComponent,
      canActivate: [AuthGuard]
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompartirRoutingModule { }
