import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  
  purchasedProducts: any[] = [];
  route = inject(ActivatedRoute)

  ngOnInit(): void {
    this.purchasedProducts = history.state.products;
  }
}
