import { Component, OnInit } from '@angular/core';
import { UserEntidad } from 'src/app/share/models/user-entidad';
import { Router } from '@angular/router';
import { AuthenticationServiceService } from 'src/app/share/authentication-service.service';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css']
})
export class ConfiguracionComponent implements OnInit {


  datos: UserEntidad;

  error: any;


  constructor(private router: Router, private autentificacion: AuthenticationServiceService) {
    // llama la funcion para que traiga los roles

  }
  // cuando envia los datos
  onsubmit(obj: UserEntidad) {
    this.autentificacion.createUser(obj).subscribe((respuesta: UserEntidad) => (this.datos),  error => (this.error = error),
    // complete
    () => {
      this.router.navigate(['/home/inicio']);
    }
    );
  }


  ngOnInit() {
  }

}
