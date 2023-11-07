import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-pop-up-card',
  templateUrl: './pop-up-card.component.html',
  styleUrls: ['./pop-up-card.component.css']
})
export class PopUpCardComponent {
  
  constructor(public dialogRef: MatDialogRef<PopUpCardComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  closeDialog() {
    this.dialogRef.close();
  }
  submit() {
    this.dialogRef.close();
    this.data.submit()
  }
}