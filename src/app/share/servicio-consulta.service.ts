import { Injectable } from '@angular/core';
import { UsuarioLogin } from './models/usuario-login';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from '@angular/common/http';
import { AuthenticationServiceService } from './authentication-service.service';
import { CustomHandlerErrorService } from './custom-handler-error-service.service';
import { ServicioConsulta } from './models/ServicioConsulta';
import { catchError, retry } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Especialidad } from './models/especialidad';
import { ServicioConsultasEntidad } from './models/ServicioConsultas-entidad';
import { Horario } from './models/horario';

@Injectable({
  providedIn: 'root'
})
export class ServicioConsultaService {
 currentUser: UsuarioLogin;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  ServerUrl = environment.apiURL;
  errorData: {};
  user: null;

  constructor(
    private http: HttpClient,
    private router: Router,
    private AuthenticationService: AuthenticationServiceService,
    private handler: CustomHandlerErrorService
  ) {
    this.AuthenticationService.currentUser.subscribe(
      x => (this.currentUser = x)
    );
  }
// HttpClient API get() method => Obtener resta
getServicio(id: any): Observable<ServicioConsulta> {
  return this.http.get<ServicioConsulta>(this.ServerUrl + 'expediente/cita/Servicio/' + id).pipe(
    retry(1),
    catchError(this.handler.handleError.bind(this))
  );
}
  createServicio(servicio: ServicioConsultasEntidad): Observable<ServicioConsulta> {
    let headers = new HttpHeaders();
    if (this.currentUser) {
      headers = headers.append(
        'Authorization',
        'Bearer' + this.currentUser.access_token
      );
    }
    servicio.id_doctor = this.currentUser.user.id;
    return this.http
    .post<ServicioConsulta>(this.ServerUrl + 'expediente/medico/agregarServicio', servicio, { headers })
    .pipe(catchError(this.handler.handleError.bind(this)));
  }
  updateServicio(id: any, servicioConsulta: ServicioConsultasEntidad): Observable<ServicioConsulta> {
    let headers = new HttpHeaders();
    if (this.currentUser) {
      headers = headers.append(
        'Authorization',
        'Bearer' + this.currentUser.access_token
      );
    }
    servicioConsulta.id_doctor = this.currentUser.user.id;
    return this.http
    .patch<ServicioConsulta>(this.ServerUrl + 'expediente/medico/actualizaServicio/' + id, servicioConsulta, {headers})
    .pipe(catchError(this.handler.handleError.bind(this)));
  }

  getCitasMedico(id: any): Observable<Horario> {
    let headers = new HttpHeaders();
    if (this.currentUser) {
      headers = headers.append(
        'Authorization',
        'Bearer ' + this.currentUser.access_token
      );
    }
    return this.http
      .get<Horario>(
        this.ServerUrl + 'expediente/cita/HorarioMedico/' + id,
        { headers }
      )
      .pipe(
        retry(1),
        catchError(this.handler.handleError.bind(this))
      );
  }

  // HttpClient API get() method => Listado de restaurantes
  getServicios(id: any): Observable<ServicioConsulta> {
    // se manda la ruta,lo que le manda y y lo demas es opcional
    let headers = new HttpHeaders();
    if (this.currentUser) {
      headers = headers.append(
        'Authorization',
        'Bearer ' + this.currentUser.access_token
      );
    }
    return this.http
      .get<ServicioConsulta>(
        this.ServerUrl + 'expediente/cita/ListaServicio/' + id,
        { headers }
      )
      .pipe(
        retry(1),
        catchError(this.handler.handleError.bind(this))
      );
  }
  // Obtener especialidad
  getEspecialidad(): Observable<Especialidad> {
    return this.http
      .get<Especialidad>(this.ServerUrl + 'expediente/medico/especialidades')
      .pipe(catchError(this.handler.handleError.bind(this)));
  }
  getServicioConsultaAll(): Observable<ServicioConsulta> {
    let headers = new HttpHeaders();
    if (this.currentUser) {
      headers = headers.append(
        'Authorization',
        'Bearer ' + this.currentUser.access_token
      );
    }
    return this.http
      .get<ServicioConsulta>(
        this.ServerUrl + 'expediente/cita/ListaServicios',
        { headers }
      )
      .pipe(catchError(this.handler.handleError.bind(this)));
  }

}
