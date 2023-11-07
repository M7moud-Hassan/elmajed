import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-carousal-home',
  templateUrl: './item-carousal-home.component.html',
  styleUrls: ['./item-carousal-home.component.css']
})
export class ItemCarousalHomeComponent {
  @Input() item:any

}
