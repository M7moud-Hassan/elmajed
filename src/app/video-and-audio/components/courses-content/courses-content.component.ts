import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from 'src/app/home/core/services/home.service';
import { DialogVideoImageComponent } from 'src/app/shared/components/dialog-video-image/dialog-video-image.component';
import { PaginationVM } from 'src/app/shared/core/models/pagination-vm';

@Component({
  selector: 'app-courses-content',
  templateUrl: './courses-content.component.html',
  styleUrls: ['./courses-content.component.css']
})
export class CoursesContentComponent implements OnInit {
  id:any;
  archives:any[] = [];
  text=''
  pageNumber:number = 1;
  PageSize:number = 1000;
  total:number = 0;
  selectedItems:any[]=[];
  paginationObj: PaginationVM = {
    count: 0,
    total: 0,
    current_page: 0,
    per_page: 0,
    total_pages: 0,
  };
  constructor(private route:ActivatedRoute,private service:HomeService,
    ) {
   route.params.subscribe(res=>{
    this.id=res['id']
   })
    
  }
  item:any
  ngOnInit(): void {
    this.getData(this.id)
  }
  @ViewChild('dialog', { static: true }) dialog: DialogVideoImageComponent | undefined;
  play(id_video:any){ 
    this.dialog!.openVideo('https://www.youtube.com/embed/'+id_video.split('/')[id_video.split('/').length-1])
  }

  getData(id:any){
    this.service.getDetails(id).subscribe(res=>{
      this.item=res.data.item;
      this.archives = this.item.archives;
      if(this.item.category.title=='در وس'){
        this.text='درس'
      }else if(this.item.category.title=='محاضرات')
      {
        this.text='محاضرة'
      }else{
        this.text='دورة'
      }
      console.log(this.item);
      
      this.onPageNumberClicked(1); 
    })
  }

  onPageNumberClicked(pageNumber: number) {
    this.pageNumber = pageNumber;
    this.getElementsByPageSize(pageNumber,10);
  }

  getElementsByPageSize(currentPage:number,pageSize: number ){
    let length = this.archives.length;
    const pageCount = Math.ceil(length / pageSize);
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, length);
    const elements = this.archives.slice(startIndex, endIndex);
    this.selectedItems = elements;
    this.paginationObj = {
      total: length ,
      count: elements.length,
      per_page: pageSize,
      current_page: currentPage,
      total_pages: pageCount
    };
  }
  
  
}
