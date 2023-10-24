import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(
    // private _dialog: MatDialog,
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _location: Location,
    private _sharedService: SharedService,
    private _activatedRoute:ActivatedRoute,
  ) { }

  get formBuilder(): FormBuilder {
    return this._formBuilder;
  }
  // get dialog(): MatDialog {
  //   return this._dialog;
  // }
  get router(): Router {
    return this._router;
  }
  get activatedRoute(): ActivatedRoute {
    return this._activatedRoute;
  }
  get sharedService(): SharedService {
    return this._sharedService;
  }


  get back() {
    return this._location.back();
  }
  printFormValues(myForm: FormGroup): void {
    let i = 0;
    let displayedValues: String = "";
    for (const controlName in myForm.controls) {
      i++;
      if (myForm.controls.hasOwnProperty(controlName)) {
        displayedValues += `${i} - ${controlName}: ${myForm.controls[controlName].value} \n`;
        console.log(`${controlName}: ${myForm.controls[controlName].value}`);
      }
    }
    alert(displayedValues);
  }
}
