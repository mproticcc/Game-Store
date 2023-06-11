import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Game } from '../models/game.model';
import { environment } from 'src/environments/environment';
import { LoadingService } from 'src/app/shared/services/loading.service';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  loading$ = this.loader.loading$;

  constructor(private http: HttpClient, private loader: LoadingService) {}

  getAll(): Observable<Game[]> {
    return this.http.get<Game[]>(`${environment.baseApiURL}games`);
  }

  getGameById(id: number): Observable<Game> {
    return this.http.get<Game>(`${environment.baseApiURL}games/${id}`);
  }

  delete(game: Game): Observable<Object> {
    return this.http.delete(`${environment.baseApiURL}games/${game.id}`);
  }

  createNewGame(game): Observable<Game> {
    return this.http.post<Game>(`${environment.baseApiURL}games`, game);
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
