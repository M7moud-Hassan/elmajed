import { Component, ViewChild } from '@angular/core';
import { DialogVideoImageComponent } from 'src/app/shared/components/dialog-video-image/dialog-video-image.component';

@Component({
  selector: 'app-courses-content',
  templateUrl: './courses-content.component.html',
  styleUrls: ['./courses-content.component.css']
})
export class CoursesContentComponent {
  @ViewChild('dialog', { static: true }) dialog: DialogVideoImageComponent | undefined;
  play(){
    this.dialog!.openVideo('https://www.youtube.com/embed/DZYXs7WqZww?si=KGWKRSqpixaMoenW')
  }
}
