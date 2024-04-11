import { Injectable } from '@angular/core';
 
@Injectable({
  providedIn: 'root'
})
export class ShopService {
  cartItems: any[] = [];
 
  constructor() { }
  addToCart(product: any): void {
    this.cartItems.push(product);
    
  }
  removeCart(product: any): void {
    const index = this.cartItems.indexOf(product);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
    }
  }
}