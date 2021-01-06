import { createAction, props } from '@ngrx/store';
import { Project } from './project';

enum ProjectActions {
    getAll = '[Project] getAll',
    getAllSuccess = '[Project] getAllSuccess',
    getAllError = '[Project] getAllError',

    create = '[Project] create',
    createSuccess = '[Project] createSuccess',
    createError = '[Project] createError'
}

export const getAll = createAction(
    ProjectActions.getAll
);

export const getAllSuccess = createAction(
    ProjectActions.getAllSuccess,
    props<{ projects: Project[] }>()
);

export const getAllError = createAction(
    ProjectActions.getAllError
);

export const createProject = createAction(
    ProjectActions.create,
    props<{ project: Project }>()
);

export const createSuccess = createAction(
    ProjectActions.createSuccess,
    props<{ project: Project }>()
);

export const createError = createAction(
    ProjectActions.createError
);
