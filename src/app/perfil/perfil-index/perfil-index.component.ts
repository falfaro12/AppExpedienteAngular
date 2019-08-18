import { Component, OnInit } from '@angular/core';
import { UsuarioLogin } from 'src/app/share/models/usuario-login';
import { Perfil } from 'src/app/share/models/Perfil';
import { PerfilEntidad } from 'src/app/share/models/Perfil-entidad';
import { ActivatedRoute, Router } from '@angular/router';
import { PerfilService } from 'src/app/share/perfil.service';
import { NotificacionService } from 'src/app/share/notificacion.service.service';
import { AuthenticationServiceService } from 'src/app/share/authentication-service.service';
import { ExpedienteService } from 'src/app/share/expediente.service';

@Component({
  selector: 'app-perfil-index',
  templateUrl: './perfil-index.component.html',
  styleUrls: ['./perfil-index.component.css']
})
export class PerfilIndexComponent implements OnInit {
  UsuarioActual: UsuarioLogin;
  datos: Perfil;
  perfil: PerfilEntidad[];
  error: {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private perfilService: PerfilService,
    private notificacion: NotificacionService ,
    private autentification: AuthenticationServiceService,
    private expedienteService: ExpedienteService
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
    this.perfilService.getPerfilesAsociados().subscribe(
      (respuesta: Perfil) => {
        this.datos = respuesta;
        this.perfil = this.datos.Perfil;
        console.log(this.perfil);
      },
      error => (this.error = error)
    );
  }
  linkEditar(id: number) {

    this.router.navigate(['/perfil/detalle/', id], {
      relativeTo: this.route
    });
  }
  linkExp(id: number) {
    this.expedienteService.setCurrentExp(id);
    this.router.navigate(['../../mantExpediente/']);
  }
}
// Funcion que se conecta con el servicio para invocar a la funcion de obtener restaurantes
