import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createFeatureSelector, createReducer, on } from '@ngrx/store';
import { Project } from './project';
import * as ProjectActions from './project.actions';

export const projectAdapter = createEntityAdapter<Project>();
export interface ProjectState extends EntityState<Project> { }

export const initialState: ProjectState = projectAdapter.getInitialState();

export const projectReducer = createReducer(
    initialState,
    on(ProjectActions.getAllSuccess, (state, { projects }) => projectAdapter.setAll(projects, state)),
    on(ProjectActions.createSuccess, (state, { project }) => projectAdapter.addOne(project, state))
);
