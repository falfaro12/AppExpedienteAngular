import { Component, OnInit } from '@angular/core';
import { Actividad } from '../../share/models/actividad';
import { ActividadEntidad } from '../../share/models/actividad-entidad';
import { ActividadService } from '../../share/actividad.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NotificationService } from 'src/app/share/notification.service';

@Component({
  selector: 'app-actividad-all-expediente',
  templateUrl: './actividad-all-expediente.component.html',
  styleUrls: ['./actividad-all-expediente.component.css']
})
export class ActividadAllExpedienteComponent implements OnInit {
  datos: Actividad;
  actividades: ActividadEntidad;
  error: {};
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private actividadService: ActividadService,
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
      this.notification.msjSuccess('Alergia creada!', 'Crear Alergia');
    }
    if (notifM) {
      this.notification.msjSuccess(
        'Alergia actualizada!',
        'Actualizar Alergia'
      );
    }
  }
  linkEditar(id: number) {
    this.router.navigate(['../updateActividadExp/', id], {relativeTo: this.route});
  }
  linkCrear() {
    this.router.navigate(['../createActividadExp'], {relativeTo: this.route});
  }

}
