import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// -- componentes
import { PiePaginaComponent } from './componentes/pie-pagina/pie-pagina.component';
import { WalletComponent } from './componentes/wallet/wallet.component';
import { LoginComponent } from './componentes/login/login.component';
import { EnviarComponent } from './componentes/enviar/enviar.component';
import { RecibirComponent } from './componentes/recibir/recibir.component';
import { NoEncontradoComponent } from './componentes/no-encontrado/no-encontrado.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
// -- servicios
import { LoginService } from './componentes/login/login.service';
import { WalletService } from './componentes/wallet/wallet.service';

@NgModule({
  declarations: [
    AppComponent,
    PiePaginaComponent,
    WalletComponent,
    LoginComponent,
    EnviarComponent,
    RecibirComponent,
    NoEncontradoComponent,
    CabeceraComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    LoginService,
    WalletService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
