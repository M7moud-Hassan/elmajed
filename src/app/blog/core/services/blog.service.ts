import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseVM } from 'src/app/shared/core/models/responseVM';
import { Observable} from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http:HttpClient) { }
  
  getPagedBlogs(pageNumer:number,pageSize:number):Observable<ResponseVM>{
    return this.http.get<ResponseVM>(`${environment.baseUrl}/categories/notations?page=${pageNumer}&count=${pageSize}`);
  }
}
