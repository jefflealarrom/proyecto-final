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
  loadCartItems() {
    this.cartItems = this.ShopService.cartItems;
  }
  addToCart(product: any) {
    this.ShopService.addToCart(product);
    this.loadCartItems();
  }
  removeCart(product: any) {
    this.ShopService.removeCart(product);
    this.loadCartItems();
  }
}
