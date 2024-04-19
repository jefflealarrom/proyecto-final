import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.“interface”';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {

  currentUser!: User | null;
  loginService = inject(LoginService)
  router = inject(Router)


  ngOnInit(): void {
    this.currentUser = this.loginService.getCurrentUserFromLocalStorage();
  }

  deleteUser(): void {
    if (this.currentUser && this.currentUser.id) {
      const userId = this.currentUser.id;
      this.loginService.deleteUser(userId).subscribe({
        next: (response: User) => {
          console.log('Usuario eliminado:', response);
          this.loginService.setUserLocalStorage(null);
          this.router.navigate(['/logOut']);
        },
        error: (error) => {
          console.error('Error al eliminar usuario:', error);
        }
      });
    } else {
      console.error('No hay usuario actual definido.');
    }
  }

}
