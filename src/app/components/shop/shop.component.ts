import { Router } from '@angular/router';
import { ShopService } from './../../services/shop.service';
import { Component, OnInit, inject } from '@angular/core';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  cartItems: any[] = [];
  shopService = inject(ShopService)
  router = inject(Router)

  ngOnInit(): void {
    this.loadCartItems();
  }

  loadCartItems() {
    this.cartItems = this.shopService.cartItems;
  }

  addToCart(product: any) {
    this. shopService.addToCart(product);
    this.loadCartItems();
  }

  removeCart(product: any) {
    this.shopService.removeCart(product);
    this.loadCartItems();
  }

  buyAll() {
    this.shopService.buyAll();
    this.router.navigate(['/checkout'], { state: { products: this.cartItems } });
  }

  buyOne(product: any) {
    this.shopService.buyProduct(product); 
    this.router.navigate(['/checkout'], { state: { products: [product] } }); 
  }

  deleteAll() {
    this.shopService.deleteAll();
    this.loadCartItems();
  }

}


