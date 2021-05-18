import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListClienteComponent } from './list-cliente/list-cliente.component';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    ListClienteComponent,
    CadastroClienteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
