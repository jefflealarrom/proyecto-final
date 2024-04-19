import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.“interface”';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  loginService = inject(LoginService)
  menuOpen: boolean = false;
  loggedInUser: User | null = null;
  router = inject(Router)

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  ngOnInit(): void {
    this.loggedInUser = this.loginService.getCurrentUserFromLocalStorage();
  }

  isActiveRoute(route: string): boolean {
    return this.router.url === route;
  }

}
