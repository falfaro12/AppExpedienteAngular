import { Component, OnInit } from '@angular/core';
import { Alergia } from '../../share/models/alergia';
import { AlergiaEntidad } from '../../share/models/alergia-entidad';
import { AlergiaService } from '../../share/alergia.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NotificationService } from 'src/app/share/notification.service';

@Component({
  selector: 'app-alergia-all',
  templateUrl: './alergia-all.component.html',
  styleUrls: ['./alergia-all.component.css']
})
export class AlergiaAllComponent implements OnInit {
  datos: Alergia;
  alergias: AlergiaEntidad;
  error: {};
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alergiaService: AlergiaService,
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
     // suscripcion para el consumo del servicio
    this.alergiaService.getAlergias().subscribe((respuesta: Alergia) => (this.datos = respuesta), error => (this.error = error));
  }
  linkEditar(id: number) {
    this.router.navigate(['/alergia/update/', id], {relativeTo: this.route});
  }
  linkEliminar(id: number) {
    this.router.navigate(['/alergia/update/', id], {relativeTo: this.route});
  }




}
