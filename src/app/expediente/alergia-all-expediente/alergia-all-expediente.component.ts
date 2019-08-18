import { Component, OnInit } from '@angular/core';
import { Alergia } from '../../share/models/alergia';
import { AlergiaEntidad } from '../../share/models/alergia-entidad';
import { AlergiaService } from '../../share/alergia.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NotificationService } from 'src/app/share/notification.service';
import { Expediente } from 'src/app/share/models/expediente';
import { ExpedienteEntidad } from 'src/app/share/models/expediente-entidad';
import { ExpedienteService } from 'src/app/share/expediente.service';

@Component({
  selector: 'app-alergia-all-expediente',
  templateUrl: './alergia-all-expediente.component.html',
  styleUrls: ['./alergia-all-expediente.component.css']
})
export class AlergiaAllExpedienteComponent implements OnInit {
  datos: Expediente;
  expediente: ExpedienteEntidad;
  alergias: AlergiaEntidad[];
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
      this.notification.msjSuccess('Alergia creada!', 'Crear Alergia');
    }
    if (notifM) {
      this.notification.msjSuccess(
        'Alergia actualizada!',
        'Actualizar Alergia'
      );
    }
    this.expedienteService.getAlergiasExp().subscribe(
      (respuesta: Expediente) => {
        this.datos = respuesta;
        this.expediente = this.datos.Expediente[0];
        this.alergias = this.expediente.alergias;
       },
       error => (this.error = error));
  }

  linkEditar(id: number) {
    this.router.navigate(['../updateAlergiaExp/', id], {relativeTo: this.route});
  }
  linkCrear() {
    this.router.navigate(['../createAlergiaExp'], {relativeTo: this.route});
  }
}
