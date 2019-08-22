import { Component, OnInit } from '@angular/core';
import { HorarioEntidad } from 'src/app/share/models/horario-entidad';
import { UsuarioLogin } from 'src/app/share/models/usuario-login';
import { Horario } from 'src/app/share/models/horario';
import { AgendaService } from 'src/app/share/agenda.service';
import { AuthenticationServiceService } from 'src/app/share/authentication-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificacionService } from 'src/app/share/notificacion.service.service';

@Component({
  selector: 'app-agenda-show',
  templateUrl: './agenda-show.component.html',
  styleUrls: ['./agenda-show.component.css']
})
export class AgendaShowComponent implements OnInit {
  datos: Horario;
  horarioCita: HorarioEntidad[];
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
    this.getAgendas();
  }

  getAgendas() {
    this.agendaService.getAgendaMedico().subscribe(
      (respuesta: Horario) => {
        this.datos = respuesta;
        this.horarioCita = this.datos.horarios;
      },
      error => (this.error = error)
    );
  }

  onSeleccionaAgenda(id: any) {
    this.router.navigate(['/agendaMedico/detalle/' + id], {
      relativeTo: this.route
    });
  }
}

