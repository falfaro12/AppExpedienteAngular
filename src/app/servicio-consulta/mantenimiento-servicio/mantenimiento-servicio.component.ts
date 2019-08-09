import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mantenimiento-servicio',
  templateUrl: './mantenimiento-servicio.component.html',
  styleUrls: ['./mantenimiento-servicio.component.css']
})
export class MantenimientoServicioComponent implements OnInit {

  constructor(public router: Router) {}

  ngOnInit() {
  }

}
