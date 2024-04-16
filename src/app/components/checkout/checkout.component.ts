import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from 'src/app/interfaces/products.—type=“interface”';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  
  purchasedProducts: Products[] = [];
  route = inject(ActivatedRoute)

  ngOnInit(): void {
    this.purchasedProducts = history.state.products;
  }
}
