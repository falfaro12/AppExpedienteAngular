import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationServiceService } from 'src/app/share/authentication-service.service';
import { NotificacionService } from 'src/app/share/notificacion.service.service';

@Component({
  selector: 'app-mantenimiento-servicio',
  templateUrl: './mantenimiento-servicio.component.html',
  styleUrls: ['./mantenimiento-servicio.component.css']
})
export class MantenimientoServicioComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private auntenticationService: AuthenticationServiceService,
    private notificacion: NotificacionService
  ) {}

  ngOnInit() {
    let parametro = +this.route.snapshot.paramMap.get('accion');
    this.route.queryParams.subscribe(params => {
      if (
        params.registradoServicio !== undefined &&
        params.registradoServicio === 'true'
      ) {
        this.notificacion.msjSuccess(
          'Registro de Servicio Consulta satisfactorio!',
          'Usuario'
        );
      }
      if (
        params.actualizaServicio !== undefined &&
        params.actualizaServicio === 'true'
      ) {
        this.notificacion.msjSuccess(
          'Actualización de Servicio Consulta satisfactorio!',
          'Usuario'
        );
      }
    });
  }
}
