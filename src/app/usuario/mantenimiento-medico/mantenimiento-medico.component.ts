import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NotificacionService } from 'src/app/share/notificacion.service.service';
import { AuthenticationServiceService } from 'src/app/share/authentication-service.service';

@Component({
  selector: 'app-mantenimiento-medico',
  templateUrl: './mantenimiento-medico.component.html',
  styleUrls: ['./mantenimiento-medico.component.css']
})
export class MantenimientoMedicoComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private auntenticationService: AuthenticationServiceService,
    private notificacion: NotificacionService

  ) {

  }

  ngOnInit() {
    let parametro = +this.route.snapshot.paramMap.get("accion");
    this.route.queryParams.subscribe(params => {
      if (params.registrado !== undefined && params.registradoMedico === "true") {
        this.notificacion.msjSuccess(
          "Registro de médico satisfactorio!",
          "Usuario"
        );
      }
    });
  }

}
