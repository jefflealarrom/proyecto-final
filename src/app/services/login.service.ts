import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private urlUser = 'https://661270f095fdb62f24eeaffd.mockapi.io/api/perfumes/user';
  private http = inject(HttpClient)

  

  getUser(email: string, password: string): Observable<any> {
    const params = new HttpParams().set('email', email).set('password', password);
    return this.http.get(this.urlUser, { params });
  }


  setUserLocalStorage(user: any): void {
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  getCurrentUserFromLocalStorage(): any {
    const userString = localStorage.getItem('currentUser');
    return userString ? JSON.parse(userString) : null;
  }

  logout(): void {
    localStorage.removeItem('currentUser');
  }
}







// getUser(email: string, password: string): Observable<any> {
//   const params = new HttpParams().set('email', email).set('password', password);
//   return this.http.get(this.urlUser, { params });



