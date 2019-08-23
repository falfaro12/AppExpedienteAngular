import { Component, OnInit } from '@angular/core';
import { ServicioConsulta } from 'src/app/share/models/ServicioConsulta';
import { ServicioConsultasEntidad } from 'src/app/share/models/ServicioConsultas-entidad';
import { ServicioConsultaService } from 'src/app/share/servicio-consulta.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificacionService } from 'src/app/share/notificacion.service.service';
import { AuthenticationServiceService } from 'src/app/share/authentication-service.service';
import { CustomHandlerErrorService } from 'src/app/share/custom-handler-error-service.service';
import { UsuarioLogin } from 'src/app/share/models/usuario-login';

@Component({
  selector: 'app-medicos-index',
  templateUrl: './medicos-index.component.html',
  styleUrls: ['./medicos-index.component.css']
})
export class MedicosIndexComponent implements OnInit {
  datos: ServicioConsulta;
  servicios: ServicioConsultasEntidad[];
  error: {};
  currentUser: UsuarioLogin;
  constructor(
    private servicioCService: ServicioConsultaService,
    private route: ActivatedRoute,
    private router: Router,
    private AuthenticationService: AuthenticationServiceService,
    private handler: CustomHandlerErrorService
  ) {
    this.AuthenticationService.currentUser.subscribe(x => (this.currentUser = x));
    if (this.currentUser.user.rol_id !== 3) {
      this.router.navigate(['/']);
    }
  }

  // tslint:disable-next-line: variable-name
  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.datos.servicio = this.listFilter
      ? this.filtrarVJ(this.listFilter)
      : this.servicios;
  }

  filtrarVJ(filterBy: string): ServicioConsultasEntidad[] {
    filterBy = filterBy.toLocaleLowerCase();
    // x.nombre.toLocaleLowerCase().indexOf(filterBy) !== -1
    if (filterBy) {
      const lista = this.servicios.filter(
        x =>
          x.especialidad.descripcion.toLocaleLowerCase().includes(filterBy) ||
          x.user.nombre.toLocaleLowerCase().includes(filterBy) ||
          x.user.primerApellido.toLocaleLowerCase().includes(filterBy) ||
          x.user.segundoApellido.toLocaleLowerCase().includes(filterBy)
      );
      return lista;
    }
  }
  ngOnInit() {
    this.servicioCService.getServicioConsultaAll().subscribe(
      (respuesta: ServicioConsulta) => {
        this.datos = respuesta;
        this.servicios = this.datos.servicio;
      },
      error => (this.error = error)
    );
  }

  onSeleccionaMedico(id: any) {
    this.router.navigate(['/cita/horarios_citas/' + id], {
      relativeTo: this.route
    });
  }
}
