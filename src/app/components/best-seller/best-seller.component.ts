import { Products } from 'src/app/interfaces/products.—type=“interface”';
import { AllProductosService } from 'src/app/services/all-productos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-best-seller',
  templateUrl: './best-seller.component.html',
  styleUrls: ['./best-seller.component.css']
})
export class BestSellerComponent implements OnInit {
  topProducts: Products[] = [];

  constructor(private productService: AllProductosService) {}

  ngOnInit() {
    this.fetchTopProducts();
  }

  fetchTopProducts() {
    this.productService.getTop().subscribe(
      (data: Products[]) => {
        this.topProducts = data;
      },
      (error) => {
        console.error('Error fetching top products: ', error);
      }
    );
  }
}
