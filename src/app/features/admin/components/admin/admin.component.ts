import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GameAdministrationModalComponent } from '../game-administration-modal/game-administration-modal.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  constructor(private dialog: MatDialog) {}

  createGame(): void {
    this.dialog.open(GameAdministrationModalComponent, {
      data: {},
      position: { top: '40px' },
      width: '40%',
    });
  }
}
