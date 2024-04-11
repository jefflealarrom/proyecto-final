import { ShopService } from './../../services/shop.service';
import { Component, inject } from '@angular/core';
import { ActivatedRoute,  } from '@angular/router';
import { Products } from 'src/app/interfaces/products.—type=“interface”';
import { AllProductosService } from 'src/app/services/all-productos.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  products!: Products;
  servicio = inject(AllProductosService)
  router = inject(ActivatedRoute)
  index: number = 0;
  

  ngOnInit(): void {
    const id = this.router.snapshot.paramMap.get('id');
    if (id !== null) {
      this.servicio.getId(id).subscribe((data: Products) => {
        this.products = data;
        console.log(this.products);
      });
    } else {
      console.error('ID del producto no encontrado en la URL');
    }
  }

  nextImage() {
    // const product = this.products[0];
    // const numImages = [product.img_one, product.img_two, product.img_three].filter(img => img).length;
    // if (this.index < numImages - 1) {
      this.index++;
    // }
  }

  prevImage() {
    // if (this.index > 0) {
      this.index--;
    // }
  }
  constructor(private ShopService: ShopService) { }

  addToCart(product: any) {
    this.ShopService.addToCart(product);
    console.log(ShopService);
    
  }

}
