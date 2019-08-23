import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ExpedienteService } from '../../share/expediente.service';
import { Alcohol } from '../../share/models/alcohol';
import { AlcoholEntidad} from '../../share/models/alcohol-entidad';
import { NotificationService } from 'src/app/share/notification.service';

@Component({
  selector: 'app-update-alcohol',
  templateUrl: './update-alcohol.component.html',
  styleUrls: ['./update-alcohol.component.css']
})
export class UpdateAlcoholComponent implements OnInit {
  alcohol: AlcoholEntidad;
  datos: Alcohol;
  error: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private expedienteService: ExpedienteService,
    private notification: NotificationService
  ) { }

  compareFn = this._compareFn.bind(this);
  _compareFn(a, b) {
    // verificar si los identificadores únicos son iguales
    return a.categoria === b.categoria;
  }

  ngOnInit() {
    this.expedienteService.getAlcohol().subscribe(
      (respuesta: Alcohol) => {
        this.datos = respuesta;
        this.alcohol = this.datos.alcohol;
      }
    );
  }

  onSubmit(obj: AlcoholEntidad){
    return this.expedienteService.updateAlcohol(obj.id, obj).subscribe(
      (respuesta: Alcohol) => {
        this.datos = respuesta;
        this.router.navigate(['mantExpediente/listaAlcohol'], {
          queryParams: {update: 'true'}
        });
      }
    );
  }
  onBack() {
    this.router.navigate(['/mantExpediente/listaAlcohol']);
  }

}
