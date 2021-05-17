import { Component, OnInit } from '@angular/core';
import { PROFILE } from './app-profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  readonly PROFILE = PROFILE;

  constructor() { }

  ngOnInit(): void {
  }

}
