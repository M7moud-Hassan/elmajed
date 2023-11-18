import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { ResponseDetailsVM } from '../models/response-details-vm';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http:HttpClient) { }

  getDetails(slug:string):Observable<ResponseDetailsVM>{
    const url = `${environment.baseUrl}/archives/${slug}`;
    return this.http.get<ResponseDetailsVM>(url).pipe( retry(3));
  }

  // getItemLink(path:string,slug:string){
  //   ///TODO : Fix the link according to path.
  //   //http://localhost:4200/projectDetails/mshroaa-2
  //   const domainName =  location.hostname.split('.').slice(-2).join('.')
  //   // const domainName =  "https://fatway-7326f.web.app"
  //   const portNumber = location.port ? `:${location.port}` : '';    
  //   let url = `${domainName}${portNumber}/${path}/${slug}`;
  //   // let url = `${domainName}/${path}/${slug}`;
  //   return url;
  // }
  getItemLink(path:string,slug:string){
    const currentUrl = window.location.href;
    const baseUrl = currentUrl.split('/').slice(0, 3).join('/');  
    let url = `${baseUrl}${path}`;
    return url;
  }

}
