import { Products } from 'src/app/interfaces/products.—type=“interface”';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class AllProductosService {
 
  private url = 'https://661270f095fdb62f24eeaffd.mockapi.io/api/perfumes/products'
  private urlHttp = inject(HttpClient)

  getAll(): Observable<Products[]>{
    return this.urlHttp.get<Products[]>(this.url)
  }
  getWoman(): Observable<Products[]> {
    return this.urlHttp.get<Products[]>(`${this.url}?gender=Female`);
  }
  getMan(): Observable<Products[]> {
    return this.urlHttp.get<Products[]>(`${this.url}?gender=Male`);
  }
  getId(id: string): Observable<Products> {
    return this.urlHttp.get<Products>(`${this.url}/${id}`);
  }
  getTop(): Observable<Products[]> {
    return this.urlHttp.get<Products[]>(`${this.url}?top=True`)
  }
}
