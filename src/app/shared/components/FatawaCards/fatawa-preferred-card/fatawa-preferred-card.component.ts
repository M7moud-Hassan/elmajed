import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { FatawaService } from 'src/app/fatwa/core/services/fatawa.service';

@Component({
  selector: 'app-fatawa-preferred-card',
  templateUrl: './fatawa-preferred-card.component.html',
  styleUrls: ['./fatawa-preferred-card.component.css']
})
export class FatawaPreferredCardComponent implements OnChanges {
  @Input() title:any;
  @Input() label:any;
  @Input() id:any;
  @Input() flag:any;
  title_info:any;
  label_info:any;
  id_info:any;
  flag_info:any;
  detailsData:any;

  constructor(private service:FatawaService,private router:Router){}

  ngOnChanges(changes: SimpleChanges): void {
    this.title_info = this.title;
    this.label_info = this.label;
    this.id_info = this.id;
    this.flag_info = this.flag;
  }
  onClickButton(key:any){
    key = parseInt(key);
    if(this.flag_info == 'false'){
      this.getFatawySearch(key);
    }else{
      const url = `/fatawa/related-questions/${key}`;
      this.router.navigateByUrl(url);
    }
  }
  
  getFatawySearch(key:any){
    this.service.getFatwaDetails(key).subscribe({
      next : (res:any)=>{
        if(res.status==200 && res.success==true){
          if(res.data!.data[0].id != null){
            console.log(res.data.data[0]);
            this.detailsData=res.data.data[0];
            this.navigateToRouteWithData();
          }else{
            alert("Not found")
          }
        }
      }
    })
  }
  navigateToRouteWithData() {
    const data = this.detailsData;
    const dataString = encodeURIComponent(JSON.stringify(data));
    const url = `/fatawa/details/${dataString}`;
    this.router.navigateByUrl(url);
  }
  
}
