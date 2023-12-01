import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { ApiService } from '../../../../services/api.service';

import {
  TabActionType,
  GetTabDataSuccess,
  GetTabDataFailed,
} from '../actions/tab.action';
import { switchMap, catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class TodosEffects {
  constructor(private actions$: Actions, private apiService: ApiService) {}

  getTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TabActionType.GET_TABDATA),
      switchMap(() =>
        this.apiService.getData().pipe(
          map((tab: any) => new GetTabDataSuccess(tab)),
          catchError((error) => of(new GetTabDataFailed(error)))
        )
      )
    )
  );
}
