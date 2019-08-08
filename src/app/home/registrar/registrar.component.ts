import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationServiceService } from 'src/app/share/authentication-service.service';
import { UserEntidad } from 'src/app/share/models/user-entidad';
import { UsuarioLogin } from 'src/app/share/models/usuario-Login';
import { NotificacionService } from 'src/app/share/notificacion.service.service';
import { PerfilEntidad } from 'src/app/share/models/Perfil-entidad';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
  UsuarioActual: UsuarioLogin;
  datos: UserEntidad;
  error: any;
  constructor(
    private router: Router,
    private autentificacion: AuthenticationServiceService,
    private notificacion: NotificacionService
  ) {
    // llama la funcion para que traiga los roles
    this.autentificacion.currentUser.subscribe(x => (this.UsuarioActual = x));
  }
  // cuando envia los datos
  onsubmit(obj: PerfilEntidad) {
    this.autentificacion.createUser(obj).subscribe(
      (respuesta: PerfilEntidad) => this.datos,
      error => {
        this.error = error;
        this.notificacion.msjValidacion(this.error);
      },
      // complete
      () => {
        this.router.navigate(['home/inicio'], {
          queryParams: {registrado: 'true'}
         });

      }
    );
  }
  ngOnInit() {}
}
