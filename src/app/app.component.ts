import { Component, Input, OnInit,EventEmitter, Injectable, Output, HostListener } from '@angular/core';
import { Router,NavigationEnd  } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public router: Router ) {  }


  title = 'beasiswa';
  
  isDashboard() {
    console.log(this.router.url);
    return this.router.url == '/dashboard';
  } 
  isNotDashboard() {
    console.log(this.router.url);
    return this.router.url != '/dashboard';
  } 
}


