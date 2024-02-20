import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {
  root:boolean=false
  constructor(private router: Router) {
    this.ngOnInit()
  }
  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currentUrl = this.router.url;  
        if (currentUrl.includes('/fatwa')) {
         this.root=true;
        } else {
         this.root=false;
        }
      }
    });
  }
  
}
