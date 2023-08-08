import { SearchService } from './../../../../shared/services/search.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { take, Subject, takeUntil, debounceTime } from 'rxjs';
import { Game } from 'src/app/features/models/game.model';
import { GameService } from 'src/app/features/services/game.service';
import { LoadingService } from 'src/app/shared/services/loading.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
})
export class GamesComponent implements OnInit, OnDestroy {
  loading$ = this.loader.loading$;

  games?: Game[];

  searchedValue: string = '';

  private subscription$: Subject<void> = new Subject<void>();

  constructor(
    private gameService: GameService,
    private searchService: SearchService,
    private loader: LoadingService
  ) {}

  ngOnInit(): void {
    this.getAll();
    this.getSearchValue();
  }

  ngOnDestroy(): void {
    this.subscription$.next();
    this.subscription$.complete();
  }

  private getAll(): void {
    this.gameService
      .getAll()
      .pipe(take(1))
      .subscribe((games) => {
        this.games = games;
      });
  }
  private getSearchValue(): void {
    this.searchService.searchedValue$
      .pipe(takeUntil(this.subscription$), debounceTime(1500))
      .subscribe((value) => {
        this.searchedValue = value;
        this.getGamesByName();
      });
  }

  private getGamesByName(): void {
    this.gameService
      .getGamesByName(this.searchedValue)
      .pipe(take(1))
      .subscribe((games) => (this.games = games));
  }
}
