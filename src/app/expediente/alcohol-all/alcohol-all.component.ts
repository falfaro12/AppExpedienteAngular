import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NotificationService } from 'src/app/share/notification.service';
import { Alcohol } from '../../share/models/alcohol';
import { AlcoholEntidad } from '../../share/models/alcohol-entidad';
import { ExpedienteService } from '../../share/expediente.service';

@Component({
  selector: 'app-alcohol-all',
  templateUrl: './alcohol-all.component.html',
  styleUrls: ['./alcohol-all.component.css']
})
export class AlcoholAllComponent implements OnInit {
  datos: Alcohol;
  alcohol: AlcoholEntidad;
  error: {};
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private expedienteService: ExpedienteService,
    private notification: NotificationService
  ) { }

  ngOnInit() {
    let notifM = false;
    // Mensajes
    this.route.queryParams.subscribe(params => {
      notifM = params.update || false;
    });
    if (notifM) {
      this.notification.msjSuccess(
        'Registro actualizado!',
        'Actualizar Registro'
      );
    }
    this.expedienteService.getAlcohol().subscribe(
      (respuesta: Alcohol) => {
        this.datos = respuesta;
        this.alcohol = this.datos.alcohol;
      }
    )
  }

}
