import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { UserEntidad } from './models/user-entidad';
import { RolEntidad } from './models/rol-entidad';
import { UsuarioLogin } from './models/usuario-login';
import { CustomHandlerErrorService } from './custom-handler-error-service.service';
import { PerfilEntidad } from './models/Perfil-entidad';
import { Especialidad } from './models/especialidad';
import { Usuario } from './models/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {
  UsuarioLogueado: UsuarioLogin;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  ServerUrl = environment.apiURL;
  errorData: {};
  user: null;
  private currentUserSubject: BehaviorSubject<UsuarioLogin>;
  public currentUser: Observable<UsuarioLogin>;

  constructor(
    private http: HttpClient,
    private handler: CustomHandlerErrorService
  ) {
    this.currentUserSubject = new BehaviorSubject<UsuarioLogin>(
      JSON.parse(localStorage.getItem('currentUser'))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): UsuarioLogin {
    return this.currentUserSubject.value;
  }

  // obtiene lista de roles
  getRoles(): Observable<RolEntidad> {
    return this.http
      .get<RolEntidad>(this.ServerUrl + 'expediente/rol')
      .pipe(catchError(this.handler.handleError));
  }

  // Crear un Usuario
  createUser(user: PerfilEntidad): Observable<PerfilEntidad> {
    // se manda la ruta,lo que le manda y y lo demas es opcional
    return this.http
      .post<PerfilEntidad>(
        this.ServerUrl + 'expediente/registar',
        user,
        this.httpOptions
      )
      .pipe(catchError(this.handler.handleError.bind(this)));
  }
  // Crear un Usuario
  createMedico(user: UserEntidad): Observable<UserEntidad> {
    // se manda la ruta,lo que le manda y y lo demas es opcional
    let headers = new HttpHeaders();
    if (this.UsuarioLogueado) {
      headers = headers.append(
        'Authorization',
        'Bearer ' + this.UsuarioLogueado.access_token
      );
    }
    return this.http
      .post<UserEntidad>(
        this.ServerUrl + 'expediente/registarMedico', {headers,
        user}
      )
      .pipe(catchError(this.handler.handleError.bind(this)));
  }

  // Actualizar un Usuario
  // HttpClient API put() method => Update vj
  // Crear un Usuario
  updateUser(user: UserEntidad): Observable<UserEntidad> {
    // se manda la ruta,lo que le manda y y lo demas es opcional
    // tslint:disable-next-line: max-line-length
    let headers = new HttpHeaders();
    if (this.UsuarioLogueado) {
      headers = headers.append(
        'Authorization',
        'Bearer ' + this.UsuarioLogueado.access_token
      );
    }
    return this.http
      .put<UserEntidad>(this.ServerUrl + 'expediente/actualizaUsuario', user, {
        headers
      })
      .pipe(catchError(this.handler.handleError.bind(this)));
  }

  // login
  loginUser(user: UserEntidad): Observable<UsuarioLogin> {
    return this.http
      .post<UsuarioLogin>(
        this.ServerUrl + 'expediente/login',
        user,
        this.httpOptions
      )
      .pipe(
        map(user => {
          // almacene los detalles del usuario y el token jwt en el almacenamiento local para mantener al usuario conectado entre las actualizaciones de la página
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
          this.UsuarioLogueado = user;
          return user;
        })
      );
  }
  logout() {
    // eliminar usuario del almacenamiento local para cerrar la sesión del usuario
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  // Obtener especialidad
  getEspecialidad(): Observable<Especialidad> {
    return this.http
      .get<Especialidad>(this.ServerUrl + 'expediente/medico/especialidades')
      .pipe(catchError(this.handler.handleError.bind(this)));
  }
  // Obtener especialidad
  getMedicos(): Observable<Usuario> {
    let headers = new HttpHeaders();
    if (this.UsuarioLogueado) {
      headers = headers.append(
        'Authorization',
        'Bearer ' + this.UsuarioLogueado.access_token
      );
    }
    return this.http
      .get<UserEntidad>(
        this.ServerUrl + 'expediente/medico/Listamedicos',
        {
          headers
        }
      )
      .pipe(catchError(this.handler.handleError.bind(this)));
  }
}
