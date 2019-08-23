import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ExpedienteService } from '../../share/expediente.service';
import { Actividad } from '../../share/models/actividad';
import { ActividadEntidad} from '../../share/models/actividad-entidad';
import { NotificationService } from 'src/app/share/notification.service';
import { Expediente } from 'src/app/share/models/expediente';

@Component({
  selector: 'app-create-actividad-expediente',
  templateUrl: './create-actividad-expediente.component.html',
  styleUrls: ['./create-actividad-expediente.component.css']
})
export class CreateActividadExpedienteComponent implements OnInit {
  datos: Actividad;
  error: any;
  actividad: ActividadEntidad;
  constructor(
    private router: Router,
    private expedienteService: ExpedienteService,
    private notification: NotificationService
  ) { }

  ngOnInit() {}


  onSubmit(obj: ActividadEntidad) {
    return this.expedienteService.createActividadExp(obj).subscribe(
      (respuesta: Actividad) => {
        this.datos = respuesta;
        this.actividad = this.datos.Actividad[0];
        this.router.navigate(['./mantExpediente/listaActividadExp'], {
          queryParams: {create: 'true'}
        });
      }
    );
  }
}
