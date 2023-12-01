import { TabActions, TabActionType } from '../actions/tab.action';

export const initialState = {};

export function tabReducer(state = initialState, action: TabActions) {
  switch (action.type) {
    case TabActionType.GET_TABDATA: {
      return { ...state };
    }

    case TabActionType.GET_TABDATA_SUCCESS: {
      return {
        ...state,
        tab: action.payload,
      };
    }

    case TabActionType.GET_TABDATA_FAILED: {
      return { ...state };
    }
  }
}
