import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-carousal-home2',
  templateUrl: './item-carousal-home2.component.html',
  styleUrls: ['./item-carousal-home2.component.css']
})
export class ItemCarousalHome2Component {
  @Input() width:string ='100%'
  @Input() show:boolean=false
  @Input() item:any

}
