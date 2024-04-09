import { Component, inject } from '@angular/core';
import { Products } from 'src/app/interfaces/products.—type=“interface”';
import { AllProductosService } from 'src/app/services/all-productos.service';

@Component({
  selector: 'app-man',
  templateUrl: './man.component.html',
  styleUrls: ['./man.component.css']
})
export class ManComponent {

  products: Products[] = [];
  servicio = inject(AllProductosService)
  
  ngOnInit(){

      this.servicio.getMan().subscribe((
        data: Products[]) => {
          console.log(data);

          this.products = data.filter(product => product.gender === 'Male');
      })

  }

}
