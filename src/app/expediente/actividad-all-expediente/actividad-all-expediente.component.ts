import { Component, OnInit } from '@angular/core';
import { Actividad } from '../../share/models/actividad';
import { ActividadEntidad } from '../../share/models/actividad-entidad';
import { ExpedienteService } from '../../share/expediente.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NotificationService } from 'src/app/share/notification.service';
import { ExpedienteEntidad } from 'src/app/share/models/expediente-entidad';
import { Expediente } from '../../share/models/expediente';

@Component({
  selector: 'app-actividad-all-expediente',
  templateUrl: './actividad-all-expediente.component.html',
  styleUrls: ['./actividad-all-expediente.component.css']
})
export class ActividadAllExpedienteComponent implements OnInit {
  datos: Expediente;
  expediente: ExpedienteEntidad;
  actividades: ActividadEntidad[];
  error: {};
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private expedienteService: ExpedienteService,
    private notification: NotificationService
  ) { }

  ngOnInit() {
    let notifC = false;
    let notifM = false;
    // Mensajes
    this.route.queryParams.subscribe(params => {
      notifC = params.create || false;
      notifM = params.update || false;
    });
    if (notifC) {
      this.notification.msjSuccess('Actividad creada!', 'Crear Actividad');
    }
    if (notifM) {
      this.notification.msjSuccess(
        'Actividad actualizada!',
        'Actualizar Actividad'
      );
    }
    this.expedienteService.getActividades().subscribe(
      (respuesta: Expediente) => {
        this.datos = respuesta;
        this.expediente = this.datos.Expediente[0];
        this.actividades = this.expediente.activities;
      }
    );
  }
  linkEditar(id: number) {
    this.router.navigate(['../updateActividadExp/', id], {relativeTo: this.route});
  }
  linkCrear() {
    this.router.navigate(['../createActividadExp'], {relativeTo: this.route});
  }

}
