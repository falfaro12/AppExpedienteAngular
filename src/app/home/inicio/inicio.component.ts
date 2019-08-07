import { Component, OnInit } from '@angular/core';
import { UserEntidad } from 'src/app/share/models/user-entidad';
import { ActivatedRoute, Router } from '@angular/router';

import { UsuarioLogin } from 'src/app/share/models/usuario-login';
import { AuthenticationServiceService } from 'src/app/share/authentication-service.service';
import { NotificacionService } from 'src/app/share/notificacion.service.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  datos: UsuarioLogin;
  error: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private auntenticationService: AuthenticationServiceService,
    private notificacion: NotificacionService

  ) {
    if (auntenticationService.currentUserValue) {
      this.router.navigate(['/']);
  }
}

ngOnInit() {
  let parametro = +this.route.snapshot.paramMap.get("accion");
  this.route.queryParams.subscribe(params => {
    if (params.registrado !== undefined && params.registrado === "true") {
      this.notificacion.msjSuccess(
        "Registro de usuario satisfactorio! Por favor especifique las credenciales para ingresar!",
        "Usuario"
      );
    }
  });
}
  onSubmit(obj: UserEntidad) {
    // suscripción para uso del servicio
    this.auntenticationService.loginUser(obj).subscribe(
      (respuesta: UsuarioLogin) => (this.datos = respuesta),
      error => (this.error = error),
      () => {
        this.router.navigate(['usuario/configuracion']);
      }
    );
  }
}

