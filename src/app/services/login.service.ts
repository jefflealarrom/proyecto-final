import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private urlUser = 'https://661270f095fdb62f24eeaffd.mockapi.io/api/perfumes/user';

  constructor(private http: HttpClient) { }

  getUser(email: string, password: string): Observable<any> {
    return this.http.post(this.urlUser, { email, password }).pipe(
      tap(response => console.log('Respuesta de la API:', response)) 
    );
  }
}

