import { Router } from '@angular/router';
import { ShopService } from './../../services/shop.service';
import { Component, OnInit, inject } from '@angular/core';
import { Products } from 'src/app/interfaces/products.—type=“interface”';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  cartItems: Products[] = [];
  total: number = 0;
  shopService = inject(ShopService)
  router = inject(Router)
  

  ngOnInit(): void {
    this.loadCartItems();
    this.calculateTotal();
  }

  loadCartItems() {
    this.cartItems = this.shopService.cartItems;
  
  }

  addToCart(product: Products, quantity: number) {
    this.shopService.addToCart(product, quantity);
    this.loadCartItems();
    this.calculateTotal();
  }
  

  removeCart(product: Products) {
    this.shopService.removeCart(product);
    this.loadCartItems();
    this.calculateTotal();
  }

  buyAll() {
    this.shopService.buyAll();
    this.router.navigate(['/checkout'], { state: { products: this.cartItems } });
  }

  buyOne(product: Products) {
    this.shopService.buyProduct(product); 
    this.router.navigate(['/checkout'], { state: { products: [product] } }); 
  }

  deleteAll() {
    this.shopService.deleteAll();
    this.loadCartItems();
    this.calculateTotal();
  }

  calculateTotal() {
    this.total = this.cartItems.reduce((acc, item) => {
      const price = parseFloat(item.price.replace(',', '.'));
      return acc + price * item.quantity;
    }, 0);
    this.total = parseFloat(this.total.toFixed(2));
  }


  getProductQuantity(productId: string): number {
    return this.shopService.getProductQuantityById(productId);
  }
  

  getProductQuantityById(productId: string): number {
    return this.shopService.getProductTotalPriceById(productId);
  }


  getProductTotalPrice(productId: string): number {
    return this.shopService.getProductTotalPriceById(productId);
  }
  
  
  
  
}

