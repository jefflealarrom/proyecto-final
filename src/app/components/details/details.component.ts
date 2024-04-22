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

  products: Products [] = [];
  servicio = inject(AllProductosService)
  router = inject(ActivatedRoute)
  index: number = 0;
  shopService = inject(ShopService)
  selectedQuantity: number = 1;

  

  ngOnInit(): void {
    const id = this.router.snapshot.paramMap.get('id');
    if (id !== null) {
      this.servicio.getId(id).subscribe((data: Products) => {
        console.log(data);
        this.products = [data];
      });
    } else {
      console.error('ID del producto no encontrado en la URL');
    }
  }

  nextImage() {
    const numImages = 3;
    this.index = (this.index + 1) % numImages;
  }
  
  prevImage() {
    const numImages = 3; 
    this.index = (this.index - 1 + numImages) % numImages;
  }
  

  onQuantityChange(value: string): void {
    this.selectedQuantity = parseInt(value, 10);
  }

  addToCart(product: Products) { 
    const quantityToAdd = this.selectedQuantity !== null ? this.selectedQuantity : 1;
    this.shopService.addToCart(product, quantityToAdd);
  }
  
    

}

