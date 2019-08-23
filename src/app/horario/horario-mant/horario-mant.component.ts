import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NotificationService } from 'src/app/share/notification.service';

@Component({
  selector: 'app-horario-mant',
  templateUrl: './horario-mant.component.html',
  styleUrls: ['./horario-mant.component.css']
})
export class HorarioMantComponent implements OnInit {

  constructor(public router: Router, private route: ActivatedRoute,   private notification: NotificationService) { }

ngOnInit() {
  let notifC = false;
  let notieM = false;

  // Mensajes
  this.route.queryParams.subscribe(params => {
    notifC = params.registrarHorario || false;
    notieM = params.deleteHorario || false;
  });
  if (notifC) {
    this.notification.msjSuccess('Horario creado', 'Crear Horario');
  }

  if (notieM) {
    this.notification.msjSuccess(
      'Horario Eliminado!',
      'Eliminar'
    );
  }

  }

}
