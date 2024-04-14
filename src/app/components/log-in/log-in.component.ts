import { LoginService } from './../../services/login.service';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  formulario!: FormGroup;
  mensajeError: string | null = null;
  mensajeUser: string | null = null;
  private fb = inject(FormBuilder)
  private loginService = inject(LoginService)
  private router = inject(Router)

  ngOnInit(): void {
    this.formulario = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  onSubmit(): void {
    const { email, password } = this.formulario.value;
    this.loginService.validUser(email, password).subscribe({
      next: (response: any[]) => {
        const user = response.find(u => u.email === email && u.password === password);
        if (user) {
          this.loginService.setUserLocalStorage(user);
          this.router.navigate(['/user']);
        } else {
          this.mensajeError = null;
          this.mensajeUser = 'Usuario o contraseña incorrectas.';
        }
      },
      error: (error: any) => {
        console.error('Error al hacer login:', error);
        this.mensajeUser = null; 
        this.mensajeError = 'Ocurrió un error al intentar iniciar sesión. Por favor, inténtalo de nuevo más tarde.';
      }
    });
  }
}

