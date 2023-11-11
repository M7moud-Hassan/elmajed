import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pop-up-card',
  templateUrl: './pop-up-card.component.html',
  styleUrls: ['./pop-up-card.component.css']
})
export class PopUpCardComponent {

  constructor(private router:Router,public dialogRef: MatDialogRef<PopUpCardComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  closeDialog() {
    this.dialogRef.close();
    let url='';
    if(this.data.reason == 'sendQuestion'){
      url = `/fatawa/send-question`;
    }else if(this.data.reason == 'notFound'){
      url = `/fatawa/search`;
    }else if(this.data.reason == 'contactUs'){
      url = `/contact-us`;
    }
    this.router.navigateByUrl(url);
  }
  submit() {
    this.dialogRef.close();
    this.data.submit();
  }
}