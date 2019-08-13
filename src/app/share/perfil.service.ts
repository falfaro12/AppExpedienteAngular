import { Injectable } from '@angular/core';
import { UsuarioLogin } from './models/usuario-login';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { AuthenticationServiceService } from './authentication-service.service';
import { CustomHandlerErrorService } from './custom-handler-error-service.service';
import { PerfilEntidad } from './models/Perfil-entidad';
import { catchError, retry } from 'rxjs/operators';
import { Perfil } from './models/Perfil';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {
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

  crearPerfil(user: PerfilEntidad): Observable<PerfilEntidad> {
    let headers = new HttpHeaders();
    if (this.currentUser) {
      headers = headers.append(
        'Authorization',
        'Bearer' + this.currentUser.access_token
      );
    }
    // se manda la ruta,lo que le manda y y lo demas es opcional
    return this.http
      .post<PerfilEntidad>(
        this.ServerUrl + 'expediente/registarPerfil',
        user, {headers},
      )
      .pipe(catchError(this.handler.handleError.bind(this)));
  }
  getPerfilesAsociados(): Observable<Perfil> {
    let headers = new HttpHeaders();
    if (this.currentUser) {
      headers = headers.append(
        'Authorization',
        'Bearer' + this.currentUser.access_token
      );
    }
    return this.http.get<Perfil>(this.ServerUrl + 'expediente/perfil', {headers})
    .pipe(
      retry(1),
      catchError(this.handler.handleError.bind(this))
    );
  }
  showPerfil(id: any): Observable<Perfil> {
    let headers = new HttpHeaders();
    if (this.currentUser) {
      headers = headers.append(
        'Authorization',
        'Bearer' + this.currentUser.access_token
      );
    }
    return this.http
    .get<Perfil>(this.ServerUrl + 'expediente/perfil/' + id, {headers})
    .pipe(catchError(this.handler.handleError.bind(this)));
  }
}
