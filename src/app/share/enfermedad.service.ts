import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from '@angular/common/http';

import { Router } from '@angular/router';
import { AuthenticationServiceService } from './authentication-service.service';
import { CustomHandlerErrorService } from './custom-handler-error-service.service';
import { UsuarioLogin } from './models/usuario-login';
import { environment } from 'src/environments/environment';
import { Enfermedad } from './models/enfermedad';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EnfermedadService {
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
  getEnfermedad(): Observable<Enfermedad> {
    let headers = new HttpHeaders();
    if (this.currentUser) {
      headers = headers.append(
        'Authorization',
        'Bearer' + this.currentUser.access_token
      );
    }
    return this.http
      .get<Enfermedad>(this.ServerUrl + 'expediente/enfermedad', { headers } ) .pipe(
        catchError(this.handler.handleError.bind(this))
      );
  }
  obtenerImagenService(rutaImagen) {
    return this.ServerUrl + 'expediente/obtenerImagenEnfermedad/' + rutaImagen;
  }
}
