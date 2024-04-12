import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class RegistreService {

  constructor() { }

  getFormulario(): FormGroup {
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

    return registre;
  }
}
  
}
