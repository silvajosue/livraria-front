import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Usuario } from '../../model/Usuario';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario: FormGroup
  constructor(/*private loginService: LoginService*/ private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  public createForm(): void {
    this.formulario = this.formBuilder.group({
      usuario: [],
      senha: []
    });
  }
/*
  usuario: Usuario = new Usuario();
  carregando: boolean;
  token: any;

  fazerLogin(email: string, password: string): void {
    this.carregando = true;
    this.loginService.fazerLogin(email, password).subscribe((response) => {
      // aqui você faz o seu processamento, acessando data e status do objeto declarado acima.

      let data = response.data;
      let statusCode = response.status;

      if (data == null) { //se o retorno da requisição for null, aciona a função que exibe o toast
        console.log('Autenticado: ' + false);
        this.carregando = false;
      } else { //emite para o serviço que o usuário foi autenticado e que pode acessar as rotas do guard, redireciona para a home
        console.log('Autenticado: ' + true);
        let token = JSON.stringify(data); //aqui é recebido o id do usuário
        this.token = token; //aqui passa o valor do id do usuário para a variável do componente
        localStorage.setItem('currentUser', this.token);
        this.carregando = false;
      }
    })
  }*/

  public entrar(){
    console.log('User: ' + this.formulario.get('usuario').value);
    console.log('Senha: ' + this.formulario.get('senha').value);
  }

  public cadastrar(): void{

  }
}

