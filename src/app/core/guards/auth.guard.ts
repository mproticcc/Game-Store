import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { NavigationService } from '../services/navigation.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private route: Router) {}

  canActivate(): boolean {
    return this.isUserLoggedIn();
  }
  canLoad(): boolean {
    return this.isUserLoggedIn();
  }

  private isUserLoggedIn(): boolean {
    const userData = sessionStorage.getItem('User');
    if (userData) {
      this.route.navigateByUrl('');
      return false;
    }
    return true;
  }
}
