import { LoginService } from './../../services/login.service';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from 'src/app/interfaces/products.—type=“interface”';
import { User } from 'src/app/interfaces/user.“interface”';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  purchasedProducts: Products[] = [];
  route = inject(ActivatedRoute)
  loginService = inject(LoginService)
  loggedInUser: User | null = null;
  total: number = 0;

  ngOnInit(): void {
    this.purchasedProducts = history.state.products;
    this.loggedInUser = this.loginService.getCurrentUserFromLocalStorage();
    this.calculateTotal();
  }

  calculateTotal(): void {
    this.total = this.purchasedProducts.reduce((acc, product) => {
      const price = parseFloat(product.price.replace(',', '.'));
      return acc + (price * product.quantity);
    }, 0);
    this.total = parseFloat(this.total.toFixed(2));
  }
}