import { Component, OnInit } from '@angular/core';
import { UsuarioLogin } from 'src/app/share/models/usuario-login';
import { UserEntidad } from 'src/app/share/models/user-entidad';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationServiceService } from 'src/app/share/authentication-service.service';
import { NotificacionService } from 'src/app/share/notificacion.service.service';
import { Usuario } from 'src/app/share/models/usuario';
import { UsuarioMedicoEntidad } from 'src/app/share/models/usuarioMedico-entidad';

@Component({
  selector: 'app-index-medico',
  templateUrl: './index-medico.component.html',
  styleUrls: ['./index-medico.component.css']
})
export class IndexMedicoComponent implements OnInit {
  UsuarioActual: UsuarioLogin;
  usuarios: UsuarioMedicoEntidad[];
  datos: Usuario;
  error: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private Authentication: AuthenticationServiceService,
    private notificacion: NotificacionService
  ) {}

  ngOnInit() {
    let notifC = false;
    let notifM = false;
    // Mensajes
    this.route.queryParams.subscribe(params => {
      notifC = params.create || false;
      notifM = params.update || false;
    });
    if (notifC) {
      this.notificacion.msjSuccess('Médico creado!', 'Crear Médico');
    }

    // suscripción para uso del servicio
    this.Authentication.getMedicos().subscribe(
      (respuesta: Usuario) => {
        this.datos = respuesta;
        this.usuarios = this.datos.usaurios;
      },
      error => (this.error = error)
    );
  }

}
// Funcion que se conecta con el servicio para invocar a la funcion de obtener restaurantes

