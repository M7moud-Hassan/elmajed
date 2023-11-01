import { Component } from '@angular/core';
import { FatawaService } from 'src/app/fatwa/core/services/fatawa.service';

@Component({
  selector: 'app-fatawa-quick-search-card',
  templateUrl: './fatawa-quick-search-card.component.html',
  styleUrls: ['./fatawa-quick-search-card.component.css']
})
export class FatawaQuickSearchCardComponent  {
 
  constructor(private service:FatawaService){}
  
  getFatawySearch(key:any){
    key = parseInt(key);
    this.service.getFatwaDetails(key).subscribe({
      next : (res:any)=>{
        if(res.status==200 && res.success==true){
          if(res.data.data[0].id != null){
            // alert(res.data.data[0].id != null);
            // this.router.navigate(["/fatwa/fatwaDetails",key]);
          }else{
            // this.resultCount = this.result.length;
          }
          // this.result = res.data.data as IShortFatwaRecord[];
          // this.resultCount = this.result.length;
        }
      }
    })
  }
  onKeyPress(event: KeyboardEvent) {
    const inputChar = String.fromCharCode(event.charCode);
    const pattern = /^[0-9]*$/;
    if (!pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
}
