import { Component, OnInit, inject } from '@angular/core';
import { LoginService } from './../../services/login.service';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.“interface”';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css']
})
export class ShowUserComponent implements OnInit {
  currentUser!: User;
  private loginService = inject(LoginService)
  private router = inject(Router)

  ngOnInit(): void {
    this.loadCurrentUser();
  }

  logout(): void {
    this.loginService.logout();
    this.router.navigate(['/logOut']); 
  }

  editUser(): void {
    this.router.navigate(['/edit-user']); 
  }

  loadCurrentUser(): void {
    const userFromLocalStorage = this.loginService.getCurrentUserFromLocalStorage();
    if (userFromLocalStorage) {
      this.currentUser = userFromLocalStorage;
    } else {
      this.router.navigate(['/login']);
    }
  }
  
  // deleteUser(): void {
  //   if (this.currentUser && this.currentUser.id) {
  //     const userId = this.currentUser.id;
  //     this.loginService.deleteUser(userId).subscribe({
  //       next: (response: User) => {
  //         console.log('Usuario eliminado:', response);
  //         this.router.navigate(['/logOut']);
  //       },
  //       error: (error: User) => {
  //         console.error('Error al eliminar usuario:', error);
  //       }
  //     });
  //   }
  // }

}
