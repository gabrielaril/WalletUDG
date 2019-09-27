import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WalletComponent } from './componentes/wallet/wallet.component';
import { LoginComponent } from './componentes/login/login.component';
import { EnviarComponent } from './componentes/enviar/enviar.component';
import { RecibirComponent } from './componentes/recibir/recibir.component';
import { NoEncontradoComponent } from './componentes/no-encontrado/no-encontrado.component';

const routes: Routes = [
  { path: '', component: WalletComponent },
  { path: 'login', component: LoginComponent },
  { path: 'enviar', component: EnviarComponent },
  { path: 'recibir', component: RecibirComponent },
  { path: '*', component: NoEncontradoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
