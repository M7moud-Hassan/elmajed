import { AfterViewInit, Component, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactUsService } from '../../core/services/contact-us.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { PopUpCardComponent } from 'src/app/shared/components/pop-up-card/pop-up-card.component';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements AfterViewInit {
  windowWidth:number = 0;
  pageHeaderObj:any = {
    title:'اتصل بنا',
    hasSubTitle : false,
    subtitle:'',
    total:0
  };
  @HostListener('window:resize', ['$event'])
  onWindowResize(event: Event) {
    this.windowWidth = window.innerWidth;
  }
  ngAfterViewInit(): void {
    this.windowWidth = window.innerWidth;
  }

  form:FormGroup = new FormGroup({});
  constructor(private fb:FormBuilder,private contactUsService:ContactUsService,private router:Router,private dialog: MatDialog) {}


  ngOnInit(): void {
  this.createForm();
  this.windowWidth = window.innerWidth;
  }
  createForm(){
    this.form = this.fb.group({
      name:['',[Validators.required]],
      mobile:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      message:['',[Validators.required]],
      subject:['',[Validators.required]],
    })
   }
  submit(){
    if(!this.form.valid){
      this.markAllAsTouched(this.form);
      return;
    }

    this.contactUsService.sendQuastion(this.form.value).subscribe({
      next:(res)=>{
        if(res.status == 200 && res.success == true){
          this.form.reset();
          //TODO : make alert message .
          // alert("تم ارسال الرسالة بنجاح");
        }
      },
      error:(error)=>{
      }
    });
  }
  markAllAsTouched(myForm:FormGroup): void {
    for (const controlName in myForm.controls) {
      if (myForm.controls.hasOwnProperty(controlName)) {
        myForm.controls[controlName].markAsTouched();
      }
    }
  }
  printAllData(myForm:FormGroup): void {
    let  i = 0;
    let displayedValues:String = "";
    for (const controlName in myForm.controls) {
      i++;
      if (myForm.controls.hasOwnProperty(controlName)) {
        displayedValues += `${i} - ${controlName}: ${myForm.controls[controlName].value} \n`;
        console.log(`${controlName}: ${myForm.controls[controlName].value}`);
      }
    }
    alert(displayedValues);
  }

  get name(){
    return this.form.get('name');
  }
  get mobile(){
    return this.form.get('mobile');
  }
  get email(){
    return this.form.get('email');
  }
  get message(){
    return this.form.get('message');
  }
  get subject(){
    return this.form.get('subject');
  }

  opensendQuestionDialog() {
    const dialogRef = this.dialog.open(PopUpCardComponent, {
      width: `${this.windowWidth>676?'55%':'100%'}`,
      disableClose: true,
      data: {
        reason:'contactUs',
        title: 'تم إرسال الرسالة بنجاح',
        message: 'سيتم  الرد عليك قريبا ',
        image:'/assets/images/popUp_2.svg',
        label:'حسنا',
        submit:()=>{
          const url = `/contact-us`;
          this.router.navigateByUrl(url);
        }
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      //
    });
  }
}
