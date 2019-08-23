import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ExpedienteService } from '../../share/expediente.service';
import { Expediente } from '../../share/models/expediente';
import { ExpedienteEntidad } from '../../share/models/expediente-entidad';
import { NotificationService } from 'src/app/share/notification.service';

@Component({
  selector: 'app-update-expediente',
  templateUrl: './update-expediente.component.html',
  styleUrls: ['./update-expediente.component.css']
})
export class UpdateExpedienteComponent implements OnInit {
  expediente: ExpedienteEntidad;
  datos : Expediente;
  error: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private expedienteService: ExpedienteService,
    private notification: NotificationService
  ) { }

  ngOnInit() {
    this.expedienteService.getExpediente().subscribe(
      (respuesta: Expediente) => {
        this.datos = respuesta;
        this.expediente = this.datos.Expediente[0];
      }
    );
  }

  onSubmit(obj: ExpedienteEntidad) {
    return this.expedienteService.updateExpediente(obj).subscribe(
      (respuesta: Expediente) => {
        this.datos = respuesta;
        this.router.navigate(['./mantExpediente'], {
          queryParams: {update: 'true'}
        });
      }
    );
  }

}
