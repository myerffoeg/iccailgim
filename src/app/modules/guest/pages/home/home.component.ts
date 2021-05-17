import { Component, OnInit } from '@angular/core';
import { CONTACT_ITEMS } from './app-contact';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: []
})
export class HomeComponent implements OnInit {

  readonly CONTACT_ITEMS = CONTACT_ITEMS;

  constructor() { }

  ngOnInit(): void {

  }
}
