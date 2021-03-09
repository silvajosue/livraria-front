import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/shared/service/BaseService';
import { Usuario } from '../model/Usuario';
import { Observable } from "rxjs";
import { map, catchError} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LoginService extends BaseService {

  constructor(public http: HttpClient) {
    super();
  }

  protected recuperarToken(usuario: Usuario): string {

    let tk = this.http.post<any>(this.urlBase + 'treinamento-oauth/oauth/token', usuario, this.httpOptionsJson);

    return this.token + tk;
  }

  /*fazerLogin(username: string, password: string): Observable<any>  {

    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    headers.append('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');

    return this.http.post<any>(this.urlBase + 'treinamento-oauth/oauth/token',
               {email: username, password: password },
               { headers: headers, observe: 'response' })
          .pipe(
              map((response) => ({data: response.body, status: response.status}))
           );
    }*/
}
