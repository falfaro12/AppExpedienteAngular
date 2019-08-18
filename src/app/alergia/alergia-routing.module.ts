import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateAlergiaComponent} from './create-alergia/create-alergia.component';
import { UpdateAlergiaComponent} from './update-alergia/update-alergia.component';
import { AlergiaAllComponent} from './alergia-all/alergia-all.component';
import { MantenimietoAlergiaComponent } from './mantenimieto-alergia/mantenimieto-alergia.component';
import { AlergiaDropComponent } from './alergia-drop/alergia-drop.component';


const routes: Routes = [
  {
    path: 'alergia/update/:id',
    component: UpdateAlergiaComponent,
  },
  {
    path: 'alergiaM',
    component: MantenimietoAlergiaComponent,
    children: [
      {
        path: 'lista',
        component: AlergiaAllComponent
      },
      {
        path: 'create',
        component: CreateAlergiaComponent
      },
      {
        path: 'drop',
        component: AlergiaDropComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlergiaRoutingModule { }
