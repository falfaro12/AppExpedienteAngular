import { Component, OnInit } from '@angular/core';
import { CompartirExpediente } from 'src/app/share/models/compartir';
import { Usuario } from 'src/app/share/models/usuario';
import { UserEntidad } from 'src/app/share/models/user-entidad';
import { UsuarioLogin } from 'src/app/share/models/usuario-login';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificacionService } from 'src/app/share/notificacion.service.service';
import { CompartirService } from 'src/app/share/compartir.service';
import { AuthenticationServiceService } from 'src/app/share/authentication-service.service';
import { CompartirExpedienteEntidad } from 'src/app/share/models/compartir-entidad';

@Component({
  selector: 'app-compartir-store',
  templateUrl: './compartir-store.component.html',
  styleUrls: ['./compartir-store.component.css']
})
export class CompartirStoreComponent implements OnInit {
  datos: CompartirExpediente;
  error: {};
  pacientes: Usuario;
  perfilID: number;
  pacienteSelected: UserEntidad;

  currentUser: UsuarioLogin;
  constructor(

    private route: ActivatedRoute,
    private router: Router,
    private notificacion: NotificacionService,
    private autentificacion: AuthenticationServiceService,
    private comparteService: CompartirService
  ) {
    this.autentificacion.currentUser.subscribe(x => (this.currentUser = x));
  }

  ngOnInit() {
    // tslint:disable-next-line: radix
    let id = + this.route.snapshot.paramMap.get('id');
    this.perfilID = id;
    this.comparteService.getUsuarios().subscribe(
      (respuesta: Usuario) => {
        this.pacientes = respuesta;
        console.log(this.pacientes);
      },
      error => (this.error = error)
    );
  }

  onSubmit(obj: CompartirExpedienteEntidad) {
    return this.comparteService.storeCompartirExpediente(obj).subscribe(
      (respuesta: CompartirExpediente) => {
        this.datos = respuesta;
        this.router.navigate(
          ['/MantPerfil/lista'],
          {
            queryParams: { enviar: 'true' }
          }
        );
      },
      error => {
        this.error = error;
        this.notificacion.msjValidacion(this.error);
      }
    );
  }

  onBack() {
    this.router.navigate(['/MantPerfil/lista']);
  }
  onChange(selectedValue) {
    const filter = this.pacientes.Medicos.filter(x =>
      x.id.toString().includes(selectedValue)
    );
    this.pacienteSelected = filter[0];
  }

}
