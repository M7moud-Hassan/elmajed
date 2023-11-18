import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseVM } from '../models/responseVM';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor(private http:HttpClient) { }
  
  getAbout():Observable<ResponseVM>{
    return this.http.get<ResponseVM>(`${environment.baseUrl}/about`);
  }
}
