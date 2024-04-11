import { ShopService } from './../../services/shop.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  cartItems: any[] = [];

  constructor(private ShopService: ShopService) { }

  ngOnInit(): void {
    
    this.loadCartItems();
  }
// Carga los productos desde el servicio
  loadCartItems() {
    this.cartItems = this.ShopService.cartItems;
  }
// Añade producto al carro
  addToCart(product: any) {
    this.ShopService.addToCart(product);

    // Carga los productos del carrito cuando se añade uno nuevo
    this.loadCartItems();
  }
}
