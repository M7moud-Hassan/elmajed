import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { HomeService } from 'src/app/home/core/services/home.service';

@Component({
  selector: 'app-video-audio',
  templateUrl: './video-audio.component.html',
  styleUrls: ['./video-audio.component.css']
})
export class VideoAudioComponent implements OnInit{
  myForm: any;
  constructor(private service:HomeService,private fb: FormBuilder) {
  }
  items:any[]=[]  
  itemAll:any[]=[]
  ngOnInit(): void {
    this.getData()
    this.myForm = this.fb.group({
      search: [''],
      type:[''],
      type2:[''],
      special:['']
    })
   
  }
  getData() {
    this.service.getCourses(1, 1000).subscribe(res => {
      const items1 = res.data.items;
      this.service.getLessons(1, 1000).subscribe(res2 => {
        const items2 = res2.data.items;
        // console.log(res2.data.items);
        
        
        this.items = this.interleaveArrays(items1, items2);
        this.itemAll=this.items
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
  submit(){
    var search=this.itemAll
   if(this.myForm.get('search').value !=""){
    this.items=[]
    this.itemAll.forEach((e:any)=>{
      if(e.title.includes(this.myForm.get('search').value)){
        this.items.push(e)
      }
    })
   }
   else{
    this.items=this.itemAll
   }

   
   if(this.myForm.get('type').value && this.myForm.get('type2').value){
    
   }else{
   if(this.myForm.get('type').value){
    if(this.myForm.get('search').value!=""){
      search=this.items
      this.items=[]
     }
    search.forEach((e:any)=>{
      if(e.type='lession'){
        this.items.push(e)
      }
    })
   }
   if(this.myForm.get('type2').value){
    if(this.myForm.get('search').value!=""){
      search=this.items
      this.items=[]
     }
    search.forEach((e:any)=>{
      if(e.type='course'){
        this.items.push(e)
      }
    })
   }
  }

  
   
  }
}
