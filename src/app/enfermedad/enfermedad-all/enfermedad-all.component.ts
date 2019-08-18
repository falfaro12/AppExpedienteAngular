import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EnfermedadService } from 'src/app/share/enfermedad.service';
import { NotificationService } from 'src/app/share/notification.service';
import { Enfermedad } from 'src/app/share/models/enfermedad';
import { EnfermedadEntidad } from 'src/app/share/models/enfermedad-entidad';

@Component({
  selector: 'app-enfermedad-all',
  templateUrl: './enfermedad-all.component.html',
  styleUrls: ['./enfermedad-all.component.css']
})
export class EnfermedadAllComponent implements OnInit {
  datos: Enfermedad;
  enfermedad: EnfermedadEntidad;
  error: {};
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private enfermedadService: EnfermedadService,
    private notification: NotificationService
  ) {}

  ngOnInit() {
   // suscripcion para el consumo del servicio
   this.enfermedadService
   .getEnfermedad()
   .subscribe(
     (respuesta: Enfermedad) => (this.datos = respuesta),
     error => (this.error = error)
   );
  }

  obtenerImagen(ruta_imagen: string) {
    return this.enfermedadService.obtenerImagenService(ruta_imagen);
  }
}
