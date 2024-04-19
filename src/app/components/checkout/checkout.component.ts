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

  ngOnInit(): void {
    this.purchasedProducts = history.state.products;
    this.loggedInUser = this.loginService.getCurrentUserFromLocalStorage();
    
  }
}
