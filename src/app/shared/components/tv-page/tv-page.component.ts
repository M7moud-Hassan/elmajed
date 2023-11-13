import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { VideoDetails, HomeService } from 'src/app/home/core/services/home.service';
import { IYoutubeDisplayItem } from '../../core/models/iyoutube-display-item';

@Component({
  selector: 'app-tv-page',
  templateUrl: './tv-page.component.html',
  styleUrls: ['./tv-page.component.css']
})
export class TvPageComponent implements OnInit  {
	// TvPrograms:ITvPrograms[]=[];
	errorMsg:string = '';
	randomNumbers:number[]=[];
	isLoading:boolean = true;
	isErrorFound:boolean = false;
	isloadData:boolean=false;
	count:number=0;
  id_video=""
	youtubePopUpComponentInstance:any
	youtubeVideos:IYoutubeDisplayItem []= [];
	allVideosDetails:VideoDetails[] = [];
  constructor(private homeService:HomeService,private http:HttpClient,
    private sanitizer: DomSanitizer, private el: ElementRef,private renderer: Renderer2
	) { 
  }
  getSlicedVideos(archives: IYoutubeDisplayItem[]): IYoutubeDisplayItem[] {
    return archives.slice(0, 4);
  }
// openDialog(id:string) {
// 	let dialogRef=  this.dialog.open<YoutubePopUpComponent>(YoutubePopUpComponent,{
// 		scrollStrategy: this.overlay.scrollStrategies.noop(),
// 		data:{
// 			VideoId:id
// 		}
// 	});

// 	// dialogRef.afterOpened().subscribe(()=>{
		
// 	// })

// 	dialogRef.beforeClosed().subscribe(result => {
		
// 		document.getElementById('video_src')!.remove()
		
// 	  });
//   }
  getInfo(videoId:string){
	let info = { NumberOfView: -1, Hours: -1, Minutes: -1, Seconds: -1 };
	this.homeService.getVideoInfo(videoId).then(res => {
		info = { NumberOfView: res.NumberOfView, Hours: res.Hours, Minutes: res.Minutes, Seconds: res.Seconds };
		return info;
	  });
	  
  }
  ngOnInit(): void {
	// this.getYoutubeVideos();
	this.getYoutubeVideos______________Test();
  this.selectItem(this.youtubeVideos[0].id)
  }
	getYoutubeVideos() {
		// let url = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyDL_iOYTGz8RDolivRuRuK63IDsrQpT9gY&channelId=UCAqiYdV2gFfv6s_dtOpohcw&order=date&part=snippet%20&type=video,id&maxResults=10';
		// let url = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyCLeym78l6J2CaKRfmTjFQZyhm5Jvtsvoo&channelId=UCAqiYdV2gFfv6s_dtOpohcw&order=date&part=snippet%20&type=video,id&maxResults=20';
		let url = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyB098NOpqQhFQlNLNOYTmy5onZGlG2jDm4&channelId=UCAqiYdV2gFfv6s_dtOpohcw&order=date&part=snippet%20&type=video,id&maxResults=20';
		fetch(url).then(res => res.json()).then((res: any) => {
			//alert(res.items.length);
			let allVideoIds = [];
			if (res.items.length > 0) {
				this.count = res.items.length;
				for (let i = 0; i < this.count; i++) {
					allVideoIds.push(res.items[i].id.videoId);
					this.youtubeVideos.push({
						id: res.items[i].id.videoId,
						title: res.items[i].snippet.title,
						description: res.items[i].snippet.description,
						poster: res.items[i].snippet.thumbnails.medium.url,
						publishDate: res.items[i].snippet.publishTime,
            select:false
					});
				}
				this.isloadData = true;
				this.getYoutubeVideoDetails(allVideoIds);
			} else {

				this.isErrorFound = true;
			}
			this.isLoading = false
		});
   ;
    
    console.log(this.youtubeVideos);
    
	}
	getYoutubeVideos______________Test(){
		//let url = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyDL_iOYTGz8RDolivRuRuK63IDsrQpT9gY&channelId=UCAqiYdV2gFfv6s_dtOpohcw&order=date&part=snippet%20&type=video,id&maxResults=10';
		//let url = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyCLeym78l6J2CaKRfmTjFQZyhm5Jvtsvoo&channelId=UCAqiYdV2gFfv6s_dtOpohcw&order=date&part=snippet%20&type=video,id&maxResults=10';
		let url = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyB098NOpqQhFQlNLNOYTmy5onZGlG2jDm4&channelId=UCAqiYdV2gFfv6s_dtOpohcw&order=date&part=snippet%20&type=video,id&maxResults=10';
	   // fetch(url).then(res=>res.json()).then((res:any)=>{
			
		//	if(res.items.length==0){
				//alert(res.error.code);
				this.count= 0 ;	
		//	}else{
			const items=[
					{
						"kind": "youtube#searchResult",
						"etag": "C_Uh0kYMldmHnnNeK4olOQLp7DA",
						"id": {
							"kind": "youtube#video",
							"videoId": "ys3RmJtDJtE"
						},
						"snippet": {
							"publishedAt": "2023-04-14T20:48:14Z",
							"channelId": "UCAqiYdV2gFfv6s_dtOpohcw",
							"title": "دفع الزكاة لبناء المساجد",
							"description": "برنامج يستفتونك مع فضيلة الشيخ سليمان بن عبدالله الماجد - قناة الرسالة الفضائية - السبت 17-9-1444هـ للاشتراك في قناة ...",
							"thumbnails": {
								"default": {
									"url": "https://i.ytimg.com/vi/ys3RmJtDJtE/default.jpg",
									"width": 120,
									"height": 90
								},
								"medium": {
									"url": "https://i.ytimg.com/vi/ys3RmJtDJtE/mqdefault.jpg",
									"width": 320,
									"height": 180
								},
								"high": {
									"url": "https://i.ytimg.com/vi/ys3RmJtDJtE/hqdefault.jpg",
									"width": 480,
									"height": 360
								}
							},
							"channelTitle": "سليمان الماجد",
							"liveBroadcastContent": "none",
							"publishTime": "2023-04-14T20:48:14Z"
						}
					},
					{
						"kind": "youtube#searchResult",
						"etag": "NUIdkpKlZ0cxATe2mEF-VJI2BwI",
						"id": {
							"kind": "youtube#video",
							"videoId": "NgwjdhMbV0s"
						},
						"snippet": {
							"publishedAt": "2023-04-14T20:48:22Z",
							"channelId": "UCAqiYdV2gFfv6s_dtOpohcw",
							"title": "ارتباط الطمأنينة بقراءة وسماع القرآن الكريم",
							"description": "برنامج يستفتونك مع فضيلة الشيخ سليمان بن عبدالله الماجد - قناة الرسالة الفضائية - السبت 17-9-1444هـ للاشتراك في قناة ...",
							"thumbnails": {
								"default": {
									"url": "https://i.ytimg.com/vi/NgwjdhMbV0s/default.jpg",
									"width": 120,
									"height": 90
								},
								"medium": {
									"url": "https://i.ytimg.com/vi/NgwjdhMbV0s/mqdefault.jpg",
									"width": 320,
									"height": 180
								},
								"high": {
									"url": "https://i.ytimg.com/vi/NgwjdhMbV0s/hqdefault.jpg",
									"width": 480,
									"height": 360
								}
							},
							"channelTitle": "سليمان الماجد",
							"liveBroadcastContent": "none",
							"publishTime": "2023-04-14T20:48:22Z"
						}
					},
					{
						"kind": "youtube#searchResult",
						"etag": "eC_U9klXV2no86AwhBRnQFziNWI",
						"id": {
							"kind": "youtube#video",
							"videoId": "AbPhdtn04As"
						},
						"snippet": {
							"publishedAt": "2023-04-14T20:48:26Z",
							"channelId": "UCAqiYdV2gFfv6s_dtOpohcw",
							"title": "إخراج زكاة الفطر نقوداً، وماذا يلزم من أخرجها نقداً؟",
							"description": "برنامج يستفتونك مع فضيلة الشيخ سليمان بن عبدالله الماجد - قناة الرسالة الفضائية - السبت 17-9-1444هـ للاشتراك في قناة ...",
							"thumbnails": {
								"default": {
									"url": "https://i.ytimg.com/vi/AbPhdtn04As/default.jpg",
									"width": 120,
									"height": 90
								},
								"medium": {
									"url": "https://i.ytimg.com/vi/AbPhdtn04As/mqdefault.jpg",
									"width": 320,
									"height": 180
								},
								"high": {
									"url": "https://i.ytimg.com/vi/AbPhdtn04As/hqdefault.jpg",
									"width": 480,
									"height": 360
								}
							},
							"channelTitle": "سليمان الماجد",
							"liveBroadcastContent": "none",
							"publishTime": "2023-04-14T20:48:26Z"
						}
					},
					{
						"kind": "youtube#searchResult",
						"etag": "6qsMgUCo-0zCXsU7qzV5THephz4",
						"id": {
							"kind": "youtube#video",
							"videoId": "QJcnAcvI8QI"
						},
						"snippet": {
							"publishedAt": "2023-04-14T20:48:29Z",
							"channelId": "UCAqiYdV2gFfv6s_dtOpohcw",
							"title": "هل يجب على الزوج إخراج زكاة الفطر عن أولاد زوجته؟",
							"description": "برنامج يستفتونك مع فضيلة الشيخ سليمان بن عبدالله الماجد - قناة الرسالة الفضائية - السبت 17-9-1444هـ للاشتراك في قناة ...",
							"thumbnails": {
								"default": {
									"url": "https://i.ytimg.com/vi/QJcnAcvI8QI/default.jpg",
									"width": 120,
									"height": 90
								},
								"medium": {
									"url": "https://i.ytimg.com/vi/QJcnAcvI8QI/mqdefault.jpg",
									"width": 320,
									"height": 180
								},
								"high": {
									"url": "https://i.ytimg.com/vi/QJcnAcvI8QI/hqdefault.jpg",
									"width": 480,
									"height": 360
								}
							},
							"channelTitle": "سليمان الماجد",
							"liveBroadcastContent": "none",
							"publishTime": "2023-04-14T20:48:29Z"
						}
					},
					{
						"kind": "youtube#searchResult",
						"etag": "HquEe5OBwjlgzHCfhNGDMDupINU",
						"id": {
							"kind": "youtube#video",
							"videoId": "wYrIzfeaz3M"
						},
						"snippet": {
							"publishedAt": "2023-04-14T20:48:11Z",
							"channelId": "UCAqiYdV2gFfv6s_dtOpohcw",
							"title": "هل على الزوجة إخراج زكاة الفطر من مالها، أم للزوج أن يخرج عنها؟",
							"description": "برنامج يستفتونك مع فضيلة الشيخ سليمان بن عبدالله الماجد - قناة الرسالة الفضائية - السبت 17-9-1444هـ للاشتراك في قناة ...",
							"thumbnails": {
								"default": {
									"url": "https://i.ytimg.com/vi/wYrIzfeaz3M/default.jpg",
									"width": 120,
									"height": 90
								},
								"medium": {
									"url": "https://i.ytimg.com/vi/wYrIzfeaz3M/mqdefault.jpg",
									"width": 320,
									"height": 180
								},
								"high": {
									"url": "https://i.ytimg.com/vi/wYrIzfeaz3M/hqdefault.jpg",
									"width": 480,
									"height": 360
								}
							},
							"channelTitle": "سليمان الماجد",
							"liveBroadcastContent": "none",
							"publishTime": "2023-04-14T20:48:11Z"
						}
					},
					{
						"kind": "youtube#searchResult",
						"etag": "ivZhgOl_-rqSqCncX5LG8Rp6nIs",
						"id": {
							"kind": "youtube#video",
							"videoId": "LEuel9HF2Ag"
						},
						"snippet": {
							"publishedAt": "2023-04-14T20:48:00Z",
							"channelId": "UCAqiYdV2gFfv6s_dtOpohcw",
							"title": "هل معنى قوله ﷺ : (أحفوا الشوارب) إزالتها بالكلية؟",
							"description": "برنامج الجواب الكافي مع فضيلة الشيخ سليمان بن عبدالله الماجد - قناة المجد الفضائية - الأحد 10-4-2023م للاشتراك في قناة اليوتيوب ...",
							"thumbnails": {
								"default": {
									"url": "https://i.ytimg.com/vi/LEuel9HF2Ag/default.jpg",
									"width": 120,
									"height": 90
								},
								"medium": {
									"url": "https://i.ytimg.com/vi/LEuel9HF2Ag/mqdefault.jpg",
									"width": 320,
									"height": 180
								},
								"high": {
									"url": "https://i.ytimg.com/vi/LEuel9HF2Ag/hqdefault.jpg",
									"width": 480,
									"height": 360
								}
							},
							"channelTitle": "سليمان الماجد",
							"liveBroadcastContent": "none",
							"publishTime": "2023-04-14T20:48:00Z"
						}
					},
					{
						"kind": "youtube#searchResult",
						"etag": "w2Mp4dC94e4XyrvATK1eDHcCJso",
						"id": {
							"kind": "youtube#video",
							"videoId": "yd9WygDSeiE"
						},
						"snippet": {
							"publishedAt": "2023-04-14T20:48:05Z",
							"channelId": "UCAqiYdV2gFfv6s_dtOpohcw",
							"title": "إعطاء الزكاة لزميل العميل دون إخباره بأنها زكاة",
							"description": "برنامج الجواب الكافي مع فضيلة الشيخ سليمان بن عبدالله الماجد - قناة المجد الفضائية - الأحد 10-4-2023م للاشتراك في قناة اليوتيوب ...",
							"thumbnails": {
								"default": {
									"url": "https://i.ytimg.com/vi/yd9WygDSeiE/default.jpg",
									"width": 120,
									"height": 90
								},
								"medium": {
									"url": "https://i.ytimg.com/vi/yd9WygDSeiE/mqdefault.jpg",
									"width": 320,
									"height": 180
								},
								"high": {
									"url": "https://i.ytimg.com/vi/yd9WygDSeiE/hqdefault.jpg",
									"width": 480,
									"height": 360
								}
							},
							"channelTitle": "سليمان الماجد",
							"liveBroadcastContent": "none",
							"publishTime": "2023-04-14T20:48:05Z"
						}
					},
					{
						"kind": "youtube#searchResult",
						"etag": "nKn2kLaRbstF-GXgjfWGX6_dnuE",
						"id": {
							"kind": "youtube#video",
							"videoId": "p1ku3lLrRqw"
						},
						"snippet": {
							"publishedAt": "2023-04-14T20:48:17Z",
							"channelId": "UCAqiYdV2gFfv6s_dtOpohcw",
							"title": "التكبير والتسليم في سجود التلاوة",
							"description": "برنامج يستفتونك مع فضيلة الشيخ سليمان بن عبدالله الماجد - قناة الرسالة الفضائية - السبت 17-9-1444هـ للاشتراك في قناة ...",
							"thumbnails": {
								"default": {
									"url": "https://i.ytimg.com/vi/p1ku3lLrRqw/default.jpg",
									"width": 120,
									"height": 90
								},
								"medium": {
									"url": "https://i.ytimg.com/vi/p1ku3lLrRqw/mqdefault.jpg",
									"width": 320,
									"height": 180
								},
								"high": {
									"url": "https://i.ytimg.com/vi/p1ku3lLrRqw/hqdefault.jpg",
									"width": 480,
									"height": 360
								}
							},
							"channelTitle": "سليمان الماجد",
							"liveBroadcastContent": "none",
							"publishTime": "2023-04-14T20:48:17Z"
						}
					},
					{
						"kind": "youtube#searchResult",
						"etag": "wC7LpvX2yCXy6OtWuoebf8Rd4FM",
						"id": {
							"kind": "youtube#video",
							"videoId": "QDcJjCMD5Zk"
						},
						"snippet": {
							"publishedAt": "2023-04-14T20:48:00Z",
							"channelId": "UCAqiYdV2gFfv6s_dtOpohcw",
							"title": "صلاة المريض العاجز إلى غير اتجاه القبلة",
							"description": "برنامج الجواب الكافي مع فضيلة الشيخ سليمان بن عبدالله الماجد - قناة المجد الفضائية - الأحد 10-4-2023م للاشتراك في قناة اليوتيوب ...",
							"thumbnails": {
								"default": {
									"url": "https://i.ytimg.com/vi/QDcJjCMD5Zk/default.jpg",
									"width": 120,
									"height": 90
								},
								"medium": {
									"url": "https://i.ytimg.com/vi/QDcJjCMD5Zk/mqdefault.jpg",
									"width": 320,
									"height": 180
								},
								"high": {
									"url": "https://i.ytimg.com/vi/QDcJjCMD5Zk/hqdefault.jpg",
									"width": 480,
									"height": 360
								}
							},
							"channelTitle": "سليمان الماجد",
							"liveBroadcastContent": "none",
							"publishTime": "2023-04-14T20:48:00Z"
						}
					},
					{
						"kind": "youtube#searchResult",
						"etag": "sceqKeC32KyOl-NzRC5s-U9Jh0E",
						"id": {
							"kind": "youtube#video",
							"videoId": "PxBJDerjiqY"
						},
						"snippet": {
							"publishedAt": "2023-04-14T20:48:02Z",
							"channelId": "UCAqiYdV2gFfv6s_dtOpohcw",
							"title": "سجود التلاوة في أوقات النهي",
							"description": "برنامج الجواب الكافي مع فضيلة الشيخ سليمان بن عبدالله الماجد - قناة المجد الفضائية - الأحد 10-4-2023م للاشتراك في قناة اليوتيوب ...",
							"thumbnails": {
								"default": {
									"url": "https://i.ytimg.com/vi/PxBJDerjiqY/default.jpg",
									"width": 120,
									"height": 90
								},
								"medium": {
									"url": "https://i.ytimg.com/vi/PxBJDerjiqY/mqdefault.jpg",
									"width": 320,
									"height": 180
								},
								"high": {
									"url": "https://i.ytimg.com/vi/PxBJDerjiqY/hqdefault.jpg",
									"width": 480,
									"height": 360
								}
							},
							"channelTitle": "سليمان الماجد",
							"liveBroadcastContent": "none",
							"publishTime": "2023-04-14T20:48:02Z"
						}
					}
				]
			 this.count = items.length ;	
			for (let i = 0; i < items.length; i++) {
				this.youtubeVideos.push({
					id:items[i].id.videoId,
					title:items[i].snippet.title,
					description:items[i].snippet.description,
					poster:items[i].snippet.thumbnails.medium.url,
					publishDate:items[i].snippet.publishTime,
          select:false
				});
			}
			this.isloadData=true;
			this.isLoading = false;
			this.getYoutubeVideoDetails_________________test();
		//}
		//});
	  }
 
