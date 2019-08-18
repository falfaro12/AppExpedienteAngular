import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlergiaRoutingModule } from './alergia-routing.module';
import { AlergiaAllComponent } from './alergia-all/alergia-all.component';
import { CreateAlergiaComponent } from './create-alergia/create-alergia.component';
import { UpdateAlergiaComponent } from './update-alergia/update-alergia.component';
import { MantenimietoAlergiaComponent } from './mantenimieto-alergia/mantenimieto-alergia.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AlergiaDropComponent } from './alergia-drop/alergia-drop.component';


@NgModule({
  declarations: [AlergiaAllComponent, CreateAlergiaComponent, UpdateAlergiaComponent, MantenimietoAlergiaComponent, AlergiaDropComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AlergiaRoutingModule
  ]
})
export class AlergiaModule { }
