import { Component, inject } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.“interface”'; 
import { LoginService } from './../../services/login.service';

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css']
})
export class RegistreComponent {
  private loginService = inject(LoginService);
  private router = inject(Router);
  mensajeEnviado: boolean = false;
  formulario!: FormGroup;
  mensajeError: string | null = null;

  ngOnInit(): void {
    this.formulario = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      lastname: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      repito_password: new FormControl('', [Validators.required, Validators.minLength(8)])
    }, { validators: this.comparePassword('password', 'repito_password') }); 
  }

  onSubmit(): void {
    if (this.formulario.valid) {
      const userData = this.formulario.value;
      this.loginService.addUser(userData).subscribe({
        next: (response: User) => {
          console.log('Respuesta de la API:', response);
          this.router.navigate(['/shop']);
        },
        error: (error: User) => { 
          console.error('Error al agregar usuario:', error);
          this.mensajeError = 'Ocurrió un error al intentar agregar el usuario.';
        }
      });
    } else {
      this.mensajeError = 'la contraseñas no coinciden.';
    }
  }

  comparePassword(controlName: string, matchingControlName: string): ValidatorFn {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const control = formGroup.get(controlName);
      const matchingControl = formGroup.get(matchingControlName);

      if (!control || !matchingControl) {
        console.error('Form controls can not be found in the form group');
        return { controlNotFound: false };
      }

      
      if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
        return null;
      }

      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
        return { mustMatch: true };
      } else {
        matchingControl.setErrors(null);
        return null;
      }
    };
  }


}
