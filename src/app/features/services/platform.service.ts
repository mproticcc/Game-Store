import { Platform } from './../models/platform.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PlatformService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Platform[]> {
    return this.http.get<Platform[]>(`${environment.baseApiURL}platforms`);
  }
}
