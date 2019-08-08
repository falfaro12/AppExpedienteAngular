import { Component, OnInit, DoCheck } from '@angular/core';
import { AlergiaEntidad } from '../../share/models/alergia-entidad';
import { AlergiaService } from 'src/app/share/alergia.service';
import { NgForm } from '@angular/forms';
import { Alergia } from 'src/app/share/models/alergia';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/share/notification.service';
export interface ErrorEntidad {
  errors: { field: string; message: string }[];
}
@Component({
  selector: 'app-create-alergia',
  templateUrl: './create-alergia.component.html',
  styleUrls: ['./create-alergia.component.css']
})
export class CreateAlergiaComponent implements OnInit {
  datos: Alergia;
  error: any;
  constructor(
    private router: Router,
    private alergiaService: AlergiaService,
    private notification: NotificationService
  ) { }

  ngOnInit() {
  }
  ngDoCheck(){}

  onSubmit(obj: AlergiaEntidad) {
    return this.alergiaService.createAlergia(obj).subscribe(
      (respuesta: Alergia) => {
        this.datos = respuesta;
        this.router.navigate(['/alergiaM/lista'], {
          queryParams: {create: 'true'}
        });
      },
      error => {
        this.error = error;
        this.notification.msjValidacion(this.error);
      }
    );
  }
  onBack(){
    this.router.navigate(['/alergiaM']);
  }

}
