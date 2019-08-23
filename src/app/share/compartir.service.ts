import { Injectable } from '@angular/core';
import { UsuarioLogin } from './models/usuario-login';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { CustomHandlerErrorService } from './custom-handler-error-service.service';
import { AuthenticationServiceService } from './authentication-service.service';
import { CompartirExpedienteEntidad } from './models/compartir-entidad';
import { CompartirExpediente } from './models/compartir';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CompartirService {
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

  storeCompartirExpediente(
    compartido: CompartirExpedienteEntidad
  ): Observable<CompartirExpediente> {
    let headers = new HttpHeaders();
    if (this.currentUser) {
      headers = headers.append(
        'Authorization',
        'Bearer ' + this.currentUser.access_token
      );
    }
    return this.http
      .post<CompartirExpediente>(
        this.ServerUrl +
          'expediente/expediente_medico/compartir/compartir_expediente/',
        compartido,
        { headers }
      )
      .pipe(catchError(this.handler.handleError.bind(this)));
  }

  getExpedientesCompartidos(): Observable<CompartirExpediente> {
    let headers = new HttpHeaders();
    if (this.currentUser) {
      headers = headers.append(
        'Authorization',
        'Bearer ' + this.currentUser.access_token
      );
    }
    // tslint:disable-next-line: max-line-length
    return this.http
      .get<CompartirExpediente>(
        this.ServerUrl +
          'expediente/expediente_medico/compartir/expedientes_compartidos',
        { headers }
      )
      .pipe(
        retry(1),
        catchError(this.handler.handleError.bind(this))
      );
  }

  getUsuarioCompartido(id: any): Observable<CompartirExpediente> {
    let headers = new HttpHeaders();
    if (this.currentUser) {
      headers = headers.append(
        'Authorization',
        'Bearer ' + this.currentUser.access_token
      );
    }
    // tslint:disable-next-line: max-line-length
    return this.http
      .get<CompartirExpediente>(
        this.ServerUrl +
          'expediente/expediente_medico/compartir/usuarios_compartidos/' +
          id,
        { headers }
      )
      .pipe(
        retry(1),
        catchError(this.handler.handleError.bind(this))
      );
  }

  getQuitarCompartido(id: any): Observable<CompartirExpediente> {
    let headers = new HttpHeaders();
    if (this.currentUser) {
      headers = headers.append(
        'Authorization',
        'Bearer ' + this.currentUser.access_token
      );
    }
    return this.http
      .delete<CompartirExpediente>(
        this.ServerUrl + 'expediente/expediente_medico/compartir/' + id,
        {
          headers
        }
      )
      .pipe(catchError(this.handler.handleError.bind(this)));
  }
}
