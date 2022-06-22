import { NovoUsuarioService } from './novo-usuario.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.scss']
})
export class NovoUsuarioComponent implements OnInit {

  novoUsuarioForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private NovoUsuarioService: NovoUsuarioService) { }

  ngOnInit(): void {
    this.novoUsuarioForm = this.formBuilder.group({
      email: [''],
      fullName: [''],
      userName: [''],
      password: [''],
    });
  }

  cadastrar() {
    const novoUsuario = this.novoUsuarioForm.getRawValue() as NovoUsuarioService;
    console.log(novoUsuario);
  }

}
