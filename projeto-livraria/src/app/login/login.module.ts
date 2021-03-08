import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {CardModule} from 'primeng-lts/card';
import {FieldsetModule} from 'primeng-lts/fieldset';
import {InputTextModule} from 'primeng-lts/inputtext';

import { LoginRoutingModule } from './login-routing.module';
import { CadastrarUsuarioComponent } from './pages/cadastrar-usuario/cadastrar-usuario.component';
import { LoginComponent } from './pages/login/login.component';


@NgModule({
  declarations: [LoginComponent, CadastrarUsuarioComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    HttpClientModule,
    CardModule,
    FieldsetModule,
    InputTextModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginModule { }
