import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { ResponseVM } from 'src/app/shared/core/models/responseVM';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

  constructor(private http:HttpClient) { }

  sendQuastion(model:any):Observable<ResponseVM>{
    return this.http.post<ResponseVM>(`${environment.baseUrl}/contacts`,model).pipe(
      retry(3),
    );
  }
  
}
