import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private urlUser = 'https://661270f095fdb62f24eeaffd.mockapi.io/api/perfumes/user';
  private http = inject(HttpClient)
  

  //preguntar a jose por Observable<any> si cambiar any por interfaz. crear una nueva interfaz(?) o con crear una nueva variable y asignarle la interfez me bastaria
  validUser(email: string, password: string): Observable<any> {
    const params = new HttpParams().set('email', email).set('password', password);
    return this.http.get(this.urlUser, { params });
  }
//pregungtar a jose lo mismo con el any y si necesito cambiarlo para manejar la funcion con un boolean y no con un boolean (nuevo servicio?)
  setUserLocalStorage(user: any): void {
    localStorage.setItem('currentUser', JSON.stringify(user));
  }
//lo mismo con el any aunque como los datos puedeb variar, (otra vez hace falta interfaz?)
  getCurrentUserFromLocalStorage(): any {
    const userString = localStorage.getItem('currentUser');
    return userString ? JSON.parse(userString) : null;
  }

  logout(): void {
    localStorage.removeItem('currentUser');
  }
//recojemos el id del usuario para actualizacion de los datos y cambiamos en el front en tiempo real 
  updateUser(user: any): Observable<any> {
    const userId = user.id;
    const url = `${this.urlUser}/${userId}`;
    return this.http.put(url, user).pipe(
      tap((updatedUser: any) => {
        this.setUserLocalStorage(updatedUser);
      })
    );
  }
//agregr usario
  addUser(userData: any): Observable<any> {
    return this.http.post(this.urlUser, userData).pipe(
      tap((newUser: any) => {
        this.setUserLocalStorage(newUser);
      })
    );
  }

  deleteUser(userId: string): Observable<any> {
    const url = `${this.urlUser}/${userId}`;
    return this.http.delete(url).pipe(
      tap(() => {
        this.setUserLocalStorage(null); 
      })
    );
  }
}

//usar el objeto localStorage para acceder siemre al almacenamiento interno de la web y poder manejar los datos, es necesaria para guardar, recuperar o eliminar datos 
