import { AfterViewInit, Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-fatawa',
  templateUrl: './fatawa.component.html',
  styleUrls: ['./fatawa.component.css']
})
export class FatawaComponent implements AfterViewInit, OnInit {
  windowWidth:number = 0;

  constructor(){}

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: Event) {
    this.windowWidth = window.innerWidth;
  }
  ngAfterViewInit(): void {
    this.windowWidth = window.innerWidth;
  }
  pageHeaderObj = {
    title:'قسم الفتاوى',
    hasSubTitle : false,
    subtitle:'',
    total:0
  };
  pageHeaderDailyFatwaObj = {
    title:'الفتاوى اليومية',
    hasSubTitle : false,
    subtitle:'',
    total:0
  };
  pageHeaderSpeedSearchObj = {
    title:'البحث السريع',
    hasSubTitle : false,
    subtitle:'',
    total:0
  };
  
  questionInfo = {
    img:'/assets/images/question.svg',
    label:'لدي سؤال',
    link:'/fatawa/send-question'
  };
  searchInfo = {
    img:'/assets/images/magnifier.svg',
    label:'ابحث في الفتاوى',
    link:'/fatawa/search'
  };
  todaysFatwaInfo = {
    img:'/assets/images/questions.svg',
    label:'الفتاوى اليومية',
    link:'/fatawa'
  };
  answer:string="الحمد لله أما بعد .. فإن مسألة الإبراء عن الأعيان في صحتها وثبوتها وعدم ذلك نزاع مشهور بين أهل العلم، وقد اختلفت الأقوال في ذلك، وإن كان أكثرهم يرى بأنه لا يصح الإبراء من الأعيان؛ لأن الملك ثابت، ولأن الإبراء إنما يكون في النقد لأنه يتعلق بالذمة لا بالعين؛ بخلاف الأعيان فالحق يتعلق بالعين إلا في حال الفوات كتلف أو سرقة أو فقد ، ولا يكون الإبراء تمليكا صحيحا في الأعيان الحاضرة، إلا في حال الفوات فهو إبراء صحيح ، هذا معنى ما انتهى إليه جماهير الفقهاء. وإذا قلنا: إن ألفاظ العاقدين ومقاصدهم من هذه الألفاظ معتبرة ، وكان الظاهر من لفظ الإبراء عرفا إرادة التمليك لما تحت يده= عاد الخلاف في مثل هذه الحال لفظيا. والله أعلم.";


  @ViewChild('todaysFatwaSection') todaysFatwaSection: any ;

  scrollToTodaysFatwaSection() {
    this.todaysFatwaSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}
