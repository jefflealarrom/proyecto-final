import { Component, inject } from '@angular/core';
import { Products } from 'src/app/interfaces/products.—type=“interface”';
import { AllProductosService } from 'src/app/services/all-productos.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  products: Products [] = [];
  servicio = inject(AllProductosService)

  ngOnInit(): void {
    this.servicio.getId('1').subscribe((data: Products) => {
      console.log(data);
      this.products = [data];
    });
  }
}
