import { Action } from '@ngrx/store';
export enum TabActionType {
  ADD_ITEM = 'ADD_ITEM',
  GET_TABDATA = 'GET_TABDATA',
  GET_TABDATA_SUCCESS = 'GET_TABDATA_SUCCESS',
  GET_TABDATA_FAILED = 'GET_TABDATA_FAILED',
  GET_TODOS = 'GET_TODOS',
}
export class AddItemAction implements Action {
  readonly type = TabActionType.ADD_ITEM;
  //add an optional payload
  constructor(public payload: any) {}
}
export class GetTabData implements Action {
  readonly type = TabActionType.GET_TABDATA;
}

export class GetTabDataSuccess implements Action {
  readonly type = TabActionType.GET_TABDATA_SUCCESS;
  constructor(public payload: Array<any>) {}
}

export class GetTabDataFailed implements Action {
  readonly type = TabActionType.GET_TABDATA_FAILED;
  constructor(public payload: string) {}
}

export type TabActions =
  | AddItemAction
  | GetTabData
  | GetTabDataSuccess
  | GetTabDataFailed;
