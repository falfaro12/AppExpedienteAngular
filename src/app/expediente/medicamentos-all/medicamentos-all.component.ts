import { Component, OnInit } from '@angular/core';
import { MedicamentoEntidad } from 'src/app/share/models/medicamento-entidad';
import { Router, ActivatedRoute } from '@angular/router';
import { NotificationService } from 'src/app/share/notification.service';
import { Expediente } from 'src/app/share/models/expediente';
import { ExpedienteEntidad } from 'src/app/share/models/expediente-entidad';
import { ExpedienteService } from 'src/app/share/expediente.service';

@Component({
  selector: 'app-medicamentos-all',
  templateUrl: './medicamentos-all.component.html',
  styleUrls: ['./medicamentos-all.component.css']
})
export class MedicamentosAllComponent implements OnInit {
  datos: Expediente;
  expediente: ExpedienteEntidad;
  medicamentos: MedicamentoEntidad[];
  error: {};
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private expedienteService: ExpedienteService
  ) { }

  ngOnInit() {
    this.expedienteService.getMedicamentosExp().subscribe(
      (respuesta: Expediente) => {
        this.datos = respuesta;
        this.expediente = this.datos.Expediente[0];
        this.medicamentos = this.expediente.medicamentos;
       },
       error => (this.error = error));
  }

}
