import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.css']
})
export class LogOutComponent {

loginService = inject(LoginService)
router = inject(Router)

  logout(): void {
    this.loginService.logout();
    this.router.navigate(['/logIn']); 

    //mover la funcion al componente logout?
  }

}
