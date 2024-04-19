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
    const numImages = 3; // Número total de imágenes
    this.index = (this.index + 1) % numImages;
  }
  
  prevImage() {
    const numImages = 3; // Número total de imágenes
    this.index = (this.index - 1 + numImages) % numImages;
  }
  

  addToCart(product: Products) {
    this.shopService.addToCart(product);
  }

}

