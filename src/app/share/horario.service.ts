import { Injectable } from '@angular/core';
import { UsuarioLogin } from './models/usuario-login';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { AuthenticationServiceService } from './authentication-service.service';
import { CustomHandlerErrorService } from './custom-handler-error-service.service';
import { HorarioEntidad } from './models/horario-entidad';
import { Horario } from './models/horario';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HorarioService {
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
  createServicio(horario: HorarioEntidad): Observable<Horario> {
    let headers = new HttpHeaders();
    if (this.currentUser) {
      headers = headers.append(
        'Authorization',
        'Bearer' + this.currentUser.access_token
      );
    }
    return this.http
    .post<HorarioEntidad>(this.ServerUrl + 'expediente/medico/agregaHorario', horario, { headers })
    .pipe(catchError(this.handler.handleError.bind(this)));
  }
}
