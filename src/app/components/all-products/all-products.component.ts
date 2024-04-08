import { Component, OnInit, inject } from '@angular/core';
import { AllProductosService } from 'src/app/services/all-productos.service';
import { Product } from './../../interfaces/products.interface';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  
  products: Product[] = [];
  productService = inject(AllProductosService)


  async ngOnInit() {
    const response: Product[] = await this.productService.getAll();
    this.products = response;
  }
  
}
