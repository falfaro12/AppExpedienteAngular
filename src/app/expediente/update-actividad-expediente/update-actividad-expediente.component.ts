import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ExpedienteService } from '../../share/expediente.service';
import { Actividad } from '../../share/models/actividad';
import { ActividadEntidad} from '../../share/models/actividad-entidad';
import { NotificationService } from 'src/app/share/notification.service';
import { ActividadPivotEntidad } from '../../share/models/actividad-pivot-entidad';

@Component({
  selector: 'app-update-actividad-expediente',
  templateUrl: './update-actividad-expediente.component.html',
  styleUrls: ['./update-actividad-expediente.component.css']
})
export class UpdateActividadExpedienteComponent implements OnInit {
  actividad: ActividadEntidad;
  datos: Actividad;
  error: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private expedienteService: ExpedienteService,
    private notification: NotificationService
  ) { }

  compareFn = this._compareFn.bind(this);
  _compareFn(a, b) {
    // verificar si los identificadores únicos son iguales
    return a.categoria === b.categoria;
  }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.expedienteService.getActividad(id).subscribe(
      (respuesta: Actividad) => {
        this.datos = respuesta;
        this.actividad = this.datos.Actividad[0];
      }
    );
  }

  onSubmit(obj: ActividadPivotEntidad,){
    return this.expedienteService.updateActivitiesExp(obj).subscribe(
      (respuesta: Actividad) => {
        this.datos = respuesta;
        this.router.navigate(['/mantExpediente/listaActividadExp'], {
          queryParams: {update: 'true'}
        });
      }
    );
  }

  onBack() {
    this.router.navigate(['./listaActividadExp']);
  }

}
