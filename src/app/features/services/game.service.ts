import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Game } from '../models/game.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Game[]> {
    return this.http.get<Game[]>(`${environment.baseApiURL}games`);
  }

  getGameById(id: number): Observable<Game> {
    return this.http.get<Game>(`${environment.baseApiURL}games/${id}`);
  }

  getGamesByName(name: string): Observable<Game[]> {
    return this.http
      .get<Game[]>(`${environment.baseApiURL}games`)
      .pipe(
        map((games) =>
          games.filter((games) =>
            games.name.toLowerCase().includes(name.toLowerCase())
          )
        )
      );
  }
}
