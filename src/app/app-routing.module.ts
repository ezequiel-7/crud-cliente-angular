import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroClienteComponent } from "./cadastro-cliente/cadastro-cliente.component";
import { ListClienteComponent } from "./list-cliente/list-cliente.component";

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'cadastro-cliente' },
    { path: 'cadastro-cliente', component: CadastroClienteComponent },
    { path: 'list-cliente', component: ListClienteComponent },
  ]

  @NgModule({
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [
      RouterModule
    ]
  })
  export class AppRoutingModule { }