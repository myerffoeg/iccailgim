import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createFeatureSelector } from '@ngrx/store';
import * as actions from './project.actions';

export interface Project {
    id: string;
    name: string;
}

export const projectAdapter = createEntityAdapter<Project>();
export interface State extends EntityState<Project> { }

export const initialState: State = projectAdapter.getInitialState();

export function projectReducer(
    state: State = initialState,
    action: actions.ProjectActions): State {

    switch (action.type) {
        case actions.ADD_ALL:
            return projectAdapter.setAll(action.projects, state);
        default:
            return state;
    }
}

export const getProjectState = createFeatureSelector<State>('project');

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = projectAdapter.getSelectors(getProjectState);

