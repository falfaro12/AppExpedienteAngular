import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Alergia } from './models/alergia';
import { AlergiaEntidad } from './models/alergia-entidad';
import { environment } from 'src/environments/environment';
import { UsuarioLogin } from './models/usuario-login';
import { AuthenticationServiceService } from './authentication-service.service';
import { Router } from '@angular/router';
import { CustomHandlerErrorService } from './custom-handler-error.service';


@Injectable({
  providedIn: 'root'
})
export class AlergiaService {
  currentUser: UsuarioLogin;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
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
  // HttpClient API get() method => Listado de Alergias
  getAlergias(): Observable<Alergia> {
    return this.http
    .get<Alergia>(this.ServerUrl + 'expediente/alergia')
    .pipe(catchError(this.handler.handleError.bind(this)));
  }
  getAlergiasEliminadas(): Observable<Alergia> {
    return this.http
    .get<Alergia>(this.ServerUrl + 'expediente/alergiaEliminada')
    .pipe(catchError(this.handler.handleError.bind(this)));
  }

  getAlergia(id: any): Observable<Alergia> {
    let headers = new HttpHeaders();
    if (this.currentUser) {
      headers = headers.append(
        'Authorization',
        'Bearer' + this.currentUser.access_token
      );
    }
    return this.http
    .get<Alergia>(this.ServerUrl + 'expediente/alergia/' + id)
    .pipe(retry(1), catchError(this.handler.handleError.bind(this)));
  }

  createAlergia(alergia: AlergiaEntidad): Observable<Alergia>{
    let headers = new HttpHeaders();
    if (this.currentUser) {
      headers = headers.append(
        'Authorization',
        'Bearer' + this.currentUser.access_token
      );
    }
    return this.http
    .post<Alergia>(this.ServerUrl + 'expediente/alergia', alergia, { headers })
    .pipe(catchError(this.handler.handleError.bind(this)));
  }

  updateAlergia(id: any, alergia: AlergiaEntidad): Observable<Alergia> {
    let headers = new HttpHeaders();
    if (this.currentUser) {
      headers = headers.append(
        'Authorization',
        'Bearer' + this.currentUser.access_token
      );
    }
    return this.http
    .put<Alergia>(this.ServerUrl + 'expediente/alergia/' + id, alergia, {headers})
    .pipe(catchError(this.handler.handleError.bind(this)));
  }
  dropAlergia(id: any): Observable<void> {
    let headers = new HttpHeaders();
    if (this.currentUser) {
      headers = headers.append(
        'Authorization',
        'Bearer' + this.currentUser.access_token
      );
    }
    return this.http
    .delete<void>(this.ServerUrl + 'expediente/alergia/' + id, {headers} )
    .pipe(catchError(this.handler.handleError.bind(this)));
  }
  restaurarlergia(id: any): Observable<void> {
    let headers = new HttpHeaders();
    if (this.currentUser) {
      headers = headers.append(
        'Authorization',
        'Bearer' + this.currentUser.access_token
      );
    }
    return this.http
    .get<void>(this.ServerUrl + 'expediente/restaurarAlergia/' + id, {headers} )
    .pipe(catchError(this.handler.handleError.bind(this)));
  }
  obtenerImagenService(rutaImagen) {
    return this.ServerUrl + 'expediente/obtenerImagenAlergia/' + rutaImagen;
  }
  updateImagen(id: any, fd: FormData): Observable<Alergia> {
    let headers = new HttpHeaders();
    if (this.currentUser) {
      headers = headers.append(
        'Authorization',
        'Bearer' + this.currentUser.access_token
      );
    }
    return this.http
    .post<Alergia>(this.ServerUrl + 'expediente/agregaimagenAlergia/' + id, fd, {headers})
    .pipe(
      retry(1)
      , catchError(this.handler.handleError.bind(this)));
  }
}
