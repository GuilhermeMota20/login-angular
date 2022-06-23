import { UserService } from './../authentication/user/user.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {
  constructor(
    private httpClient: HttpClient,
    private userService: UserService,
  ) { }

  autenticar(usuario: string, senha: string): Observable<HttpResponse<any>> {
    // POST
    return this.httpClient.post(
      'http://localhost:3000/user/login',
      {
        userName: usuario,
        password: senha,
      },
      {
        observe: 'response'
      }
    ).pipe(
      tap((res)=> {
        const authToken = res.headers.get('x-access-token') ?? '';
        this.userService.saveToken(authToken);
      })
    );
  }
}
