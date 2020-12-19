import { Component, OnInit } from '@angular/core';
import { MENU_ITEMS } from 'src/app/app-menu';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: []
})
export class HomeComponent implements OnInit {

  readonly MENU_ITEMS = MENU_ITEMS;

  constructor() { }

  ngOnInit(): void {

  }
}
