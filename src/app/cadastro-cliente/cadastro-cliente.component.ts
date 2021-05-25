import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.scss']
})
export class CadastroClienteComponent implements OnInit {

  public formClient: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.formClient = this.formBuilder.group({
      nome: [null, [Validators.required, ]],
      rg: [null, [Validators.required, ]],
      cpf: [null, [
        Validators.required, 
        Validators.minLength(11), 
        Validators.maxLength(14), 
        Validators.pattern(/\d{3}[.]\d{3}[.]\d{3}[-]\d{2}/) 
      ]],
      endereco: [null, [Validators.required, ]],
      telefone: [null, [Validators.required, ]],
      dataDeNascimento: [null, [Validators.required, ]],
      email: [null, [Validators.required, ]] 
    });
    
  }
  
  ngOnInit(): void {
  }

  cadastrarCliente() {
    console.log(this.formClient);
  }

  navigate() {
    this.router.navigate(['list-cliente'])
  }

  public createTask(): void {
    console.log(this.formClient.get('cpf')?.errors)
  }

  public getErrors(field: string): string {
    let msg;
    const errors = this.formClient.get(field)?.errors;

    for (const key in errors) {
      if (errors.hasOwnProperty(key)) {
        msg = (ValidatorCases as any)[key]
        console.log(errors)
        return msg.replace('#field', (Translate as any)[field]).replace('#quantity', errors[key].requiredLength);
      }
    }

    return'';
  }
}

export enum ValidatorCases {
  required = 'Preencha o campo #field!',
  minlength = 'O campo #field deve conter #quantity dígitos',
  maxlength = 'O campo #field deve conter #quantity dígitos',
  pattern = 'Formato de #field inválido!'
}

export enum Translate {
  cpf = 'cpf',
}