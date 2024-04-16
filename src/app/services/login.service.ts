import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
<<<<<<< HEAD
import { Observable, firstValueFrom, tap } from 'rxjs';
=======
import { Observable, tap } from 'rxjs';
import { User } from '../interfaces/user.“interface”';
>>>>>>> 2c47b388c5561560c5d699254d87e0f74e8eee00


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private urlUser = 'https://661270f095fdb62f24eeaffd.mockapi.io/api/perfumes/user';
  private http = inject(HttpClient)
  

  validUser(email: string, password: string): Observable<User[]> {  
    const params = new HttpParams().set('email', email).set('password', password);
    return this.http.get<User[]>(this.urlUser, { params });
  }

  setUserLocalStorage(user: User | null): void {
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
    } else {
      localStorage.removeItem('currentUser');
    }
  }
  

  getCurrentUserFromLocalStorage(): User | null {
    const userString = localStorage.getItem('currentUser');
    return userString ? JSON.parse(userString) : null;
  }

  logout(): void {
    localStorage.removeItem('currentUser');
  }

  updateUser(user: User): Observable<User> {
    const userId = user.id;
    const url = `${this.urlUser}/${userId}`;
    return this.http.put<User>(url, user).pipe(
      tap((updatedUser: User) => {
        this.setUserLocalStorage(updatedUser);
      })
    );
  }

  addUser(userData: User): Observable<User> {
    return this.http.post<User>(this.urlUser, userData).pipe(
      tap((newUser: User) => {
        this.setUserLocalStorage(newUser);
      })
    );
  }

  deleteUser(userId: string): Observable<User> {
    const url = `${this.urlUser}/${userId}`;
    return this.http.delete<User>(url).pipe(
      tap(() => {
        this.setUserLocalStorage(null);
      })
    );
  }
<<<<<<< HEAD

  
   

}

//usar el objeto localStorage para acceder siemre al almacenamiento interno de la web y poder manejar los datos, es necesaria para guardar, recuperar o eliminar datos 
=======
}
>>>>>>> 2c47b388c5561560c5d699254d87e0f74e8eee00
