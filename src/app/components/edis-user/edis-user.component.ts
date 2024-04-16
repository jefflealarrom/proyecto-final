import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.“interface”';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-edis-user',
  templateUrl: './edis-user.component.html',
  styleUrls: ['./edis-user.component.css']
})
export class EdisUserComponent implements OnInit {
  currentUser!: User;
  selectedImage: File | null = null;
  private loginService = inject(LoginService)
  private router = inject(Router)

  ngOnInit(): void {
    const userFromLocalStorage = this.loginService.getCurrentUserFromLocalStorage();
    if (userFromLocalStorage) {
      this.currentUser = userFromLocalStorage;
    } else {
      this.router.navigate(['/login']);
    }
  }
  
  saveChanges(): void {
    this.loginService.updateUser(this.currentUser).subscribe({
      next: () => {
        this.router.navigate(['/user']);
      },
      error: (error) => {
        console.error('Error al guardar los cambios:', error);
      }
    });
  }

  

}
