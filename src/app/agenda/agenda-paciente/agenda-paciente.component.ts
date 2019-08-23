import { Component, OnInit } from '@angular/core';
import { Agenda } from 'src/app/share/models/agenda';
import { AgendaEntidad } from 'src/app/share/models/agenda_Entidad';
import { UsuarioLogin } from 'src/app/share/models/usuario-login';
import { AgendaService } from 'src/app/share/agenda.service';
import { AuthenticationServiceService } from 'src/app/share/authentication-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificacionService } from 'src/app/share/notificacion.service.service';

@Component({
  selector: 'app-agenda-paciente',
  templateUrl: './agenda-paciente.component.html',
  styleUrls: ['./agenda-paciente.component.css']
})
export class AgendaPacienteComponent implements OnInit {
  datos: Agenda;
  agenda: AgendaEntidad[];
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

  }




  ngOnInit() {
    this.getAgendas();
  }

  getAgendas() {
    this.agendaService.getAgendaPerfil().subscribe(
      (respuesta: Agenda) => {
        this.datos = respuesta;
        this.agenda = this.datos.citas;
        console.log(this.agenda);
      },
      error => (this.error = error)
    );
  }

  onSeleccionaAgenda(id: any) {
    this.router.navigate(['/agendaPaciente/detalleAgendePaciente/' + id], {
      relativeTo: this.route
    });
  }
}


