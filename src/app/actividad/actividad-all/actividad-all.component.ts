import { Component, OnInit } from '@angular/core';
import { Actividad } from 'src/app/share/models/actividad';
import { ActividadEntidad } from 'src/app/share/models/actividad-entidad';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from 'src/app/share/notification.service';
import { ActividadService } from 'src/app/share/actividad.service';

@Component({
  selector: 'app-actividad-all',
  templateUrl: './actividad-all.component.html',
  styleUrls: ['./actividad-all.component.css']
})
export class ActividadAllComponent implements OnInit {
  datos: Actividad;
  actividad: ActividadEntidad;
  error: {};
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private actividadService: ActividadService,
    private notification: NotificationService
  ) {}

  ngOnInit() {
   // suscripcion para el consumo del servicio
   this.actividadService
   .getActividad()
   .subscribe(
     (respuesta: Actividad) => (this.datos = respuesta),
     error => (this.error = error)
   );
  }

  obtenerImagen(ruta_imagen: string) {
    return this.actividadService.obtenerImagenService(ruta_imagen);
  }
}
