import { GameService } from './../../../services/game.service';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { Game } from 'src/app/features/models/game.model';

@Component({
  selector: 'app-games-table',
  templateUrl: './games-table.component.html',
  styleUrls: ['./games-table.component.scss'],
})
export class GamesTableComponent implements OnInit {
  displayedColumns: string[] = [
    'dots',
    'id',
    'name',
    'creator',
    'videoLink',
    'publishDate',
    'Edit',
    'Delete',
  ];

  dataSource!: Game[];

  isAdmin: boolean = false;

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.getAll();
  }

  onDelete(game: Game): void {
    this.gameService
      .delete(game)
      .pipe(take(1))
      .subscribe(() => this.getAll());
  }

  onEdit(game: Game): void {}

  private getAll(): void {
    this.gameService
      .getAll()
      .pipe(take(1))
      .subscribe((games) => (this.dataSource = games));
  }
}
