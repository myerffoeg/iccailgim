import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { from, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Project } from './project';
import * as ProjectActions from './project.actions';

@Injectable()
export class ProjectEffects {

    getAll$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ProjectActions.getAll),
            switchMap(() => {
                return this.afs.collection<Project>('projects').snapshotChanges().pipe(
                    map(arr => {
                        return arr.map(doc => {
                            const data = doc.payload.doc.data();
                            return { id: doc.payload.doc.id, ...data } as Project;
                        });
                    })
                );
            }),
            map(projects => ProjectActions.getAllSuccess({ projects })),
            catchError(() => of(ProjectActions.getAllError()))
        )
    );

    create$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ProjectActions.createProject),
            switchMap(payload => {
                delete payload.project.id;
                return from(this.afs.collection(`projects`).add(payload.project)).pipe(
                    map(() => payload)
                );
            }),
            map((payload) => ProjectActions.createSuccess(payload)),
            catchError(() => of(ProjectActions.createError()))
        )
    );

    constructor(private actions$: Actions, private afs: AngularFirestore) { }
}
