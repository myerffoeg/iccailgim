import { Action } from '@ngrx/store';
import { Project } from './project.reducer';

export const CREATE = '[Projects] Create';
export const UPDATE = '[Projects] Update';
export const DELETE = '[Projects] Delete';

export const QUERY = '[Projects] Query';
export const ADD_ALL = '[Projects] Add All';
export const SUCCESS = '[Projects] Successful firestore write';

export class Query implements Action {
    readonly type = QUERY;
    constructor() { }
}

export class AddAll implements Action {
    readonly type = ADD_ALL;
    constructor(public projects: Project[]) { }
}

export class Success implements Action {
    readonly type = SUCCESS;
    constructor() { }
}


export class Create implements Action {
    readonly type = CREATE;
    constructor(public project: Project) { }
}

export class Update implements Action {
    readonly type = UPDATE;
    constructor(
        public id: string,
        public changes: Partial<Project>,
    ) { }
}

export class Delete implements Action {
    readonly type = DELETE;
    constructor(public id: string) { }
}

export type ProjectActions
    = Create
    | Update
    | Delete
    | Query
    | AddAll;
