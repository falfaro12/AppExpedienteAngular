import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NotificationService } from 'src/app/share/notification.service';
import { Fumado } from '../../share/models/fumado';
import { FumadoEntidad } from '../../share/models/fumado-entidad';
import { ExpedienteService } from '../../share/expediente.service';

@Component({
  selector: 'app-fumado-all',
  templateUrl: './fumado-all.component.html',
  styleUrls: ['./fumado-all.component.css']
})
export class FumadoAllComponent implements OnInit {
  datos: Fumado;
  fumado: FumadoEntidad;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private expedienteService: ExpedienteService
  ) { }

  ngOnInit() {
    this.expedienteService.getFumado().subscribe(
      (respuesta: Fumado) => {
        this.datos = respuesta;
        this.fumado = this.datos.fumado;
      }
    );
  }

}
