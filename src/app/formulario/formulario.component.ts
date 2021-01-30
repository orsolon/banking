import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../usuario/usuario.service';
import { FormularioService } from './formulario.service';
import { Usuario } from '../usuario/usuario.interface';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @ViewChild('emailInput') emailInput: ElementRef;
  @ViewChild('senhaInput') senhaInput: ElementRef;
  @ViewChild('nomeInput') nomeInput: ElementRef;
  @ViewChild('cpfInput') cpfInput: ElementRef;

  nome: string;
  email: string;
  senha: string;
  cpf: string;
  estaCarregando: boolean;
  erroNoLogin: boolean;
  usuario: Usuario;
  

  constructor( private formularioService: FormularioService, private usuarioService: UsuarioService) {}
  

  ngOnInit(): void {
  }


    onSubmit(form: any) {
      this.erroNoLogin = false;
  
      if (!form.valid) {
        form.controls.nome.markAsTouched();
        form.controls.email.markAsTouched();
        form.controls.senha.markAsTouched();
        form.controls.cpf.markAsTouched();
  
        if (form.controls.email.invalid) {
          this.emailInput.nativeElement.focus();
          return;
        }
  
        if (form.controls.senha.invalid) {
          this.senhaInput.nativeElement.focus();
          return;
        }

        if (form.controls.nome.invalid) {
          this.nomeInput.nativeElement.focus();
          return;
        }

        if (form.controls.cpf.invalid) {
          this.cpfInput.nativeElement.focus();
          return;
        }
  
        return;
      }
  
      this.cadastrar();
    }

    cadastrar() {
      this.nome = this.usuario.nome;
      this.senha = this.usuario.senha;
      this.email = this.usuario.email;
      this.cpf = this.usuario.cpf;

      this.usuarioService.createUsuario(this.usuario);
     
    }

    exibeErro(nomeControle: string, form: NgForm) {
      if (!form.controls[nomeControle]) {
        return false;
      }
  
      return form.controls[nomeControle].invalid && form.controls[nomeControle].touched;
    }
  }

