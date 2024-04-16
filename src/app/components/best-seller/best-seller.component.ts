import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Products } from 'src/app/interfaces/products.—type=“interface”';

@Component({
  selector: 'app-best-seller',
  templateUrl: './best-seller.component.html',
  styleUrls: ['./best-seller.component.css']
})
export class BestSellerComponent {
  products: Products[] = [];
  private http = inject(HttpClient)

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.http.get<any[]>('https://661270f095fdb62f24eeaffd.mockapi.io/api/perfumes/products')
      .subscribe(data => {
        this.products = data.slice(0, 4);
        console.log(this.products);
      });
  }

  // la api se esta llamando desde el servicio products, porque se vuelve a llamar desde este componente? importar el servicio y mostrar los productos que sean true
}
