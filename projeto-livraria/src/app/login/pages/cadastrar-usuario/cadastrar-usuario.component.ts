import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Usuario } from '../../model/Usuario';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.css']
})
export class CadastrarUsuarioComponent implements OnInit {

  formulario: FormGroup
  usuario: Usuario = new Usuario();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  public createForm(): void {
    this.formulario = this.formBuilder.group({
      nome: [],
      sobrenome: [],
      email: [],
      senha: [],
      resenha: []
    });
  }

  public salvar(): void{
    this.usuario.nome = this.formulario.get('nome').value;
    this.usuario.sobrenome = this.formulario.get('sobrenome').value;
    this.usuario.email = this.formulario.get('email').value;
    if(this.formulario.get('senha').value == this.formulario.get('resenha').value){
      this.usuario.senha = this.formulario.get('senha').value;
    }
    console.log(this.usuario);
  }
  public voltar(): void{

  }
}
