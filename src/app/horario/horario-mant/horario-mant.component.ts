import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-horario-mant',
  templateUrl: './horario-mant.component.html',
  styleUrls: ['./horario-mant.component.css']
})
export class HorarioMantComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

}
