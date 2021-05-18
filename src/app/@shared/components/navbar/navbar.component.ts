import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  pageYOffset = 0;

  constructor() { }

  ngOnInit(): void { }

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    this.pageYOffset = window.pageYOffset || document.documentElement.scrollTop;
  }
}
