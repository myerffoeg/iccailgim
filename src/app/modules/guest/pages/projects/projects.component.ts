import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Project } from 'src/app/stores/project';
import * as ProjectActions from 'src/app/stores/project/project.actions';
import * as ProjectSelectors from 'src/app/stores/project/project.selectors';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects$ = this.store.select(ProjectSelectors.selectAll);

  constructor(private store: Store<Project>) { }

  ngOnInit(): void {
    this.store.dispatch(ProjectActions.getAll());
  }
}
