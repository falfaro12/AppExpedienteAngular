import { Component, OnInit } from '@angular/core';
import { UserEntidad } from 'src/app/share/models/user-entidad';
import { Router } from '@angular/router';
import { AuthenticationServiceService } from 'src/app/share/authentication-service.service';
import { NotificacionService } from 'src/app/share/notificacion.service.service';
import { UsuarioLogin } from 'src/app/share/models/usuario-login';
import { Especialidad } from 'src/app/share/models/especialidad';
export interface ErrorEntidad {
  errors: { field: string; message: string }[];
}


@Component({
  selector: 'app-crear-medico',
  templateUrl: './crear-medico.component.html',
  styleUrls: ['./crear-medico.component.css']
})
export class CrearMedicoComponent implements OnInit {
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
    ngOnInit() {}
    ngDoCheck() {}



  // cuando envia los datos
  onsubmit(obj: UserEntidad) {
    this.autentificacion.createMedico(obj).subscribe(
      (respuesta: UserEntidad) => this.datos,
      error => {
        this.error = error;
        this.notificacion.msjValidacion(this.error);
      },
      // complete
      () => {
        this.router.navigate(['MantMedico/ListaMedico'], {
          queryParams: {registrado: 'true'}
         });

      }
    );
  }
  onBack() {
    this.router.navigate(['/MantMedico']);
  }

}

