import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ExpedienteEntidad } from './models/expediente-entidad';
import { Expediente } from './models/expediente';
import { CustomHandlerErrorService } from './custom-handler-error.service';
import { AuthenticationServiceService } from './authentication-service.service';
import { UsuarioLogin } from './models/usuario-login';

@Injectable({
  providedIn: 'root'
})
export class ExpedienteService {
  httpOptions = {
    headers: new HttpHeaders ({ 'Content-Type': 'application/json' })
  };
  ServerUrl = environment.apiURL;
  currentUser: UsuarioLogin;
  errorData: {};
  expediente_id: number;
  private currentExpSubject : BehaviorSubject<number>;
  public currentExp : Observable<number>;

  constructor(
    private http: HttpClient,
    private handler: CustomHandlerErrorService,
    private authenticationService: AuthenticationServiceService
  ) {
    //this.currentExp = this.currentExpSubject.asObservable();
    this.authenticationService.currentUser.subscribe(
      x => (this.currentUser = x)
    );
  }

  public get currentExpValue(): number {
    // tslint:disable-next-line: radix
    return  parseInt(localStorage.getItem('expediente_id'));
  }

  setCurrentExp(id: number) {
    localStorage.setItem('expediente_id', id.toString());
    //this.currentExpSubject.next(id);
  }

  getExpediente(): Observable<Expediente> {
    // tslint:disable-next-line: radix
    this.expediente_id = parseInt(localStorage.getItem('expediente_id'));
    let headers = new HttpHeaders();
    if(this.currentUser) {
      headers = headers.append(
        'Authorization',
        'Bearer' + this.currentUser.access_token
      );
    }
    return this.http
      .get<Expediente>(this.ServerUrl + 'expediente/mostrarExpediente/' + this.expediente_id, { headers })
      .pipe(catchError(this.handler.handleError.bind(this)));

  }

  getAlergiasExp(): Observable<Expediente> {
    // tslint:disable-next-line: radix
    this.expediente_id = parseInt(localStorage.getItem('expediente_id'));
    let headers = new HttpHeaders();
    if(this.currentUser) {
      headers = headers.append(
        'Authorization',
        'Bearer' + this.currentUser.access_token
      );
    }
    return this.http
      .get<Expediente>(this.ServerUrl + 'expediente/listaAlergiasExpediente/' + this.expediente_id, { headers })
      .pipe(catchError(this.handler.handleError.bind(this)));

  }
  
}
