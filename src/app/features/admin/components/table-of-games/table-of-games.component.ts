import { NotificationService } from '../../../../shared/services/notification.service';
import { GameService } from '../../../services/game.service';
import { Component, OnInit } from '@angular/core';
import { catchError, take } from 'rxjs';
import { Game } from 'src/app/features/models/game.model';
import { MatDialog } from '@angular/material/dialog';
import { AdminModalComponent } from '../admin-modal/admin-modal.component';

@Component({
  selector: 'app-table-of-games',
  templateUrl: './table-of-games.component.html',
  styleUrls: ['./table-of-games.component.scss'],
})
export class TableOfGamesComponent implements OnInit {
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

  constructor(
    private gameService: GameService,
    private notification: NotificationService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getAll();
  }

  onDelete(game: Game): void {
    this.gameService
      .delete(game)
      .pipe(
        take(1),
        catchError((err: string) => {
          this.notification.snackbarNotification(
            'Something went wrong, game was not deleted',
            'Ok',
            'center',
            'top',
            3000
          );
          return err;
        })
      )
      .subscribe(() => {
        this.notification.snackbarNotification(
          'Successfully deleted',
          'Ok',
          'center',
          'top',
          2500
        );

        this.getAll();
      });
  }

  onEdit(game: Game): void {
    this.dialog.open(AdminModalComponent, {
      data: {
        title: 'Edit Game',
        buttonName: 'Update game',
        game: game,
        isEditClicked: true,
      },
      position: { top: '40px' },
      width: '40%',
    });
  }

  private getAll(): void {
    this.gameService
      .getAll()
      .pipe(take(1))
      .subscribe((games) => (this.dataSource = games));
  }
}
