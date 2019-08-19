import { Component, OnInit } from '@angular/core';
import { DeseaseEntidad } from 'src/app/share/models/desease-entidad';
import { Router, ActivatedRoute } from '@angular/router';
import { NotificationService } from 'src/app/share/notification.service';
import { Expediente } from 'src/app/share/models/expediente';
import { ExpedienteEntidad } from 'src/app/share/models/expediente-entidad';
import { ExpedienteService } from 'src/app/share/expediente.service';

@Component({
  selector: 'app-enfermedad-all-expediente',
  templateUrl: './enfermedad-all-expediente.component.html',
  styleUrls: ['./enfermedad-all-expediente.component.css']
})
export class EnfermedadAllExpedienteComponent implements OnInit {
  datos: Expediente;
  expediente: ExpedienteEntidad;
  deseases: DeseaseEntidad[];
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
      this.notification.msjSuccess('enfermedad creada!', 'Crear Enfermedad');
    }
    if (notifM) {
      this.notification.msjSuccess(
        'Enfermedad actualizada!',
        'Actualizar Enfermedad'
      );
    }

    this.expedienteService.getEnfermedadesExp().subscribe(
      (respuesta: Expediente) => {
        this.datos = respuesta;
        this.expediente = this.datos.Expediente[0];
        this.deseases = this.expediente.deseases;
       },
       error => (this.error = error));
  }

}
