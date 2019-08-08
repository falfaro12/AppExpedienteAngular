import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';

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
