import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { AuthorizationService } from '../services/authorization.service';
import { NavigationService } from '../services/navigation.service';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate, CanLoad {
  constructor(
    private route: Router,
    private authorization: AuthorizationService,
    private navigationService: NavigationService
  ) {}

  canActivate(): boolean {
    return this.isUserAdmin();
  }

  canLoad(): boolean {
    return this.isUserAdmin();
  }

  private isUserAdmin(): boolean {
    if (this.authorization.isAdmin()) {
      this.navigationService
        .setNavigationRules(2, true)
        .pipe(take(1))
        .subscribe();
      return true;
    }
    this.route.navigateByUrl('');

    return false;
  }
}
