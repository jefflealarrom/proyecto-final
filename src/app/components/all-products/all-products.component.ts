// import { Component, OnInit } from '@angular/core';
// import { AllProductosService } from 'src/app/services/all-productos.service';
// import { Product } from './../../interfaces/products.interface';

// @Component({
//   selector: 'app-all-products',
//   templateUrl: './all-products.component.html',
//   styleUrls: ['./all-products.component.css']
// })
// export class AllProductsComponent implements OnInit {
//   products: Product[] = [];

//   constructor(private productService: AllProductosService) { }

//   ngOnInit(): void {
//     this.getProducts();
//   }

//   getProducts(): void {
//     this.productService.getProducts()
//       .subscribe(products => {
//         this.products = products;
//       });
//   }
