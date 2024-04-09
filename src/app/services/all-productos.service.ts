import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from '../interfaces/products.—type=“interface”';

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

  }
