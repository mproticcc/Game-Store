import { MatDialog } from '@angular/material/dialog';
import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';

@Injectable({
  providedIn: 'root',
})
export class ConfirmDeactivateGuard implements CanDeactivate<unknown> {
  constructor(private dialog: MatDialog) {}

  canDeactivate(): boolean | Observable<boolean> {
    const modal = this.dialog.open(DialogComponent, {
      position: { top: '40px' },
      width: '40%',
    });

    return modal.afterClosed();
  }
}
