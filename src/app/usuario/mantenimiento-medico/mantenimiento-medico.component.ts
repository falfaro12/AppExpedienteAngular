import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mantenimiento-medico',
  templateUrl: './mantenimiento-medico.component.html',
  styleUrls: ['./mantenimiento-medico.component.css']
})
export class MantenimientoMedicoComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

}
