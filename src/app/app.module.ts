import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PiePaginaComponent } from './componentes/pie-pagina/pie-pagina.component';
import { WalletComponent } from './componentes/wallet/wallet.component';
import { LoginComponent } from './componentes/login/login.component';
import { EnviarComponent } from './componentes/enviar/enviar.component';
import { RecibirComponent } from './componentes/recibir/recibir.component';
import { NoEncontradoComponent } from './componentes/no-encontrado/no-encontrado.component';

@NgModule({
  declarations: [
    AppComponent,
    PiePaginaComponent,
    WalletComponent,
    LoginComponent,
    EnviarComponent,
    RecibirComponent,
    NoEncontradoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
