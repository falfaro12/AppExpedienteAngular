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

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {
  UsuarioLoguedo: UsuarioLogin;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  ServerUrl = environment.apiURL;
  errorData: {};
  user: null;
  private currentUserSubject: BehaviorSubject<UsuarioLogin>;
  public currentUser: Observable<UsuarioLogin>;

    constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<UsuarioLogin>(JSON.parse(localStorage.getItem('currentUser')) );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): UsuarioLogin {
    return this.currentUserSubject.value;
  }

  // obtiene lista de roles
  getRoles(): Observable<RolEntidad> {
    return this.http.get<RolEntidad>(this.ServerUrl + 'expediente/rol').pipe(catchError(this.handleError));
  }

  // Crear un Usuario
  createUser(user: UserEntidad): Observable<UserEntidad> {
    // se manda la ruta,lo que le manda y y lo demas es opcional
    return this.http.post<UserEntidad>(this.ServerUrl + 'expediente/registrar', user, this.httpOptions).pipe(catchError(this.handleError));
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
          this.UsuarioLoguedo = user;
          return user;
        })
      );
  }
  logout() {
    // eliminar usuario del almacenamiento local para cerrar la sesión del usuario
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Ocurrió un error del lado del cliente o de la red.

      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.

      // El backend devolvió un código de respuesta no exitoso.

      // El cuerpo de la respuesta puede contener información sobre lo que salió mal

      console.error(
        `Error código ${error.status}, ` + `,detalle: ${error.error}`
      );
    }

    /// devuelve un observable con un mensaje de error orientado al usuario

    this.errorData = {
      errorTitle: 'Falló la solicitud',
      errorDesc: 'Ocurrió un inconveniente. Inténtelo de nuevo más tarde'
    };
    return throwError(this.errorData);
  }


}
