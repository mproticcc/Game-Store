import { Platform } from './../../../models/platform.model';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { Game } from 'src/app/features/models/game.model';
import { GameService } from 'src/app/features/services/game.service';
import { PlatformService } from 'src/app/features/services/platform.service';

@Component({
  selector: 'app-game-overview',
  templateUrl: './game-overview.component.html',
  styleUrls: ['./game-overview.component.scss'],
})
export class GameOverviewComponent implements OnInit {
  game?: Game;

  platforms?: Platform[];

  constructor(
    private activeRoute: ActivatedRoute,
    private gameService: GameService,
    private platformService: PlatformService
  ) {}

  ngOnInit(): void {
    const ID = Number(this.activeRoute.snapshot.paramMap.get('gamesId'));
    this.getSingleGame(ID);
    this.getAllPlatforms();
  }

  private getSingleGame(id: number) {
    this.gameService
      .getGameById(id)
      .pipe(take(1))
      .subscribe((game) => (this.game = game));
  }

  private getAllPlatforms(): void {
    this.platformService
      .getAll()
      .pipe(take(1))
      .subscribe((platforms) => (this.platforms = platforms));
  }
}
