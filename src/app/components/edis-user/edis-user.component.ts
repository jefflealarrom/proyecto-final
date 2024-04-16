import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-edis-user',
  templateUrl: './edis-user.component.html',
  styleUrls: ['./edis-user.component.css']
})
export class EdisUserComponent implements OnInit {
  currentUser: any;
  selectedImage: File | null = null;
  private loginService = inject(LoginService)
  private router = inject(Router)

  ngOnInit(): void {
    this.currentUser = this.loginService.getCurrentUserFromLocalStorage();
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
