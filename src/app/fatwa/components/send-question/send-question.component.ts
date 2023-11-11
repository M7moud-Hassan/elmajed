import { AfterViewInit, Component, HostListener } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FatawaService } from '../../core/services/fatawa.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { PopUpCardComponent } from 'src/app/shared/components/pop-up-card/pop-up-card.component';

@Component({
  selector: 'app-send-question',
  templateUrl: './send-question.component.html',
  styleUrls: ['./send-question.component.css']
})
export class SendQuestionComponent implements AfterViewInit {
  windowWidth:number = 0;
  ageList:string[]=[];
  pageHeaderObj:any = {
    title:'لدي سؤال',
    hasSubTitle : false,
    subtitle:'',
    total:0
  };
  selectAgeError:boolean = false;
  @HostListener('window:resize', ['$event'])
  onWindowResize(event: Event) {
    this.windowWidth = window.innerWidth;
  }
  ngAfterViewInit(): void {
    this.windowWidth = window.innerWidth;
  }

  form:FormGroup = new FormGroup({});
  constructor(private fb:FormBuilder,private service:FatawaService,private router:Router,private dialog: MatDialog) {}


  ngOnInit(): void {
  this.createForm();
  this.windowWidth = window.innerWidth;
  this.createAgeDropdownValue();
  }
  createAgeDropdownValue()
  {
    let increamentValue = 5;
    let start = 10;
    let end = 100;
    for (let i = start; i < end; i=i+increamentValue) {
      const agePeriod = this.changeIntoArabic(`${i} - ${i+increamentValue}`);
      this.ageList.push(agePeriod);
    }
  }
  createForm(){
    this.form = this.fb.group({
      senderName:['',[Validators.required]],
      ques:['',[Validators.required]],
      email:['',[Validators.required,Validators.email,]],
      country:['',[Validators.required]],
      age:['0',[Validators.required,Validators.minLength(5)]]
      // age:['10 - 15']
    })
   }
   changeIntoArabic(text:any){
    const arabicDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
  
    const transformedDate = text.replace(/\d/g, (digit:any) => {
      return arabicDigits[parseInt(digit)];
    });
    return transformedDate;
   }
  submit(){
    if(!this.form.valid){
      this.markAllAsTouched(this.form);
      if(this.age?.value == '0'){
      this.selectAgeError = true;
      }
      return;
    }
    let now = new Date();
    const date = now.toLocaleDateString('ar-EG');
    this.form.addControl('date',new FormControl(date));
    //this.printAllData(this.form.value);

    this.service.sendFatwaByEmail(this.form.value).subscribe({
      next:(res)=>{
        if(res.status == 200 && res.success == true){
          this.form.reset();
          this.opensendQuestionDialog();
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

  get senderName(){
    return this.form.get("senderName");
  }
  get ques(){
    return this.form.get("ques");
  }
  get email(){
    return this.form.get("email");
  }
  get country(){
    return this.form.get("country");
  }
  get age(){
    return this.form.get("age");
  }
  opensendQuestionDialog() {
    const dialogRef = this.dialog.open(PopUpCardComponent, {
      width: `${this.windowWidth>676?'55%':'100%'}`,
      disableClose: true,
      data: {
        reason:'sendQuestion',
        title: 'تم إرسال الرسالة بنجاح',
        message: 'سيتم  الرد عليك قريبا وارسال رسالة  تأكيد',
        image:'/assets/images/popUp_1.svg',
        label:'حسنا',
        submit:()=>{
          const url = `/fatawa/send-question`;
          this.router.navigateByUrl(url);
        }
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      //
    });
  }
}

