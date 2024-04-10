import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({   
  selector: 'app-registre', 
  templateUrl: './registre.component.html', 
  styleUrls: ['./registre.component.css'] })
export class RegistreComponent {

  registro: FormGroup;
  constructor(){
    this.registro=new FormGroup({
      nombre: new FormControl(),
      apellidos: new FormControl(),
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
    console.log("enviando datos");
  
  }

}
