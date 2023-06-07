import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { Game } from 'src/app/features/models/game.model';
import { GameService } from 'src/app/features/services/game.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
})
export class GamesComponent implements OnInit {
  games?: Game[];
  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.getAll();
  }

  private getAll(): void {
    this.gameService
      .getAll()
      .pipe(take(1))
      .subscribe((games) => {
        this.games = games;
      });
  }
}
