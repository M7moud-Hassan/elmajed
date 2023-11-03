import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private rooter:Router) {
    
    
  }
  navLinks=['/home','/home','/project','/fatawa','/research','/video-audio','/lectures','/cv','/contact-us']
  navHome(){
    this.rooter.navigate(['/home'])
  }
}

