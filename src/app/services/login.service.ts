import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, firstValueFrom } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private urlUser = 'https://661270f095fdb62f24eeaffd.mockapi.io/api/perfumes/user';

  constructor(private http: HttpClient) { }

  getUser(email: string, password: string): Observable<any> {
    return this.http.post(this.urlUser, { email, password });
  }

  login(user: any): Promise<any>
   return firstValueFrom(
    this.http.post<any>({this.urlUser}/login, user)
   )

}
