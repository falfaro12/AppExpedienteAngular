import { Component, OnInit } from '@angular/core';
import { Agenda } from 'src/app/share/models/agenda';
import { AgendaEntidad } from 'src/app/share/models/agenda_Entidad';
import { UsuarioLogin } from 'src/app/share/models/usuario-login';
import { AgendaService } from 'src/app/share/agenda.service';
import { AuthenticationServiceService } from 'src/app/share/authentication-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificacionService } from 'src/app/share/notificacion.service.service';

@Component({
  selector: 'app-agenda-paciente-detalle',
  templateUrl: './agenda-paciente-detalle.component.html',
  styleUrls: ['./agenda-paciente-detalle.component.css']
})
export class AgendaPacienteDetalleComponent implements OnInit {
  datos: Agenda;
  agenda: AgendaEntidad;
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
    if (this.currentUser.user.rol_id !== 3) {
      this.router.navigate(['/']);
    }
  }
  ngOnInit() {
    // tslint:disable-next-line: prefer-const
    let id = +this.route.snapshot.paramMap.get('id');

    // suscripción para uso del servicio
    this.agendaService.getDetalleAgendaPaciente(id).subscribe(
      (respuesta: Agenda) => {
        this.datos = respuesta;
        this.agenda = this.datos.citas[0];
      },
      error => (this.error = error)
    );
  }

  ngDoCheck() {
    if (this.datos) {
      this.agenda = this.datos.citas[0];
    }
  }
  onBack() {
    this.router.navigate(['/agendaPaciente/agendaP']);
  }
}
