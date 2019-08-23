import { Component, OnInit } from '@angular/core';
import { ServicioConsulta } from 'src/app/share/models/ServicioConsulta';
import { UserEntidad } from 'src/app/share/models/user-entidad';
import { ServicioConsultasEntidad } from 'src/app/share/models/ServicioConsultas-entidad';
import { UsuarioLogin } from 'src/app/share/models/usuario-login';
import { AuthenticationServiceService } from 'src/app/share/authentication-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicioConsultaService } from 'src/app/share/servicio-consulta.service';
import { Horario } from 'src/app/share/models/horario';
import { HorarioEntidad } from 'src/app/share/models/horario-entidad';
import { AgendaService } from 'src/app/share/agenda.service';
import { Agenda } from 'src/app/share/models/agenda';
import { AgendaEntidad } from 'src/app/share/models/agenda_Entidad';
import { NotificationService } from 'src/app/share/notification.service';
import { Perfil } from 'src/app/share/models/Perfil';
import { PerfilEntidad } from 'src/app/share/models/Perfil-entidad';
import { PerfilService } from 'src/app/share/perfil.service';

@Component({
  selector: 'app-horario-detalle',
  templateUrl: './horario-detalle.component.html',
  styleUrls: ['./horario-detalle.component.css']
})
export class HorarioDetalleComponent implements OnInit {
  datos: Horario;
  horario: HorarioEntidad[];
  medico: UserEntidad;
  servicio: ServicioConsultasEntidad;
  perfildato: Perfil;
  perfiles: PerfilEntidad[];
  agenda: AgendaEntidad;
  id: any;

  error: {};

  currentUser: UsuarioLogin;
  constructor(
    private autentificacion: AuthenticationServiceService,
    private route: ActivatedRoute,
    private router: Router,
    private servicioCService: ServicioConsultaService,
    private agendaService: AgendaService,
    private notification: NotificationService,
    private perfilService: PerfilService
  ) {
    this.autentificacion.currentUser.subscribe(x => (this.currentUser = x));
    if (this.currentUser.user.rol_id !== 3) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    // tslint:disable-next-line: prefer-const
    let id = +this.route.snapshot.paramMap.get('id');

    this.servicioCService.getCitasMedico(id).subscribe(
      (respuesta: Horario) => {
        this.datos = respuesta;
        this.horario = this.datos.horarios;
        this.medico = this.horario[0].servicio__consultas.user;
        console.log(this.horario);
      },
      error => (this.error = error)
    );
    // suscripción para uso del servicio
    this.perfilService.getPerfilesAsociados().subscribe(
      (respuesta: Perfil) => {
        this.perfildato = respuesta;
        this.perfiles = this.perfildato.Perfil;
        console.log(this.perfiles);
      },
      error => (this.error = error)
    );
  }

  ngDoCheck() {
    if (this.datos) {
      this.servicio = this.datos.horarios[0].servicio__consultas;
    }
  }

  onBack() {
    this.router.navigate(['/cita/seleccionar_medico/'], {
      relativeTo: this.route
    });
  }
  onSubmit(obj: AgendaEntidad) {
    return this.agendaService.storeAgenda(obj).subscribe(
      (respuesta: void) => {
        this.router.navigate(['/cita/SeleccionaMedico'], {
          queryParams: { createCita: 'true' }
        });
      },
      error => {
        this.error = error;
        this.notification.msjValidacion(this.error);
      }
    );
  }


}
