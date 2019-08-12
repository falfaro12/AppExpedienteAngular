import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificacionService } from 'src/app/share/notificacion.service.service';
import { ServicioConsulta } from 'src/app/share/models/ServicioConsulta';
import { ServicioConsultaService } from 'src/app/share/servicio-consulta.service';
import { ServicioConsultasEntidad } from 'src/app/share/models/ServicioConsultas-entidad';
import { UsuarioLogin } from 'src/app/share/models/usuario-login';
import { AuthenticationServiceService } from 'src/app/share/authentication-service.service';

@Component({
  selector: 'app-servicio-index',
  templateUrl: './servicio-index.component.html',
  styleUrls: ['./servicio-index.component.css']
})
export class ServicioIndexComponent  implements OnInit {
  UsuarioActual: UsuarioLogin;
  datos: ServicioConsulta;
  servicio: ServicioConsultasEntidad[];
  error: {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private servicioService: ServicioConsultaService,
    private notificacion: NotificacionService ,
    private autentification: AuthenticationServiceService
    ) {
      this.autentification.currentUser.subscribe(x => (this.UsuarioActual = x));
    }
  ngOnInit() {
    let notifC = false;
    let notifM = false;
    // Mensajes
    this.route.queryParams.subscribe(params => {
      notifC = params.create || false;
      notifM = params.update || false;
    });
    if (notifC) {
      this.notificacion.msjSuccess('Servicio creado!', 'Crear Servicio Consulta');
    }
    if (notifM) {
      this.notificacion.msjSuccess(
        'Servicio actualizado!',
        'Actualizar Servicio'
      );
    }
    // suscripción para uso del servicio
    this.servicioService.getServicios(this.UsuarioActual.user.id).subscribe(
      (respuesta: ServicioConsulta) => {
        this.datos = respuesta;
        this.servicio = this.datos.servicio;
        console.log(this.servicio);
      },
      error => (this.error = error)
    );
  }
  linkEditar(id: number) {
    this.router.navigate(['/ActualizaServicio/', id], {
      relativeTo: this.route
    });
  }
}
// Funcion que se conecta con el servicio para invocar a la funcion de obtener restaurantes
