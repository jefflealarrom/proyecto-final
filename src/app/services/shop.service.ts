import { Injectable } from '@angular/core';
 
@Injectable({
  providedIn: 'root'
})
export class ShopService {
  cartItems: any[] = [];
 
  addToCart(product: any): void {
    this.cartItems.push(product);
    
  }
  removeCart(product: any): void {
    const index = this.cartItems.indexOf(product);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
    }
  }

  buyProduct(product: any): void {
    this.removeCart(product);
  }

  buyAll(): void {
    this.cartItems = [];
  }

  deleteAll(): void {
    this.cartItems = [];
  }
}

