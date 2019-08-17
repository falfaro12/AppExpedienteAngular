import { Component, OnInit } from '@angular/core';
import { Alergia } from 'src/app/share/models/alergia';
import { AlergiaEntidad } from 'src/app/share/models/alergia-entidad';
import { ActivatedRoute, Router } from '@angular/router';
import { AlergiaService } from 'src/app/share/alergia.service';
import { NotificationService } from 'src/app/share/notification.service';

@Component({
  selector: 'app-alergia-drop',
  templateUrl: './alergia-drop.component.html',
  styleUrls: ['./alergia-drop.component.css']
})
export class AlergiaDropComponent implements OnInit {
  datos: Alergia;
  alergias: AlergiaEntidad;
  error: {};
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alergiaService: AlergiaService,
    private notification: NotificationService
  ) {}

  ngOnInit() {
    // suscripcion para el consumo del servicio
    this.alergiaService
      .getAlergiasEliminadas()
      .subscribe(
        (respuesta: Alergia) => (this.datos = respuesta),
        error => (this.error = error)
      );
  }

  linkRestaurar(id: number) {
    return this.alergiaService
      .restaurarlergia(id)
      .subscribe((respuesta: void) => {
        this.router.navigate(['/alergiaM/lista'], {
          queryParams: { restaurar: 'true' }
        });
      });
  }
  obtenerImagen( ruta_imagen: string) {
    return this.alergiaService.obtenerImagenService(ruta_imagen);
  }
}
