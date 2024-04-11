import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  cartItems: any[] = []

  constructor() { }

  addToCart(product: any) {
    this.cartItems.push(product)
    console.log('Producto agregado al carrito:', product);
}
removeCart(product: any) {
  const index = this.cartItems.indexOf(product);
  if (index !== -1) {
    this.cartItems.splice(index, 1);
  }
}
}