  getYoutubeVideoDetails(items:string[]){
   this.homeService.getVideoDetails(items).subscribe(res=>{
	  this.allVideosDetails = res;
    
    
	},
	error=>{
	 console.log(" === Error In Get Youtube Video Informations");
	});
 }
 getYoutubeVideoDetails_________________test(){
	let ids = [
		"ys3RmJtDJtE",
		"NgwjdhMbV0s",
		"AbPhdtn04As",
		"QJcnAcvI8QI",
		"wYrIzfeaz3M",
		"LEuel9HF2Ag",
		"yd9WygDSeiE",
		"p1ku3lLrRqw",
		"QDcJjCMD5Zk",
		"PxBJDerjiqY",
			]
	this.homeService.getVideoDetails(ids).subscribe(res=>{
	   this.allVideosDetails = res;
	 },
	 error=>{
	  console.log(" === Error In Get Youtube Video Informations");
	 });
  }

  selectItem(id:any){
   this.youtubeVideos.forEach(x=>{
    if(x.id==id){
      x.select=true
      this.id_video=x.id
      console.log(x.id);
      
    }else{
      x.select=false
    }
   })
   const videoElement = this.el.nativeElement.querySelector('#video');
    this.renderer.setProperty(videoElement, 'src', `https://www.youtube.com/embed/${id}`);
   
  }
}
