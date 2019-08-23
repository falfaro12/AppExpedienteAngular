import { Component, OnInit } from '@angular/core';
import { Expediente } from '../../share/models/expediente';
import { ExpedienteEntidad } from '../../share/models/expediente-entidad';
import { ExpedienteService } from '../../share/expediente.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NotificationService } from 'src/app/share/notification.service';

@Component({
  selector: 'app-detalle-expediente',
  templateUrl: './detalle-expediente.component.html',
  styleUrls: ['./detalle-expediente.component.css']
})
export class DetalleExpedienteComponent implements OnInit {
  datos: Expediente;
  expediente: ExpedienteEntidad;
  error: {};
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
       },
       error => (this.error = error));
  }

  linkEditar(id: number){
    this.router.navigate(['./actualizarExpediente'], {relativeTo: this.route});
  }

}
