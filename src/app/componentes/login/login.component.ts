import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { UserLogin } from './user-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: UserLogin = {
    user: '',
    pass: ''
  };

  constructor(private router: Router,
              private loginService: LoginService
              /*,private flashMessagesService: FlashMessagesService*/) { }

  ngOnInit() {
    /*this.loginService.getAllUser()
    .then(usu => {
      if (usu[0]) {
        this.router.navigate(['/']);
      }
    });*/
  }

  login({ value, valid }: {value: UserLogin, valid: boolean
  }) {
    if (!valid) {
      // this.flashMessagesService.show('Favor de llenar el formulario correctamente', {cssClass: 'alert-danger', timeout: 4000 });
    } else {
      /*this.loginService.login(this.usuario.user, this.usuario.pass)
      .subscribe(usuario => {
        this.router.navigate(['/']);
      }, error => {
        this.usuario.user = '';
        this.usuario.pass = '';
         this.flashMessagesService.show('Usuario o contrasena incorrectos', {cssClass: 'alert-danger', timeout: 4000 });
      });*/
    }
  }
}
