import { UsuarioExisteService } from './usuario-existe.service';
import { NovoUsuarioService } from './novo-usuario.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { lowercaseValidator } from './lowercase.validator';
import { userPassEqualsValidator } from './user-pass-equals.validator';
import { Router } from '@angular/router';
import { NovoUsuario } from './novo-usuario';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.scss']
})
export class NovoUsuarioComponent implements OnInit {

  novoUsuarioForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private novoUsuarioService: NovoUsuarioService,
    private usuarioExisteService: UsuarioExisteService,
    private router: Router,
  ) { };

  ngOnInit(): void {
    this.novoUsuarioForm = this.formBuilder.group(
      {
        email: ['', [
          Validators.required,
          Validators.email
        ]],
        fullName: ['', [
          Validators.required,
        ]],
        userName: [
          '',
          [lowercaseValidator],
          [this.usuarioExisteService.usuarioExiste()],
          Validators.required
        ],
        password: ['', [
          Validators.required,
        ]],
      },

      {
        validators: [userPassEqualsValidator],
      }
    );
  };

  log() {
    console.log(this.novoUsuarioForm.getRawValue())
  }

  cadastrar() {
    if (this.novoUsuarioForm.valid) {
      const novoUsuario = this.novoUsuarioForm.getRawValue() as NovoUsuario;

      this.novoUsuarioService.cadastraNovoUsuario(novoUsuario)
      .subscribe(
        () => {
          this.router.navigate(['']);
        },
        (error)=> {
          console.log(error);
        }
      );
    };
  };
}
