import { Component, OnInit } from '@angular/core';
import { UserEntidad } from 'src/app/share/models/user-entidad';
import { Router } from '@angular/router';
import { AuthenticationServiceService } from 'src/app/share/authentication-service.service';
import { UsuarioLogin } from 'src/app/share/models/usuario-Login';
import { NotificacionService } from 'src/app/share/notificacion.service.service';
export interface ErrorEntidad {
  errors: { field: string; message: string }[];
}

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css']
})
export class ConfiguracionComponent implements OnInit {
  UsuarioActual: UsuarioLogin;
  datos: UserEntidad;
  error: any;

  constructor(private router: Router, private autentificacion: AuthenticationServiceService, private notificacion: NotificacionService) {
    // llama la funcion para que traiga los roles
    this.autentificacion.currentUser.subscribe(x => (this.UsuarioActual = x));
  }
  // cuando envia los datos
   onSubmit(obj: UserEntidad) {
    return this.autentificacion.updateUser(obj).subscribe(
      (respuesta: UserEntidad) => {
        this.datos = respuesta;
        this.router.navigate(['/home/inicio'], {
          queryParams: { create: 'true' }
        });
      },
      error => {
        this.error = error;
        this.notificacion.msjValidacion(this.error);
      }
    );
  }


  ngOnInit() {
  }

}
