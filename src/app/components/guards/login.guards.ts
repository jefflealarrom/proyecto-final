import { inject } from "@angular/core";
import { Router } from "@angular/router";
 
export const loginGuard = () => {
 
    const router = inject(Router)
 
    if (localStorage.getItem('currentUser')) {
        return true;
    } else{
        router.navigate(['/logIn'])
        return false;
    }
}