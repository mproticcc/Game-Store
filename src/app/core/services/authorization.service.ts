import { NotificationService } from './../../shared/services/notification.service';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterUser } from '../models/register-user.model';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';
import { Role } from '../models/role.model';
import { Router } from '@angular/router';

import { Link } from '../models/link-model';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  links: Link[] = [
    {
      id: 1,
      name: 'Home',
      path: 'games',
      rules: true,
    },
    {
      id: 2,
      name: 'Admin',
      path: 'admin',
      rules: false,
    },
    {
      id: 3,
      name: 'Login',
      path: 'login',
      rules: true,
    },
    {
      id: 4,
      name: 'Logout',
      path: '',
      rules: false,
    },
  ];
  constructor(
    private http: HttpClient,
    private route: Router,
    private notification: NotificationService
  ) {}

  getAllLinks(): Observable<Link[]> {
    const link = of(this.links);
    return link;
  }

  login(user: RegisterUser): Observable<User[]> {
    return this.http.get<User[]>(
      `${environment.baseApiURL}users?email=${user.email}&password=${user.password}`
    );
  }

  register(user: User): Observable<User> {
    return this.http.post<User>(`${environment.baseApiURL}users`, user);
  }

  isAdmin(): boolean {
    return sessionStorage.getItem('Role') === Role.Admin;
  }

  getUserId(): string {
    const user = sessionStorage.getItem('User');
    if (!user) {
      return 'Does not exist';
    }
    return JSON.parse(user).id;
  }

  getUserFirstName(): string {
    const user = sessionStorage.getItem('User');
    if (!user) {
      return '';
    }
    return JSON.parse(user).firstName;
  }

  setUserData(user: User[]): void {
    sessionStorage.setItem('Role', user[0].role);
    sessionStorage.setItem(
      'User',
      JSON.stringify({
        firstName: user[0].firstName,
        lastName: user[0].lastName,
        email: user[0].email,
        id: user[0].id,
      })
    );
    this.setNavigationLinkIn();
    this.route.navigateByUrl('/admin');
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
    if (this.isAdmin()) {
      this.links[1].rules = true;
    }
    this.links[2].rules = false;
    this.links[3].rules = true;
  }

  private setNavigationLinkOut(): void {
    this.links[2].rules = true;
    this.links[3].rules = false;
    this.links[1].rules = false;
  }
}
