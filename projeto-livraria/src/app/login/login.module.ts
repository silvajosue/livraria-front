import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { LoginRoutingModule } from './login-routing.module';
import { CadastrarUsuarioComponent } from './pages/cadastrar-usuario/cadastrar-usuario.component';
import { LoginComponent } from './pages/login/login.component';
import { CardModule, FieldsetModule, InputTextModule } from 'primeng';


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
