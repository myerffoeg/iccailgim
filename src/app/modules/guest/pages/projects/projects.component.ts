import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Project } from 'src/app/stores/project';
import * as ProjectActions from 'src/app/stores/project/project.actions';
import * as ProjectReducers from 'src/app/stores/project/project.reducer';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: []
})
export class ProjectsComponent implements OnInit {

  projects: Observable<Project[]>;

  constructor(private store: Store<Project>) { }

  ngOnInit(): void {
    this.projects = this.store.select(ProjectReducers.selectAll);
    this.store.dispatch(ProjectActions.Query());
  }
}
