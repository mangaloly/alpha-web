import { ComponentType } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { PopupComponent } from '../common/popup/popup.component';
import { SuccessModalComponent } from '../common/success-modal/success-modal.component';

@Injectable({
  providedIn: 'root'
})
export class SuccessService {

  constructor(public dialog: MatDialog, public router: Router, public route: ActivatedRoute) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(SuccessModalComponent, {
      width: '420px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate(['/home'], { relativeTo: this.route });
    })
  }

  openPopup(): void {
    const dialogRef = this.dialog.open(PopupComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate(['/home'], { relativeTo: this.route });
    })
  }

}
