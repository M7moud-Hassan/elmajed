import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry,Observable } from 'rxjs';
import { ResponseVM } from 'src/app/shared/core/models/responseVM';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class FatawaService {

  constructor(private http:HttpClient) { }

  sendFatwaByEmail(model:any):Observable<ResponseVM>{
    const url = `${environment.baseUrl}/fatwa?cmd=email&ver=1`;
    return this.http.post<ResponseVM>(url,model).pipe(retry(3));
  }
  getAllFatwaCategories():Observable<ResponseVM>{
    //https://salmajed.taiba-soft.com/api/fatwa?cmd=cats
    const url = `${environment.baseUrl}/fatwa?cmd=cats`;
    return this.http.get<ResponseVM>(url).pipe(retry(3));
  }
  getPreferredFatwa():Observable<ResponseVM>{
    //https://salmajed.taiba-soft.com/api/fatwa?cmd=pref
    const url = `${environment.baseUrl}/fatwa?cmd=pref`;
    return this.http.get<ResponseVM>(url).pipe(retry(3));
  }
  getDailyFatwa():Observable<ResponseVM>{
    //https://salmajed.taiba-soft.com/api/fatwa?cmd=day
    const url = `${environment.baseUrl}/fatwa?cmd=day`;
    return this.http.get<ResponseVM>(url).pipe(retry(3));
  }
  getFatwaDetails(fatwaId:number):Observable<ResponseVM>{
    //https://salmajed.taiba-soft.com/api/fatwa?cmd=fatwa&arno=10729
    const url = `${environment.baseUrl}/fatwa?cmd=fatwa&arno=${fatwaId}`;
    return this.http.get<ResponseVM>(url).pipe(retry(3));
  }
  getFatwaFreeSearch(model:any,start:number,count:number,ver:number=1):Observable<ResponseVM>{
    // const url = `${environment.baseUrl}/fatwa?cmd=search&ver=${ver}&title=${model.title}&ques=${model.ques}&ans=${model.ans}&syn1=${model.syn1}&syn2=${model.syn2}&syn3=${model.syn3}&flt=${model.flt}&start=${start}&count=${count}`;
    //https://salmajed.taiba-soft.com/api/fatwa?cmd=search&count=10
    const url = `${environment.baseUrl}/fatwa?cmd=search&ver=${ver}&title=${model.title}&ques=${model.ques}&ans=${model.ans}&syn1=${model.syn1}&syn2=${model.syn2}&syn3=${model.syn3}&flt=${model.flt}&start=${start}&count=${count}`;
    return this.http.get<ResponseVM>(url).pipe(retry(3));
  }
/*



  GETListFatwaByFatwaCategory(catId:number,start:number,count:number,ver:number=1):Observable<IFatwaResponseModel>{
    //https://salmajed.taiba-soft.com/api/fatwa?cmd=bycat&cat=19
    let url = "";
    // if(start == undefined || count==undefined){
      url = `${environment.baseUrl}/fatwa?cmd=bycat&ver=${ver}&cat=${catId}&start=${start}&count=${count}`;
    // }
    // else{
    //   url = `${environment.baseUrl}/fatwa?cmd=bycat&ver=${ver}&cat=${catId}&start=${start}&count=${count}`;
    // }
    return this.http.get<IFatwaResponseModel>(url).pipe(retry(3));
  }

  GETListFatwaByKeyword(kword:number,start:number=0,count:number=20,ver:number=1):Observable<IFatwaResponseModel>{
    //https://salmajed.taiba-soft.com/api/fatwa?cmd=bysyn&kword=2512
    const url = `${environment.baseUrl}/fatwa?cmd=bysyn&ver=${ver}&kword=${kword}&start=${start}&count=${count}`;
    // const url = `${environment.baseUrl}/fatwa?cmd=bysyn&ver=${ver}&kword=${kword}`;
    return this.http.get<IFatwaResponseModel>(url).pipe(retry(3));
  }
  


  getLast30Fatwas(ver:number=1):Observable<IFatwaResponseModel>{
    //https://salmajed.taiba-soft.com/api/fatwa?cmd=last30
    //doesn't have start and count
    const url = `${environment.baseUrl}/fatwa?cmd=last30&ver=${ver}`;
    return this.http.get<IFatwaResponseModel>(url).pipe(retry(3));
  }
  

  // getFatwaFreeSearch(title:string,ques:string,ans:string,syn1:string,syn2:string,syn3:string,flt:string,start:number,count:number,ver:number=1):Observable<IGETFatwaFreeSearchResponse>{
  
  getFatwaFreeSearchWithoutData(start:number,count:number,ver:number=1):Observable<IFatwaResponseModel>{
    // const url = `${environment.baseUrl}/fatwa?cmd=search&ver=${ver}&title=${model.title}&ques=${model.ques}&ans=${model.ans}&syn1=${model.syn1}&syn2=${model.syn2}&syn3=${model.syn3}&flt=${model.flt}&start=${start}&count=${count}`;
    //https://salmajed.taiba-soft.com/api/fatwa?cmd=search&count=10
    const url = `${environment.baseUrl}/fatwa?cmd=search&ver=${ver}&start=${start}&count=${count}`;
    return this.http.get<IFatwaResponseModel>(url).pipe(retry(3));
  }
 
  sendFatwaByPhone(model:ISendPhoneQuestion):Observable<ISendQuestionResponse>{
    const url = `${environment.baseUrl}/fatwa?cmd=mobile&ver=1`;
    return this.http.post<ISendQuestionResponse>(url,model).pipe(retry(3));
  }

  */

}
