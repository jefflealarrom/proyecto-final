import { LoginService } from './../../services/login.service';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.“interface”';

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
      const userData = this.formulario.value;
      // Envía los datos del formulario a la API para agregar un nuevo usuario
      this.loginService.addUser(userData).subscribe({
        next: (response: User) => {
          console.log('Respuesta de la API:', response);
          this.router.navigate(['/home']);
        },
        error: (error: any) => {
          console.error('Error al agregar usuario:', error);
          this.mensajeError = 'Ocurrió un error al intentar agregar el usuario.';
        }
      });
    }
  }

  close(): void {
    this.router.navigate(['/blog']);
  }
}
