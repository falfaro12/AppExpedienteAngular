import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MantenimientoExpedienteComponent } from './mantenimiento-expediente/mantenimiento-expediente.component';

import { CreateAlergiaComponent } from '../alergia/create-alergia/create-alergia.component';
import { UpdateAlergiaComponent } from '../alergia/update-alergia/update-alergia.component';
import { EnfermedadAllExpedienteComponent } from './enfermedad-all-expediente/enfermedad-all-expediente.component';
import { AlergiaAllExpedienteComponent } from './alergia-all-expediente/alergia-all-expediente.component';
import { DetalleExpedienteComponent } from './detalle-expediente/detalle-expediente.component';


const routes: Routes = [
  {
    path: 'mantExpediente',
    component: MantenimientoExpedienteComponent,
    children: [
      {
        path: 'detalleExpediente',
        component: DetalleExpedienteComponent
      },
      {
        path: 'listaAlergiasExp',
        component: AlergiaAllExpedienteComponent
      },
      {
        path: 'createAlergiaExp',
        component: CreateAlergiaComponent
      },
      {
        path: 'updateAlergiaExp',
        component: UpdateAlergiaComponent
      },
      {
        path: 'listaEnfermedadExp',
        component: EnfermedadAllExpedienteComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpedienteRoutingModule { }
