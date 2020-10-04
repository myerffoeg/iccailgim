import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { from, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import * as actions from './project.actions';
import * as fromProject from './project.reducer';

@Injectable()
export class ProjectEffects {

    @Effect()
    query$: Observable<Action> = this.actions$.pipe(
        ofType(actions.QUERY),
        switchMap(action => {
            const ref = this.afs.collection<fromProject.Project>('projects');
            return ref.snapshotChanges().pipe(
                map(arr => {
                    return arr.map(doc => {
                        const data = doc.payload.doc.data();
                        return { id: doc.payload.doc.id, ...data } as fromProject.Project;
                    });
                })
            );
        }),
        map(arr => {
            return new actions.AddAll(arr);
        })
    );

    @Effect()
    create$: Observable<Action> = this.actions$.pipe(
        ofType(actions.CREATE),
        map((action: actions.Create) => action.project),
        switchMap(project => {
            const ref = this.afs.doc<fromProject.Project>(`projects/${project.id}`);
            return from(ref.set(project));
        }),
        map(() => {
            return new actions.Success();
        })
    );

    @Effect()
    update$: Observable<Action> = this.actions$.pipe(
        ofType(actions.UPDATE),
        map((action: actions.Update) => action),
        switchMap(data => {
            const ref = this.afs.doc<fromProject.Project>(`projects/${data.id}`);
            return from(ref.update(data.changes));
        }),
        map(() => {
            return new actions.Success();
        })
    );

    @Effect()
    delete$: Observable<Action> = this.actions$.pipe(
        ofType(actions.DELETE),
        map((action: actions.Delete) => action.id),
        switchMap(id => {
            const ref = this.afs.doc<fromProject.Project>(`projects/${id}`);
            return from(ref.delete());
        }),
        map(() => {
            return new actions.Success();
        })
    );

    constructor(private actions$: Actions, private afs: AngularFirestore) { }
}
