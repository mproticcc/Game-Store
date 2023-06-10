import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Link } from '../models/link-model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Link[]> {
    return this.http.get<Link[]>(`${environment.baseApiURL}links`);
  }

  setNavigationRules(linkId: number, rule: boolean): Observable<Object> {
    return this.http.patch(`${environment.baseApiURL}links/${linkId}`, {
      rules: rule,
    });
  }
}
