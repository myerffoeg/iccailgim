import { createFeatureSelector } from '@ngrx/store';
import { projectAdapter, ProjectState } from './project.reducer';

export const getProjectState = createFeatureSelector<ProjectState>('project');

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = projectAdapter.getSelectors(getProjectState);
