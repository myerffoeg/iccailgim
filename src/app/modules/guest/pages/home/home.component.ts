import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromProject from 'src/app/stores/project/project.reducer';
import * as actions from 'src/app/stores/project/project.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: []
})
export class HomeComponent implements OnInit {

  projects: any;

  constructor(private store: Store<fromProject.Project>) { }

  ngOnInit(): void {
    this.projects = this.store.select(fromProject.selectAll);
    this.store.dispatch(new actions.Query());
    console.log(this.projects);
  }
}
