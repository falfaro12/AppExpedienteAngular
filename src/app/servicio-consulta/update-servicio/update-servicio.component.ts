import { Component, OnInit } from '@angular/core';
import { ServicioConsulta } from 'src/app/share/models/ServicioConsulta';
import { Especialidad } from 'src/app/share/models/especialidad';
import { Router } from '@angular/router';
import { ServicioConsultaService } from 'src/app/share/servicio-consulta.service';
import { NotificacionService } from 'src/app/share/notificacion.service.service';
import { ServicioConsultasEntidad } from 'src/app/share/models/ServicioConsultas-entidad';
import { UsuarioLogin } from 'src/app/share/models/usuario-login';
import { AuthenticationServiceService } from 'src/app/share/authentication-service.service';

@Component({
  selector: 'app-update-servicio',
  templateUrl: './update-servicio.component.html',
  styleUrls: ['./update-servicio.component.css']
})
export class UpdateServicioComponent implements OnInit {
  datos: ServicioConsulta;
  servicio: ServicioConsultasEntidad;
  especialidad: Especialidad;
  error: any;
  UsuarioActual: UsuarioLogin;
  constructor(
    private router: Router,
    private servicioService: ServicioConsultaService,
    private notificacion: NotificacionService,
    private autentificacion: AuthenticationServiceService
  ) {
    this.getEspecialidad();
  }

  getEspecialidad() {
    return this.servicioService.getEspecialidad().subscribe(
      (respuesta: Especialidad) => (this.especialidad = respuesta),
      error => {
        this.error = error;
        this.notificacion.msjError(this.error, 'Especialidades');
      }
    );
  }

  ngOnInit() {
  }
  onSubmit(obj: ServicioConsultasEntidad) {
    return this.servicioService.updateServicio(obj.id, obj).subscribe(
      (respuesta: ServicioConsulta) => {
        this.datos = respuesta;
        this.router.navigate(['/MantServicioConsulta/lista'], {
          queryParams: { actualizaServicio: 'true' }
        });
      },
      error => {
        this.error = error;
        this.notificacion.msjValidacion(this.error);
      }
    );
  }
  onBack() {
    this.router.navigate(['/MantServicioConsulta']);
  }
