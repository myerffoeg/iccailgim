import { Component, OnInit } from '@angular/core';
import { CONTACT_ITEMS } from './app-contact';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: []
})
export class ContactComponent implements OnInit {

  readonly CONTACT_ITEMS = CONTACT_ITEMS;

  constructor() { }

  ngOnInit(): void {
  }

}
