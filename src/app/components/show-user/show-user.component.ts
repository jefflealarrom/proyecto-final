import { Component, OnInit } from '@angular/core';
import { LoginService } from './../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css']
})
export class ShowUserComponent implements OnInit {
  currentUser: any;

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {
    this.currentUser = this.loginService.getCurrentUserFromLocalStorage();
  }

  logout(): void {
    this.loginService.logout();
    this.router.navigate(['/logIn']); // Redirige a la página de inicio de sesión después del cierre de sesión
  }
}

