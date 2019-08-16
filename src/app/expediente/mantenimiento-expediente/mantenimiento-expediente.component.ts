import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mantenimiento-expediente',
  templateUrl: './mantenimiento-expediente.component.html',
  styleUrls: ['./mantenimiento-expediente.component.css']
})
export class MantenimientoExpedienteComponent implements OnInit {


  constructor(public router: Router) { }

  ngOnInit() {
  }

}
