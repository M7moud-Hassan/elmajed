import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry ,from, switchMap, forkJoin} from 'rxjs';
import { environment } from 'src/environments/environment.prod';

import { Location } from '@angular/common';
import { IResponseModel } from '../models/iresponse-model';
// import { IResponseModel } from '../models/iresponse-model';

export interface VideoDetails {
  videoId: string;
  duration: VideoDuration;
  views: number;
} 
export interface VideoDuration {
  hours: number;
  minutes: number;
  seconds: number;
}
@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private apiKey = 'AIzaSyCLeym78l6J2CaKRfmTjFQZyhm5Jvtsvoo';
  constructor(private http:HttpClient,private location:Location) { }

  getDetails(slug:string):Observable<IResponseModel>{
    const url = `${environment.baseUrl}/archives/${slug}`;
    return this.http.get<IResponseModel>(url).pipe( retry(3));
  }
  getSliderImages():Observable<IResponseModel>{
    const url = `${environment.baseUrl}/sliders`;
    return this.http.get<IResponseModel>(url).pipe(retry(3));
  }
  getResearchDetails(slug:string):Observable<IResponseModel>{
    const url = `${environment.baseUrl}/archives/${slug}`;
    return this.http.get<IResponseModel>(url).pipe(retry(3));
  }
  getResearches(pageNo?: number, count?: number): Observable<IResponseModel> {
    //المؤلفات والبحوث
    // https://salmajed.taiba-soft.com/api/categories/research-and-letters
    let url = "";
    if (pageNo == undefined || count == undefined) {
      url = `${environment.baseUrl}/categories/research-and-letters`;
    } else {
      url = `${environment.baseUrl}/categories/research-and-letters?page=${pageNo}&count=${count}`;
    }
    return this.http.get<IResponseModel>(url).pipe(retry(3));
  }
  getNotations():Observable<IResponseModel>{
    //التدوينات
    // https://salmajed.taiba-soft.com/api/categories/notations
    const url = `${environment.baseUrl}/categories/notations`;
    return this.http.get<IResponseModel>(url).pipe(retry(3));
  }

  getTheBrief():Observable<IResponseModel>{
    //الموجز الفقهي
    // https://salmajed.taiba-soft.com/api/categories/the-brief
    const url = `${environment.baseUrl}/categories/the-brief`;
    return this.http.get<IResponseModel>(url).pipe(retry(3));
  }
  getPicking():Observable<IResponseModel>{
    // قطوف
    // https://salmajed.taiba-soft.com/api/categories/picking
    const url = `${environment.baseUrl}/categories/picking`;
    return this.http.get<IResponseModel>(url).pipe(retry(3));
  }
  getAudiosVideos(pageNo?:number,count?:number):Observable<IResponseModel>{
    // صوتيات - مرئيات
    let url = "";
    if(pageNo==undefined || count==undefined){
       url = `${environment.baseUrl}/categories/audios-videos`;
    }else{
       url = `${environment.baseUrl}/categories/audios-videos?page=${pageNo}&count=${count}`;
    }
    return this.http.get<IResponseModel>(url).pipe(retry(3));
  }
  getCurriculumVitae():Observable<IResponseModel>{
    // السيرة الذاتية
    //https://salmajed.taiba-soft.com/api/categories/curriculum-vitae
    const url = `${environment.baseUrl}/categories/curriculum-vitae`;
    return this.http.get<IResponseModel>(url).pipe(retry(3));
  }
  getDetailedCurriculumVitae(slug:string):Observable<IResponseModel>{
    // السيرة الذاتية
    //https://salmajed.taiba-soft.com/api/c/ks-fsad
    const url = `${environment.baseUrl}/archives/${slug}`;
    return this.http.get<IResponseModel>(url).pipe(retry(3));
  }
  getProjects(pageNo?:number,count?:number):Observable<IResponseModel>{
    //مشروعات
    let url:string = "";
    if(pageNo == undefined || count==undefined){
      url = `${environment.baseUrl}/categories/projects`;
    }else{
      url = `${environment.baseUrl}/categories/projects?page=${pageNo}&count=${count}`;
    }
    return this.http.get<IResponseModel>(url).pipe(retry(3));
  }

  getLessons(pageNo?:number,count?:number){
    //الدروس
    //https://salmajed.taiba-soft.com/api/categories/tutorials
    let url = "";
    if(pageNo==undefined || count==undefined){
       url = `${environment.baseUrl}/categories/tutorials`;
    }else{
       url = `${environment.baseUrl}/categories/tutorials?page=${pageNo}&count=${count}`;
    } 
    return this.http.get<IResponseModel>(url).pipe(retry(3));
  }
  getCourses(pageNo?:number,count?:number){
    //الدورات
    //https://salmajed.taiba-soft.com/api/categories/courses
    let url = "";
    if(pageNo==undefined || count==undefined){
       url = `${environment.baseUrl}/categories/courses`;
    }else{
       url = `${environment.baseUrl}/categories/courses?page=${pageNo}&count=${count}`;
    } 
    return this.http.get<IResponseModel>(url).pipe(retry(3));
  }
  getLectures(pageNo?:number,count?:number){
    //المحاضرات
    //https://salmajed.taiba-soft.com/api/categories/lectures
    let url = "";
    if(pageNo==undefined || count==undefined){
       url = `${environment.baseUrl}/categories/lectures`;
    }else{
       url = `${environment.baseUrl}/categories/lectures?page=${pageNo}&count=${count}`;
    } 
    return this.http.get<IResponseModel>(url).pipe(retry(3));
  }

  getItemLink(slug:string,path:string='projectDetails'){
    //http://localhost:4200/projectDetails/mshroaa-2
    const domainName =  location.hostname.split('.').slice(-2).join('.')
    // const domainName =  "https://fatway-7326f.web.app"
    const portNumber = location.port ? `:${location.port}` : '';    
    let url = `${domainName}${portNumber}/${path}/${slug}`;
    // let url = `${domainName}/${path}/${slug}`;
    return url;
  }
  
  extractYoutubeVideoId(url: string): string {
    let videoId = '';
  
    // Extract video ID from regular video URL
    const regularVideoMatch = url.match(/(?:youtube.com\/watch\?v=|youtu.be\/)([\w-]+)/);
    if (regularVideoMatch) {
      videoId = regularVideoMatch[1];
    }
  
    // Extract video ID from channel trailer URL
    const channelTrailerMatch = url.match(/youtube.com\/watch\?v=([\w-]+)&.*feature=emb_logo/);
    if (channelTrailerMatch) {
      videoId = channelTrailerMatch[1];
    }
  
    // Extract video ID from live stream URL
    const liveStreamMatch = url.match(/youtube.com\/watch\?v=([\w-]+)&.*feature=youtu.be/);
    if (liveStreamMatch) {
      videoId = liveStreamMatch[1];
    }
  
    // Extract video ID from playlist URL
    const playlistMatch = url.match(/youtube.com\/playlist\?list=([\w-]+)/);
    if (playlistMatch) {
      videoId = playlistMatch[1];
    }
  
    // Extract video ID from short video URL
    const shortVideoMatch = url.match(/youtube.com\/shorts\/([\w-]+)/);
    if (shortVideoMatch) {
      videoId = shortVideoMatch[1];
    }
  
    return videoId;
  }
  parseYouTubeDuration(durationString: string): VideoDuration {
    const durationRegex = /^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/;
    const matches = durationRegex.exec(durationString);
    if (!matches) {
      throw new Error(`Invalid duration string: ${durationString}`);
    }
    const [, hoursStr, minutesStr, secondsStr] = matches;
    const hours = hoursStr ? parseInt(hoursStr, 10) : 0;
    const minutes = minutesStr ? parseInt(minutesStr, 10) : 0;
    const seconds = secondsStr ? parseInt(secondsStr, 10) : 0;
    return { hours, minutes, seconds };
  }
  getVideoDetails(videoIds: string[]): Observable<VideoDetails[]> {
    const apiUrl = `https://www.googleapis.com/youtube/v3/videos?key=${this.apiKey}&part=contentDetails,statistics&id=`; 
    const requests = videoIds.map(videoId =>
      fetch(apiUrl + videoId)
    );
    const promise = Promise.all(requests).then(responses =>
      Promise.all(responses.map(response => response.json()))
    ).then(data => {
      return data.map(response => {
        const video = response.items[0];
        const videoId = video.id;
        const duration:VideoDuration = this.parseYouTubeDuration(video.contentDetails.duration);
        const views = video.statistics.viewCount;
        return { videoId, duration, views };
      });
    });
    
    return from(promise);
    
  }
  getVideoInfo(videoId: string): Promise<{ NumberOfView: number, Hours: number, Minutes: number, Seconds: number }> {
    const url = `https://www.googleapis.com/youtube/v3/videos?id=38M_OB9mAN0&key=${environment.youtubeKey}&part=contentDetails,statistics`;
    return this.http.get(url).toPromise().then((response: any) => {
      const duration = response.items[0].contentDetails.duration;
      const views = response.items[0].statistics.viewCount;
      const durationParts = duration.match(/(\d+)(?=[HMS])/g);
      const hours = parseInt(durationParts[0] || '0');
      const minutes = parseInt(durationParts[1] || '0');
      const seconds = parseInt(durationParts[2] || '0');
      return { NumberOfView: parseInt(views), Hours: hours, Minutes: minutes, Seconds: seconds };
    });
  }
   
}
