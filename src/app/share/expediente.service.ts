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
import { Alcohol } from './models/alcohol';
import { AlcoholEntidad } from './models/alcohol-entidad';
import { Fumado } from './models/fumado';
import { CustomHandlerErrorService } from './custom-handler-error.service';
import { AuthenticationServiceService } from './authentication-service.service';
import { UsuarioLogin } from './models/usuario-login';
import { Alergia } from './models/alergia';
import { AlergiaEntidad } from './models/alergia-entidad';
import { Actividad } from './models/actividad';
import { ActividadEntidad } from './models/actividad-entidad';
import { ActividadPivotEntidad } from './models/actividad-pivot-entidad';


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

  updateExpediente(expediente: ExpedienteEntidad): Observable<Expediente>{
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
      .put<Expediente>(this.ServerUrl + 'expediente/actualizarExpediente/' + this.expediente_id, expediente, {headers});
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



  getEnfermedadesExp(): Observable<Expediente> {
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
      .get<Expediente>(this.ServerUrl + 'expediente/listaDeseasesExpediente/' + this.expediente_id, { headers })
      .pipe(catchError(this.handler.handleError.bind(this)));

  }

  getMedicamentosExp(): Observable<Expediente> {
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
      .get<Expediente>(this.ServerUrl + 'expediente/listaMedicamentosExpediente/' + this.expediente_id, { headers })
      .pipe(catchError(this.handler.handleError.bind(this)));

  }

  getFumado(){
    return this.http
      .get<Alcohol>(this.ServerUrl + 'expediente/fumado/show/' + this.expediente_id)
      .pipe(catchError(this.handler.handleError.bind(this)));
  }

  getAlcohol(){
    return this.http
      .get<Fumado>(this.ServerUrl + 'expediente/alcohol/' + this.expediente_id)
      .pipe(catchError(this.handler.handleError.bind(this)));
  }


  updateAlcohol(id: any, alcohol: AlcoholEntidad): Observable<Alcohol>{
    let headers = new HttpHeaders();
    if (this.currentUser) {
      headers = headers.append(
        'Authorization',
        'Bearer' + this.currentUser.access_token
      );
    }
    return this.http
      .put<Alcohol>(this.ServerUrl + 'expediente/alcohol/' + id, alcohol, {headers})
      .pipe(catchError(this.handler.handleError.bind(this)));
  }

  updateActivitiesExp(actividad: ActividadPivotEntidad): Observable<Actividad>{
    // tslint:disable-next-line: radix
    this.expediente_id = parseInt(localStorage.getItem('expediente_id'));
    let headers = new HttpHeaders();
    if (this.currentUser) {
      headers = headers.append(
        'Authorization',
        'Bearer' + this.currentUser.access_token
      );
    }
    return this.http
      .put<Actividad>(this.ServerUrl + 'expediente/actividad/' + this.expediente_id, actividad, {headers})
      .pipe(catchError(this.handler.handleError.bind(this)));
  }

  getActividades(){
    // tslint:disable-next-line: radix
    this.expediente_id = parseInt(localStorage.getItem('expediente_id'));
    let headers = new HttpHeaders();
    if (this.currentUser) {
      headers = headers.append(
        'Authorization',
        'Bearer' + this.currentUser.access_token
      );
    }
    return this.http
      .get<Expediente>(this.ServerUrl + 'expediente/listaActividadesExpediente/' + this.expediente_id, { headers })
      .pipe(catchError(this.handler.handleError.bind(this)));
  }

  getActividad($id: number){
    // tslint:disable-next-line: radix
    this.expediente_id = parseInt(localStorage.getItem('expediente_id'));
    let headers = new HttpHeaders();
    if (this.currentUser) {
      headers = headers.append(
        'Authorization',
        'Bearer' + this.currentUser.access_token
      );
    }
    return this.http
      .get<Actividad>(this.ServerUrl + 'expediente/showActividad/' + $id + '/' + this.expediente_id, {headers})
      .pipe(catchError(this.handler.handleError.bind(this)));
  }

  createActividadExp(actividad: ActividadEntidad): Observable<Actividad> {
    // tslint:disable-next-line: radix
    this.expediente_id = parseInt(localStorage.getItem('expediente_id'));
    let headers = new HttpHeaders();
    if (this.currentUser) {
      headers = headers.append(
        'Authorization',
        'Bearer' + this.currentUser.access_token
      );
    }
    return this.http
      .post<Actividad>(this.ServerUrl + 'expediente/agregaActividad/' + this.expediente_id, actividad, {headers})
      .pipe(catchError(this.handler.handleError.bind(this)));
  }

  createAlergiaExp(alergia: AlergiaEntidad): Observable<Alergia>{
    // tslint:disable-next-line: radix
    this.expediente_id = parseInt(localStorage.getItem('expediente_id'));
    let headers = new HttpHeaders();
    if (this.currentUser) {
      headers = headers.append(
        'Authorization',
        'Bearer' + this.currentUser.access_token
      );
    }
    return this.http
      .post<Alergia>(this.ServerUrl + 'expediente/agregaAlergia/' + this.expediente_id, alergia, {headers})
      .pipe(catchError(this.handler.handleError.bind(this)));
  }



}
