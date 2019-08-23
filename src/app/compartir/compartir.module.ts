import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompartirRoutingModule } from './compartir-routing.module';
import { CompartirIndexComponent } from './compartir-index/compartir-index.component';
import { CompartirShowComponent } from './compartir-show/compartir-show.component';
import { CompartirStoreComponent } from './compartir-store/compartir-store.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [CompartirIndexComponent, CompartirShowComponent, CompartirStoreComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    CompartirRoutingModule
  ]
})
export class CompartirModule { }
