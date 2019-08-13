import { Component, OnInit } from '@angular/core';
import { PerfilEntidad } from 'src/app/share/models/Perfil-entidad';
import { UsuarioLogin } from 'src/app/share/models/usuario-login';
import { Router } from '@angular/router';
import { AuthenticationServiceService } from 'src/app/share/authentication-service.service';
import { NotificacionService } from 'src/app/share/notificacion.service.service';
import { PerfilService } from 'src/app/share/perfil.service';

@Component({
  selector: 'app-perfil-crear',
  templateUrl: './perfil-crear.component.html',
  styleUrls: ['./perfil-crear.component.css']
})
export class PerfilCrearComponent implements OnInit {
  UsuarioActual: UsuarioLogin;
  datos: PerfilEntidad;
  error: any;
  constructor(
    private router: Router,
    private autentificacion: AuthenticationServiceService,
    private notificacion: NotificacionService,
    private PerfilServe: PerfilService
  ) {
    // llama la funcion para que traiga los roles
    this.autentificacion.currentUser.subscribe(x => (this.UsuarioActual = x));
  }
  // cuando envia los datos
  // cuando envia los datos
  onsubmit(obj: PerfilEntidad) {
    this.PerfilServe.crearPerfil(obj).subscribe(
      (respuesta: PerfilEntidad) => this.datos,
      error => {
        this.error = error;
        this.notificacion.msjValidacion(this.error);
      },
      // complete
      () => {
        this.router.navigate(['MantPerfil/lista'], {
          queryParams: { registradoPerfil: 'true' }
        });
      }
    );
  }
  ngOnInit() {}
}
