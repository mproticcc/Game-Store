import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdminModalComponent } from '../admin-modal/admin-modal.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  constructor(private dialog: MatDialog) {}

  createGame(): void {
    this.dialog.open(AdminModalComponent, {
      data: {
        title: 'New Game',
        buttonName: 'Create Game',
      },
      position: { top: '40px' },
      width: '40%',
    });
  }
}
