import { Component, OnInit } from '@angular/core';
import { Alergia } from 'src/app/share/models/alergia';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/share/notification.service';
import { AlergiaEntidad } from '../../share/models/alergia-entidad';
import { ExpedienteService } from 'src/app/share/expediente.service';

@Component({
  selector: 'app-create-alergia-expediente',
  templateUrl: './create-alergia-expediente.component.html',
  styleUrls: ['./create-alergia-expediente.component.css']
})
export class CreateAlergiaExpedienteComponent implements OnInit {
  datos: Alergia;
  alergia: AlergiaEntidad;
  error: any;
  constructor(
    private router: Router,
    private expedienteService: ExpedienteService,
    private notification: NotificationService
  ) { }

  ngOnInit() {
  }

  onSubmit(obj: AlergiaEntidad) {
    return this.expedienteService.createAlergiaExp(obj).subscribe(
      (respuesta: Alergia) => {
        this.datos = respuesta;
        this.router.navigate(['./mantExpediente/listaAlergiasExp'], {
          queryParams: { create: 'true' }
        });
      },
      error => {
        this.error = error;
        this.notification.msjValidacion(this.error);
      }
    );
  }

}
