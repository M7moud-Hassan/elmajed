import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseVM } from 'src/app/shared/core/models/responseVM';
import { Observable} from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ResearchService {
  constructor(private http:HttpClient) { }
  
  getPagedResearch(pageNumer:number,pageSize:number):Observable<ResponseVM>{
    return this.http.get<ResponseVM>(`${environment.baseUrl}/categories/research-and-letters?page=${pageNumer}&count=${pageSize}`);
  }

}
