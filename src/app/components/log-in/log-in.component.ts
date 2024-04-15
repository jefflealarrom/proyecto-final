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
  mensajeUser: string | null = null; //prguntar a jose 
  private fb = inject(FormBuilder)
  private loginService = inject(LoginService)
  private router = inject(Router)

  ngOnInit(): void {
    this.formulario = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, /*Validators.minLength(8)*/]]
    });
  }

  onSubmit(): void {
    const { email, password } = this.formulario.value;
    this.loginService.validUser(email, password).subscribe({
      next: (response: any[]) => {
        console.log(response)
        const user = response.find(u => u.email === email && u.password === password);
        // console.log(user, 'hola')
        if (user) {
          this.loginService.setUserLocalStorage(user);
          this.router.navigate(['/user']);
        } else {
          //no se esta metiendo por aqui va directo al error de la linea 45 
          this.mensajeError = null;
          this.mensajeUser = 'Usuario o contraseña incorrectas.';
          console.log(this.mensajeUser)
        }
      },
      // error: (error: any) => {
      //   console.error('Error al hacer login:', error);
      //   this.mensajeUser = null; 
      //   this.mensajeError = 'Error al hacer login';
      // }
    });
  }
}

