import { Injectable } from '@angular/core';
import { Products } from '../interfaces/products.—type=“interface”';
 
@Injectable({
  providedIn: 'root'
})
export class ShopService {
  cartItems: Products[] = [];
 
  // addToCart(product: any): void {
  //   this.cartItems.push(product);
    
  // }

  addToCart(product: Products, quantity: number): void {
    const existingProduct = this.cartItems.find(item => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += quantity;
    } else {
      const newProduct = { ...product, quantity: quantity };
      this.cartItems.push(newProduct);
    }
  }

  removeCart(product: Products): void {
    const index = this.cartItems.indexOf(product);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
    }
  }

  buyProduct(product: Products): void {
    this.removeCart(product);
  }

  buyAll(): void {
    this.cartItems = [];
  }

  deleteAll(): void {
    this.cartItems = [];
  }

  getProductQuantityById(productId: string): number {
    return this.cartItems.reduce((total, item) => {
      return item.id === productId ? total + item.quantity : total;
    }, 0);
  }
  
  

  getProductTotalPriceById(productId: string): number {
    return this.cartItems.reduce((total, item) => {
      if (item.id === productId) {
        const price = parseFloat(item.price.replace(',', '.'));
        return total + (price * item.quantity);
      }
      return total;
    }, 0);
  }

  getTotalQuantity(): number {
    return this.cartItems.reduce((total, item) => total + item.quantity, 0);
  }
  
}



