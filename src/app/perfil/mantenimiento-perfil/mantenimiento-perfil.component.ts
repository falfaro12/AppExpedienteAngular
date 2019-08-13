import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationServiceService } from 'src/app/share/authentication-service.service';
import { NotificacionService } from 'src/app/share/notificacion.service.service';

@Component({
  selector: 'app-mantenimiento-perfil',
  templateUrl: './mantenimiento-perfil.component.html',
  styleUrls: ['./mantenimiento-perfil.component.css']
})
export class MantenimientoPerfilComponent implements OnInit {
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
        params.registroPerfil !== undefined &&
        params.registroPerfil === 'true'
      ) {
        this.notificacion.msjSuccess(
          'Registro de Perfil satisfactorio!',
          'Usuario'
        );
      }
      if (
        params.actualizaPerfil !== undefined &&
        params.actualizaPerfil === 'true'
      ) {
        this.notificacion.msjSuccess(
          'Actualización de Perfil satisfactorio!',
          'Usuario'
        );
      }
    });
  }
}
