import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { CVService } from '../../core/services/cv.service';
import { ResponseVM } from 'src/app/shared/core/models/responseVM';
import { ResponseDetailsItemDetailsVM, ResponseDetailsItemVM, ResponseDetailsVM } from 'src/app/shared/core/models/response-details-vm';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CVComponent implements OnInit {
  cv:any;
  slug:string='';
  learnedByInfo:any;
  commissionInfo:any;
  conferencesInfo:any;
  constructor(private service:CVService) { 
  }
  ngOnInit(): void {
    this.getCv();
  }
  getCv(){
    this.service.getCurriculumVitae().subscribe({
      next:(res:ResponseVM)=>{
        if(res.status == 200){
          this.slug=res.data.items[0].slug;
          this.getDetailedCv(this.slug);
        }
      },
      error:(error)=>{
      }
    })
  }
  getDetailedCv(slug:string){
    this.service.getDetailedCurriculumVitae(slug).subscribe({
      next:(res:ResponseDetailsVM)=>{
        if(res.status==200){
          this.cv=res.data.item;
          this.learnedByInfo = {
            label:'على يــد من تتلمـــذ الشيخ ؟',
            content: this.cv.note
          };
          this.commissionInfo = {
            label:'المؤتمرات والندوات و اللجان و التمثيل',
            content: this.cv.representation
          };
          this.conferencesInfo = {
            label:'الإسهام العلمى',
            content: this.cv.conferences
          };
        }
      },
      error:(error)=>{
      }
    })
  }
}
