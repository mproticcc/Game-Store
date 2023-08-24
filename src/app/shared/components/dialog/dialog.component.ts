import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA)
    private dialogRef: MatDialogRef<DialogComponent>
  ) {}

  leavePage(): void {
    this.dialogRef.close(true);
  }

  stayOnPage(): void {
    this.dialogRef.close(false);
  }
}
