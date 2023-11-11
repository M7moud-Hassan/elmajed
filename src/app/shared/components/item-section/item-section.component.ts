import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-section',
  templateUrl: './item-section.component.html',
  styleUrls: ['./item-section.component.css']
})
export class ItemSectionComponent {
  @Input() item:any

  getSlicedArchives(archives: { title: string }[]): { title: string }[] {
    return archives.slice(0, 3);
  }
}
