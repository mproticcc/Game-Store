import { NotificationService } from './../../shared/services/notification.service';
import { Observable, forkJoin, take } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterUser } from '../models/register-user.model';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';
import { Role } from '../models/role.model';
import { Router } from '@angular/router';
import { NavigationService } from './navigation.service';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  constructor(
    private http: HttpClient,
    private route: Router,
    private notification: NotificationService,
    private navigationService: NavigationService
  ) {}

  login(user: RegisterUser): Observable<RegisterUser[]> {
    return this.http.get<RegisterUser[]>(
      `${environment.baseApiURL}users?email=${user.email}&password=${user.password}`
    );
  }

  register(user: User): Observable<User> {
    return this.http.post<User>(`${environment.baseApiURL}users`, user);
  }

  isAdmin(): boolean {
    return sessionStorage.getItem('Role') === Role.Admin;
  }

  setUserData(user: User[]): void {
    this.setNavigationLinkIn();
    sessionStorage.setItem('Role', user[0].role);
    sessionStorage.setItem(
      'User',
      JSON.stringify({
        firstName: user[0].firstName,
        lastName: user[0].lastName,
        email: user[0].email,
      })
    );
  }

  logOutUser(): void {
    this.setNavigationLinkOut();

    sessionStorage.removeItem('User');
    sessionStorage.removeItem('Role');
    this.route.navigateByUrl('');
    this.notification.snackbarNotification(
      'Logout Successfully!',
      'Close',
      'center',
      'top',
      2000
    );
  }

  private setNavigationLinkIn(): void {
    forkJoin({
      login: this.navigationService.setNavigationRules(3, false).pipe(take(1)),
      logOut: this.navigationService.setNavigationRules(4, true).pipe(take(1)),
    }).subscribe(() => {
      if (this.isAdmin()) {
        this.navigationService
          .setNavigationRules(2, true)
          .pipe(take(1))
          .subscribe();
      }
    });
  }

  private setNavigationLinkOut(): void {
    forkJoin({
      login: this.navigationService.setNavigationRules(3, true).pipe(take(1)),
      logOut: this.navigationService.setNavigationRules(4, false).pipe(take(1)),
      admin: this.navigationService.setNavigationRules(2, false).pipe(take(1)),
    }).subscribe();
  }
}
