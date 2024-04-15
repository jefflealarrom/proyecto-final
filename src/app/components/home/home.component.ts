import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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
