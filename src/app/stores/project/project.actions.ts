import { createAction, props, union } from '@ngrx/store';
import { Project } from './project';

enum ProjectActions {
    Query = '[Project] Query',
    Collection = '[Project] Collection',
    Create = '[Project] Create',
    Read = '[Project] Read',
    Update = '[Project] Update',
    Delete = '[Project] Delete',
    Success = '[Project] Success'
}

export const Query = createAction(
    ProjectActions.Query
);

export const Collection = createAction(
    ProjectActions.Collection,
    props<{ projects: Project[] }>()
);

export const Create = createAction(
    ProjectActions.Create,
    props<{ project: Project }>()
);

export const Read = createAction(
    ProjectActions.Read,
    props<{ id: string }>()
);

export const Update = createAction(
    ProjectActions.Update,
    props<{ id: string, changes: Partial<Project> }>()
);

export const Delete = createAction(
    ProjectActions.Delete,
    props<{ id: string }>()
);

export const Success = createAction(
    ProjectActions.Success
);
