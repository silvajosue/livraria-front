import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/shared/service/BaseService';
import { Usuario } from '../model/Usuario';


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
}
