import { Component, OnInit, inject } from '@angular/core';
import { LoginService } from './../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css']
})
export class ShowUserComponent implements OnInit {
  currentUser: any;
  private loginService = inject(LoginService)
  private router = inject(Router)

  ngOnInit(): void {
    this.loadCurrentUser();
  }

  logout(): void {
    this.loginService.logout();
    this.router.navigate(['/logIn']); 
  }

  editUser(): void {
    this.router.navigate(['/edit-user']); 
  }

  loadCurrentUser(): void {
    this.currentUser = this.loginService.getCurrentUserFromLocalStorage();
  }
  deleteUser(): void {
    if (this.currentUser && this.currentUser.id) {
      const userId = this.currentUser.id;
      this.loginService.deleteUser(userId).subscribe({
        next: (response: any) => {
          console.log('Usuario eliminado:', response);
          this.router.navigate(['/logIn']);
        },
        error: (error: any) => {
          console.error('Error al eliminar usuario:', error);
        }
      });
    }
  }

}
