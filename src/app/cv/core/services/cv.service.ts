import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseVM } from 'src/app/shared/core/models/responseVM';
import { Observable, retry} from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { ResponseDetailsVM } from 'src/app/shared/core/models/response-details-vm';

@Injectable({
  providedIn: 'root'
})
export class CVService {

  constructor(private http:HttpClient) { }

  getCurriculumVitae():Observable<ResponseVM>{
    const url = `${environment.baseUrl}/categories/curriculum-vitae`;
    return this.http.get<ResponseVM>(url).pipe(retry(3));
  }
  getDetailedCurriculumVitae(slug:string):Observable<ResponseDetailsVM>{
    const url = `${environment.baseUrl}/archives/${slug}`;
    return this.http.get<ResponseDetailsVM>(url).pipe(retry(3));
  }
}
