import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlergiaService } from 'src/app/share/alergia.service';
import { AlergiaEntidad } from 'src/app/share/models/alergia-entidad';
import { Alergia } from 'src/app/share/models/alergia';
import { NotificationService } from 'src/app/share/notification.service';

@Component({
  selector: 'app-update-alergia',
  templateUrl: './update-alergia.component.html',
  styleUrls: ['./update-alergia.component.css']
})
export class UpdateAlergiaComponent implements OnInit {
  alergia: AlergiaEntidad;
  datos: Alergia;
  error: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alergiaService: AlergiaService,
    private notification: NotificationService
  ) { }

  compareFn = this._compareFn.bind(this);
  _compareFn(a, b) {
    // verificar si los identificadores únicos son iguales
    return a.categoria === b.categoria;
  }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.alergiaService.getAlergia(id).subscribe(
      (respuesta: Alergia) => {
        this.datos = respuesta;
        this.alergia = this.datos.alergia[0];
      },
      error => (this.error = error)
    );
  }

  ngDoCheck() {}

  onSubmit(obj: AlergiaEntidad){
    return this.alergiaService.updateAlergia(obj.id, obj).subscribe(
      (respuesta: Alergia) => {
        this.datos = respuesta;
        this.router.navigate(['/alergiaM/lista'], {
          queryParams: {update: 'true'}
        });
      }
    );
  }
  onBack() {
    this.router.navigate(['/mantExpediente/listaAlergiasExp']);
  }
}
