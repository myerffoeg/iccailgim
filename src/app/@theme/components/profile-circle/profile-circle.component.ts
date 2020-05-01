import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/@core/services';

@Component({
  selector: 'app-profile-circle',
  templateUrl: './profile-circle.component.html',
  styleUrls: ['./profile-circle.component.scss']
})
export class ProfileCircleComponent implements OnInit {

  @Input()
  size: number;

  constructor(public authService: AuthService) { }

  ngOnInit(): void { }
}
