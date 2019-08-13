import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { UsuarioModule } from './usuario/usuario.module';
import { AlergiaModule } from './alergia/alergia.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ServicioConsultaModule } from './servicio-consulta/servicio-consulta.module';
import { PerfilModule } from './perfil/perfil.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AlergiaModule,
    HomeModule,
    UsuarioModule,
    ServicioConsultaModule,
    CoreModule,
    AppRoutingModule,
    ServicioConsultaModule,
    PerfilModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
