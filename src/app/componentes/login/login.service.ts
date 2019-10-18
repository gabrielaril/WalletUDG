import { Injectable } from '@angular/core';
import { Url } from '../util/url';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PouchdbService } from 'src/app/pouchdb.service';
import { Usuario } from './usuario.model';

const clave = 'usuario:';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url = Url.base + Url.usuario;
  // ---
  private user: Usuario;
  private userSubject = new BehaviorSubject<Usuario>(this.user);

  constructor(private http: HttpClient,
    private db: PouchdbService) { }

  login(user: string, pass: string): Observable<Usuario> {
    httpOptions.headers =
      httpOptions.headers.set('code', user).set('paswd', pass);
    return this.http.post(this.url, null, httpOptions)
      .pipe(
        map(res => {
          this.user = res as Usuario;
          this.userSubject.next(this.user);
          // -- guardamos en bd
          this.addUsuario(this.user.codigo, JSON.stringify(this.user))
            .then((id: string): void => { },
              (error: Error): void => {
                console.log('Error:', error);
                return;
              });
          // --
          return this.user;
        }),
        catchError(err => {
          throw new Error(err);
        })
      );
  }

  addUsuario(id: string, json: string) {
    return this.db.add(clave + id, json);
  }

  getUser(id: number) {
    return this.db.getById(clave + id);
  }

  getAllUser() {
    return this.db.getAllByClave(clave);
  }

  getUserCabecero(): Observable<Usuario> {
    return this.userSubject.asObservable();
  }
}
