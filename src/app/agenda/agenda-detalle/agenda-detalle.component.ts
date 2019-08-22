import { Component, OnInit } from '@angular/core';
import { Horario } from 'src/app/share/models/horario';
import { HorarioEntidad } from 'src/app/share/models/horario-entidad';
import { UsuarioLogin } from 'src/app/share/models/usuario-login';
import { AgendaService } from 'src/app/share/agenda.service';
import { AuthenticationServiceService } from 'src/app/share/authentication-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificacionService } from 'src/app/share/notificacion.service.service';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-agenda-detalle',
  templateUrl: './agenda-detalle.component.html',
  styleUrls: ['./agenda-detalle.component.css']
})
export class AgendaDetalleComponent implements OnInit {
  datos: Horario;
  horario: HorarioEntidad;
  error: {};
  currentUser: UsuarioLogin;

  constructor(
    private agendaService: AgendaService,
    private autentificacion: AuthenticationServiceService,
    private route: ActivatedRoute,
    private router: Router,
    private notificacion: NotificacionService
  ) {
    this.autentificacion.currentUser.subscribe(x => (this.currentUser = x));
    if (this.currentUser.user.rol_id !== 2) {
      this.router.navigate(['/']);
    }
  }
  ngOnInit() {
    // tslint:disable-next-line: prefer-const
    let id = +this.route.snapshot.paramMap.get('id');

    // suscripción para uso del servicio
    this.agendaService.getDetalleAgenda(id).subscribe(
      (respuesta: Horario) => {
        this.datos = respuesta;
        this.horario = this.datos.horarios[0];
      },
      error => (this.error = error)
    );
  }

  ngDoCheck() {
    if (this.datos) {
      this.horario = this.datos.horarios[0];
    }
  }
  onBack() {
    this.router.navigate(['/agendaMedico/agenda']);
  }
}
