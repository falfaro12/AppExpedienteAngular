import { Component, OnInit } from '@angular/core';
import { Horario } from 'src/app/share/models/horario';
import { ServicioConsulta } from 'src/app/share/models/ServicioConsulta';
import { Router } from '@angular/router';
import { NotificacionService } from 'src/app/share/notificacion.service.service';
import { ServicioConsultaService } from 'src/app/share/servicio-consulta.service';
import { HorarioService } from 'src/app/share/horario.service';
import { AuthenticationServiceService } from 'src/app/share/authentication-service.service';
import { UsuarioLogin } from 'src/app/share/models/usuario-login';
import { HorarioEntidad } from 'src/app/share/models/horario-entidad';

@Component({
  selector: 'app-horario-create',
  templateUrl: './horario-create.component.html',
  styleUrls: ['./horario-create.component.css']
})
export class HorarioCreateComponent implements OnInit {
  UsuarioActual: UsuarioLogin;
  datos: Horario;
  servicio: ServicioConsulta;
  error: any;
  constructor(
    private router: Router,
    private servicioService: ServicioConsultaService,
    private notificacion: NotificacionService,
    private horarioService: HorarioService,
    private autentification: AuthenticationServiceService
  ) {
    this.autentification.currentUser.subscribe(x => (this.UsuarioActual = x));
    this.getSevicio();
  }

  ngOnInit() {
    this.getSevicio();
  }
  getSevicio() {
    return this.servicioService.getServicios(this.UsuarioActual.user.id).subscribe(
      (respuesta: ServicioConsulta) =>
      {
        this.servicio = respuesta;
        console.log(this.servicio);
      },
      error => {
        this.error = error;
        this.notificacion.msjError(this.error, 'Servicios');

      }
    );
  }
  onSubmit(obj: HorarioEntidad) {
    return this.horarioService.createServicio(obj).subscribe(
      (respuesta: Horario) => {
        this.datos = respuesta;
        this.router.navigate(['/horarioM/lista'], {
          queryParams: { registrarHorario: 'true' }
        });
      },
      error => {
        this.error = error;
        this.notificacion.msjValidacion(this.error);
      }
    );
  }
  onBack() {
    this.router.navigate(['/horarioM/lista']);
  }
}
