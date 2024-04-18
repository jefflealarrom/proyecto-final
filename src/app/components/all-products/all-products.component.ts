import { AllProductosService } from 'src/app/services/all-productos.service';
import { Component, OnInit, inject } from '@angular/core';
import { Products } from 'src/app/interfaces/products.—type=“interface”';
// import { Router } from '@angular/router';
@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  products: Products[] = [];
  productService = inject(AllProductosService)
  // router = inject(Router)

  ngOnInit(): void {
    this.fetchPosts();
  }
  fetchPosts(): void {
    this.productService.getAll().subscribe((
      data: Products[]) => {
      this.products = data;
    },
      (error) => {
        console.error('Error al obtener los productos:', error);
      }
    );
  }

  // addToCart(product : Products): void {
  //   this.router.navigate(['/shop'])
  // }

  // la funcion addtocard esta bien definida, tambien se puede usar el router link directamemte desde el html, creo que podría ser mas fácil a la hora de manejar errores
  
}