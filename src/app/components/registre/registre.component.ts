import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegistreService } from 'src/app/services/registre.service';


@Component({   
  selector: 'app-registre', 
  templateUrl: './registre.component.html', 
  styleUrls: ['./registre.component.css'] })

  export class RegistreComponent {

  registre: FormGroup;

  registreService = inject(registreService);
 
  constructor(){
    this.registre=new FormGroup({
      nombre: new FormControl("", [Validators.required, Validators.minLength(3)]),
      apellidos: new FormControl("", [Validators.required, Validators.minLength(3)]),
      correoElectronico: new FormControl("",[
        Validators.required,
        Validators.email
      ]),
      contraseña: new FormControl("",
      Validators.minLength(6)

      ),
      confirmarContraseña: new FormControl("",
        Validators.minLength(6)
      )
    })
  }

  onSubmit() {
    console.log(this.registre.value.nombre);
    console.log(this.registre.value.apellidos);
    console.log(this.registre.value.correoElectronico); 
    console.log(this.registre.value.contraseña);
    console.log(this.registre.value.confirmarContraseña)


    const formControls = [
      { 
        nombre: new FormControl("", [Validators.required, Validators.minLength(3)]) 
      },
      { 
        apellidos: new FormControl("", [Validators.required, Validators.minLength(3)]) 
      },
      { 
        correoElectronico: new FormControl("", [Validators.required, Validators.email]) 
      },
      { 
        contraseña: new FormControl("", Validators.minLength(6)) 
      },
      { 
        confirmarContraseña: new FormControl("", Validators.minLength(6)) 
      }
    ];
    
    const registre = new FormGroup({});
    
    formControls.forEach(control => {
      const key = Object.keys(control)[0];
      registre.addControl(key, control[key]);
    });
    


   }

}
