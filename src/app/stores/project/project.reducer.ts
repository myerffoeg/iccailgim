import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createFeatureSelector, createReducer, on } from '@ngrx/store';
import { Project } from './project';
import * as ProjectActions from './project.actions';

export const projectAdapter = createEntityAdapter<Project>();
export interface State extends EntityState<Project> { }

export const initialState: State = projectAdapter.getInitialState();

export const projectReducer = createReducer(
    initialState,
    on(ProjectActions.Collection, (state, { projects }) => projectAdapter.setAll(projects, state))
);

export const getProjectState = createFeatureSelector<State>('project');

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = projectAdapter.getSelectors(getProjectState);
