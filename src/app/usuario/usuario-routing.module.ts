import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { UsuarioIndexComponent } from './usuario-index/usuario-index.component';



const routes: Routes = [
  { path: "configuracion", component: ConfiguracionComponent },
  { path: "Index", component: UsuarioIndexComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule {

 }
