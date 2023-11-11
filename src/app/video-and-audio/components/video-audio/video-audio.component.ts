import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/home/core/services/home.service';
import { PaginationVM } from 'src/app/shared/core/models/pagination-vm';

@Component({
  selector: 'app-video-audio',
  templateUrl: './video-audio.component.html',
  styleUrls: ['./video-audio.component.css']
})
export class VideoAudioComponent implements OnInit{
  pageNumber:number = 1;
  PageSize:number = 1000;
  total:number = 0;
  selectedItems:any[]=[];
  items:any[]=[];
  paginationObj: PaginationVM = {
    count: 0,
    total: 0,
    current_page: 0,
    per_page: 0,
    total_pages: 0,
  };
  constructor(private service:HomeService) {
  }
  ngOnInit(): void {
    this.getData()
  }

  getData() {
    this.service.getCourses(1, 1000).subscribe(res => {
      const items1 = res.data.items;
      this.service.getLessons(1, 1000).subscribe(res2 => {
        const items2 = res2.data.items;
        console.log(res2.data.items);
        
        this.items = this.interleaveArrays(items1, items2);
        this.total = this.items.length;
        this.onPageNumberClicked(1);
      });
    });
  }
  interleaveArrays(arr1: any[], arr2: any[]): any[] {
    const result = [];
    const maxLength = Math.max(arr1.length, arr2.length);
  
    for (let i = 0; i < maxLength; i++) {
      if (i < arr1.length) {
        result.push({...arr1[i],'type':'course'});
      }
      if (i < arr2.length) {
        result.push({...arr2[i],'type':'lession'});
      }
    }
  
    return result;
  }
  sidebarDisplay: string = 'none';
  overlayDisplay: string = 'none';

  w3_open() {
    this.sidebarDisplay = 'block';
    this.overlayDisplay = 'block';
  }

  w3_close() {
    this.sidebarDisplay = 'none';
    this.overlayDisplay = 'none';
  }

  onPageNumberClicked(pageNumber: number) {
    this.pageNumber = pageNumber;
    this.getElementsByPageSize(pageNumber,10);
  }

  getElementsByPageSize(currentPage:number,pageSize: number ){
    let length = this.items.length;
    const pageCount = Math.ceil(length / pageSize);
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, length);
    const elements = this.items.slice(startIndex, endIndex);
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
