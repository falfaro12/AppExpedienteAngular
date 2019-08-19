import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MantenimientoExpedienteComponent } from './mantenimiento-expediente/mantenimiento-expediente.component';



import { EnfermedadAllExpedienteComponent } from './enfermedad-all-expediente/enfermedad-all-expediente.component';
import { AlergiaAllExpedienteComponent } from './alergia-all-expediente/alergia-all-expediente.component';
import { DetalleExpedienteComponent } from './detalle-expediente/detalle-expediente.component';
import { CreateAlergiaExpedienteComponent } from './create-alergia-expediente/create-alergia-expediente.component';
import { UpdateAlergiaExpedienteComponent } from './update-alergia-expediente/update-alergia-expediente.component';
import { ActividadAllExpedienteComponent } from './actividad-all-expediente/actividad-all-expediente.component';
import { CreateActividadExpedienteComponent } from './create-actividad-expediente/create-actividad-expediente.component';
import { AlcoholAllComponent } from './alcohol-all/alcohol-all.component';
import { UpdateAlcoholComponent } from './update-alcohol/update-alcohol.component';
import { FumadoAllComponent } from './fumado-all/fumado-all.component';
import { MedicamentosAllComponent } from './medicamentos-all/medicamentos-all.component';
import { CirugiasAllComponent } from './cirugias-all/cirugias-all.component';



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
        component: CreateAlergiaExpedienteComponent
      },
      {
        path: 'updateAlergiaExp',
        component: UpdateAlergiaExpedienteComponent
      },
      {
        path: 'listaEnfermedadExp',
        component: EnfermedadAllExpedienteComponent
      },
      {
        path: 'listaActividadExp',
        component: ActividadAllExpedienteComponent
      },
      {
        path: 'createActividadExp',
        component: CreateActividadExpedienteComponent
      },
      {
        path: 'updateActividadExp',
        component: UpdateAlergiaExpedienteComponent
      },
      {
        path: 'listaAlcohol',
        component: AlcoholAllComponent,
      },
      {
        path: 'updateAlcohol',
        component: UpdateAlcoholComponent
      },
      {
        path: 'listaFumado',
        component: FumadoAllComponent,
      },
      {
        path: 'listaMedicamentosExp',
        component: MedicamentosAllComponent
      },
      {
        path: 'listaCiruguias',
        component: CirugiasAllComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpedienteRoutingModule { }
