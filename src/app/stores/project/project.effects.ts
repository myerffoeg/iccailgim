import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { from, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Project } from './project';
import * as ProjectActions from './project.actions';

@Injectable()
export class ProjectEffects {

    query$: Observable<Action> = createEffect(() =>
        this.actions$.pipe(
            ofType(ProjectActions.Query),
            switchMap(() => {
                const ref = this.afs.collection<Project>('projects');
                return ref.snapshotChanges().pipe(
                    map(arr => {
                        return arr.map(doc => {
                            const data = doc.payload.doc.data();
                            return { id: doc.payload.doc.id, ...data } as Project;
                        });
                    })
                );
            }),
            map(projects => {
                return ProjectActions.Collection({ projects });
            })
        )
    );

    create$: Observable<Action> = createEffect(() =>
        this.actions$.pipe(
            ofType(ProjectActions.Create),
            switchMap(payload => {
                const ref = this.afs.doc<Project>(`projects/${payload.project.id}`);
                return from(ref.set(payload.project));
            }),
            map(() => {
                return ProjectActions.Success();
            })
        )
    );

    read$: Observable<Action> = createEffect(() =>
        this.actions$.pipe(
            ofType(ProjectActions.Read),
            switchMap(id => {
                const ref = this.afs.doc<Project>(`projects/${id}`);
                return ref.snapshotChanges().pipe(
                    map(doc => {
                        const data = doc.payload.data();
                        return { id: doc.payload.id, ...data } as Project;
                    })
                );
            }),
            map(() => {
                return ProjectActions.Success();
            })
        )
    );

    update$: Observable<Action> = createEffect(() =>
        this.actions$.pipe(
            ofType(ProjectActions.Update),
            switchMap(data => {
                const ref = this.afs.doc<Project>(`projects/${data.id}`);
                return from(ref.update(data.changes));
            }),
            map(() => {
                return ProjectActions.Success();
            })
        )
    );

    delete$: Observable<Action> = createEffect(() =>
        this.actions$.pipe(
            ofType(ProjectActions.Delete),
            switchMap(id => {
                const ref = this.afs.doc<Project>(`projects/${id}`);
                return from(ref.delete());
            }),
            map(() => {
                return ProjectActions.Success();
            })
        )
    );

    constructor(private actions$: Actions, private afs: AngularFirestore) { }
}
