import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/@core/services';

@Component({
  selector: 'app-login-btn',
  templateUrl: './login-btn.component.html',
  styleUrls: ['./login-btn.component.scss']
})
export class LoginBtnComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void { }
}
