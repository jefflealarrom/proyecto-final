import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Products } from '../interfaces/products.—type=“interface”';

@Injectable({
  providedIn: 'root'
})

export class AppComponent {
  title = 'perfume';
  private url = 'https://mockapi.io/projects/661270f095fdb62f24eeaffe'
  private urlHttp = inject(HttpClient)

  getAll(): Promise<Products[]>{
    return firstValueFrom(this.urlHttp.get<Products[]>(this.url))
  }
  // perfumes: any[] = [];

  // constructor(private http: HttpClient) {
  //   this.fetchPerfumes()
  // }

  // fetchPerfumes() {
  //   this.http.get<any[]>(this.url).subscribe(
  //     (data) => {
  //       this.perfumes = data;
  //       console.log('Perfumes:', this.perfumes)
  //     },
  //     (error) => {
  //       console.error('Error fetching perfumes:', error);
  //     }
  //   );
  // }
}
