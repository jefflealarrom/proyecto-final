import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-best-seller',
  templateUrl: './best-seller.component.html',
  styleUrls: ['./best-seller.component.css']
})
export class BestSellerComponent {
  products: any[] = [];

  constructor(private http: HttpClient) {}

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
}
