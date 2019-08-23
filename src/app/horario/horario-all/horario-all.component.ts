import { Component, OnInit } from '@angular/core';
import { Horario } from 'src/app/share/models/horario';
import { HorarioEntidad } from 'src/app/share/models/horario-entidad';
import { ActivatedRoute, Router } from '@angular/router';
import { HorarioService } from 'src/app/share/horario.service';
import { NotificationService } from 'src/app/share/notification.service';

@Component({
  selector: 'app-horario-all',
  templateUrl: './horario-all.component.html',
  styleUrls: ['./horario-all.component.css']
})
export class HorarioAllComponent implements OnInit {
  datos: Horario;
  horarios: HorarioEntidad[];
  error: {};
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private horarioServicie: HorarioService,
    private notification: NotificationService
  ) {}

  ngOnInit() {
    let notifC = false;
    let notieM = false;

    // Mensajes
    this.route.queryParams.subscribe(params => {
      notifC = params.registrarHorario || false;
      notieM = params.deleteHorario || false;
    });
    if (notifC) {
      this.notification.msjSuccess('Horario creado', 'Crear Horario');
    }

    if (notieM) {
      this.notification.msjSuccess('Horario Eliminado!', 'Eliminar');
    }
    this.mostrarHorarios();
  }

  mostrarHorarios() {
    // suscripcion para el consumo del servicio
    this.horarioServicie.getHorariosSinAsignar().subscribe(
      (respuesta: Horario) => {
        this.datos = respuesta;
        this.horarios = this.datos.horarios;
        console.log(this.horarios);
      },
      error => (this.error = error)
    );
  }
  linkEliminar(id: number) {
    return this.horarioServicie.dropHorario(id).subscribe(
      (respuesta: void) => {
        this.router.navigate(['/horarioM/lista'], {
          queryParams: { deleteHorario: 'true' }
        });
      },
      error => {},
      () => {
        this.mostrarHorarios();
        this.notification.msjSuccess(
          'Eliminar Horario',
          'Horario eliminado exitosamente'
        );
      }
    );
  }
}
