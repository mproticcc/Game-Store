import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { AuthorizationService } from '../services/authorization.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate, CanLoad {
  constructor(
    private route: Router,
    private authorization: AuthorizationService
  ) {}

  canActivate(): boolean {
    return this.isUserAdmin();
  }

  canLoad(): boolean {
    return this.isUserAdmin();
  }

  private isUserAdmin(): boolean {
    if (this.authorization.isAdmin()) {
      return true;
    }

    this.route.navigateByUrl('');
    return false;
  }
}
