import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/@core/services';

@Component({
  selector: 'app-google-login-btn',
  templateUrl: './google-login-btn.component.html',
  styleUrls: ['./google-login-btn.component.scss']
})
export class GoogleLoginBtnComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {

  }
}
