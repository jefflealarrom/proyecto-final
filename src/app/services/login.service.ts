import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private urlUser = 'https://661270f095fdb62f24eeaffd.mockapi.io/api/perfumes/user';
  private http = inject(HttpClient)

  validUser(email: string, password: string): Observable<any> {
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

  updateUser(user: any): Observable<any> {
    const userId = user.id;
    const url = `${this.urlUser}/${userId}`;
    return this.http.put(url, user);
  }


  addUser(userData: any): Observable<any> {
    // Envía una solicitud HTTP POST con los datos del usuario
    return this.http.post(this.urlUser, userData);
  }

  deleteUser(userId: string): Observable<any> {
    const url = `${this.urlUser}/${userId}`;
    return this.http.delete(url);
  }
}








