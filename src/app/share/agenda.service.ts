import { Injectable } from '@angular/core';
import { UsuarioLogin } from './models/usuario-login';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { AuthenticationServiceService } from './authentication-service.service';
import { CustomHandlerErrorService } from './custom-handler-error-service.service';
import { Horario } from './models/horario';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { AgendaEntidad } from './models/agenda_Entidad';
import { Agenda } from './models/agenda';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {
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
    private authenticationService: AuthenticationServiceService,
    private handler: CustomHandlerErrorService
  ) {
    this.authenticationService.currentUser.subscribe(
      x => (this.currentUser = x)
    );
  }
  storeAgenda(agenda: AgendaEntidad): Observable<void> {
    let headers = new HttpHeaders();
    if (this.currentUser) {
      headers = headers.append(
        'Authorization',
        'Bearer ' + this.currentUser.access_token
      );
    }
    return this.http
      .post<Agenda>(
        this.ServerUrl + 'expediente/cita/agregaAgenda',
        agenda,
        {
          headers
        }
      )
      .pipe(catchError(this.handler.handleError.bind(this)));
  }


  getAgendaMedico(): Observable<Horario> {
    let headers = new HttpHeaders();
    if (this.currentUser) {
      headers = headers.append(
        'Authorization',
        'Bearer ' + this.currentUser.access_token
      );
    }
    return this.http
      .get<Horario>(this.ServerUrl + 'expediente/medico/horario_medico/' + this.currentUser.user.id, {
        headers
      })
      .pipe(catchError(this.handler.handleError.bind(this)));
  }
  getAgendaPerfil(): Observable<Agenda> {
    let headers = new HttpHeaders();
    if (this.currentUser) {
      headers = headers.append(
        'Authorization',
        'Bearer ' + this.currentUser.access_token
      );
    }
    return this.http
      .get<Agenda>(this.ServerUrl + 'expediente/medico/horariopaciente/' + this.currentUser.user.id, {
        headers
      })
      .pipe(catchError(this.handler.handleError.bind(this)));
  }
  getDetalleAgenda(id: any): Observable<Horario> {
    let headers = new HttpHeaders();
    if (this.currentUser) {
      headers = headers.append(
        'Authorization',
        'Bearer ' + this.currentUser.access_token
      );
    }
    return this.http
      .get<Horario>(
        this.ServerUrl + 'expediente/medico/detalleAgendaMedico/' + id,
        { headers }
      )
      .pipe(
        retry(1),
        catchError(this.handler.handleError.bind(this))
      );
  }
}
