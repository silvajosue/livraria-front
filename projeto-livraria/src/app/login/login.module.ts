import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { LoginRoutingModule } from './login-routing.module';
import { CadastrarUsuarioComponent } from './pages/cadastrar-usuario/cadastrar-usuario.component';
import { LoginComponent } from './pages/login/login.component';
import { ButtonModule, CardModule, FieldsetModule, InputTextModule } from 'primeng';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [LoginComponent, CadastrarUsuarioComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    HttpClientModule,
    CardModule,
    FieldsetModule,
    FormsModule,
    InputTextModule,
    ReactiveFormsModule,
    ButtonModule
  ],
  providers: [LoginRoutingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginModule { }
