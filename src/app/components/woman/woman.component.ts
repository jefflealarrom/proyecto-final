import { Products } from './../../interfaces/products.—type=“interface”';
import { Component, inject } from '@angular/core';
import { AllProductosService } from 'src/app/services/all-productos.service';

@Component({
  selector: 'app-woman',
  templateUrl: './woman.component.html',
  styleUrls: ['./woman.component.css']
})

export class WomanComponent {

  products: Products[] = [];
  servicio = inject(AllProductosService)
 
  ngOnInit(){

      this.servicio.getWoman().subscribe((
        data: Products[]) => {
          console.log(data);

        this.products = data;
      })

  }

}