import { LoginService } from './../../services/login.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent  {

  formulario: FormGroup;
  mensajeError: string | null = null;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {
    this.formulario = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  onSubmit(): void {
    if (this.formulario.valid) {
      const { email, password } = this.formulario.value;
      this.loginService.getUser(email, password).subscribe({
        next: (response) => {
         
          if (response) {
    
            this.router.navigate(['/home']);
          } else {

            this.mensajeError = 'Credenciales incorrectas.';
          }
        },
        error: (error) => {
          console.error('Error al hacer login:', error);
          this.mensajeError = 'Ocurrió un error al intentar hacer login.';
        }
      });
    }
  }
}
