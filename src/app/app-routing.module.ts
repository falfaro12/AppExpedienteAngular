import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { ServicioConsultaModule } from './servicio-consulta/servicio-consulta.module';

const routes: Routes = [
  {
    path: "usuario",
    loadChildren: () => import("./usuario/usuario.module").then(mod => mod.UsuarioModule)
  },
  {
    path: "home",
    // loadChildren: "./home/home.module#HomeModule"
    loadChildren: () => import("./home/home.module").then(mod => mod.HomeModule)
  },
  {
    path: "servicio",
    // loadChildren: "./home/home.module#HomeModule"
    loadChildren: () => import("./servicio-consulta/servicio-consulta.module").then(mod => mod.ServicioConsultaModule)
  },
  {
    path: "perfil",
    // loadChildren: "./home/home.module#HomeModule"
    loadChildren: () => import("./perfil/perfil.module").then(mod => mod.PerfilModule)
  },


  {
    path: 'alergia',
    loadChildren: () =>
      import('./alergia/alergia.module').then(mod => mod.AlergiaModule)
  },
  { path: "", redirectTo: "", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
