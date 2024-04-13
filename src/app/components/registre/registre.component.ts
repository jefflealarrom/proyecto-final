import { LoginService } from './../../services/login.service';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css']
})
export class RegistreComponent {
private loginService = inject(LoginService)
  private router = inject(Router)
  mensajeEnviado: boolean = false;
  formulario: FormGroup;
  mensajeError: string | null = null;

  constructor() {
    this.formulario = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      lastname: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      repite_password: new FormControl('', [Validators.required, Validators.minLength(8)])
    });
  }





  onSubmit(): void {
    if (this.formulario.valid) {
      const { email, password } = this.formulario.value;
      this.loginService.getUser(email, password).subscribe({
        next: (response: any) => {
          console.log('Respuesta de la API:', response);
          if (response.id) {

            this.router.navigate(['/home']);
          } else {

            this.mensajeError = 'Credenciales incorrectas.';
          }
        },
        error: (error: any) => {
          console.error('Error al hacer login:', error);
          this.mensajeError = 'Ocurrió un error al intentar hacer login.';
        }
      });
    }
  }
  close(): void {
    
    this.router.navigate(['/blog']);
  }
}
