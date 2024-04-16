import { LoginService } from './../../services/login.service';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.“interface”';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  formulario!: FormGroup;
  mensajeError: string | null = null;
  mensajeUser: string | null = null; //prguntar a jose 
  private fb = inject(FormBuilder)
  private loginService = inject(LoginService)
  private router = inject(Router)

  ngOnInit(): void {
    this.formulario = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,]]
    });
  }
  
  onSubmit(): void {
    const { email, password } = this.formulario.value;
    this.loginService.validUser(email, password).subscribe({
      next: (users: User[]) => { 
        const user = users.find(u => u.email === email && u.password === password);
        if (user) {
          this.loginService.setUserLocalStorage(user);
          this.router.navigate(['/user']);
        } else {
          this.mensajeError = 'Usuario o contraseña incorrectas.';
          console.log('usuario');
        }
      },
      error: (error: User) => {
        console.error('Error al hacer login:', error);
        this.mensajeError = 'Error al hacer login';
      }
    });
  }
}

