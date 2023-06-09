import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterUser } from '../models/register-user.model';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';
import { Role } from '../models/role.model';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  constructor(private http: HttpClient) {}

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
}
