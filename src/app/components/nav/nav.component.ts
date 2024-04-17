import { Component, inject } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  loginService = inject(LoginService)
  menuOpen: boolean = false;

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

}
