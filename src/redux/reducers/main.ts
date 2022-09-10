import { MainItem } from 'interfaces/main-item.interface';
import { AnyAction } from 'redux';
import { handleActions } from 'redux-actions';
import { MainActions } from 'redux/actions/main';

export interface State {
  list: MainItem[];
  detail: MainItem;
  loading: boolean;
}

const initialState: State = {
  list: null,
  loading: false,
  detail: null,
};

export const reducer = handleActions<State>(
  {
    [MainActions.GET_DATA]: (state: State) => ({
      ...state,
      loading: true,
    }),
    [MainActions.SUCCESS_GET_DATA]: (state: State, action: AnyAction) => ({
      ...state,
      list: action.payload,
      loading: false,
    }),
    [MainActions.ERROR_GET_DATA]: (state: State) => ({
      ...state,
      loading: false,
    }),
    [MainActions.GET_DETAILS]: (state: State) => ({
      ...state,
      loading: true,
    }),
    [MainActions.SUCCESS_GET_DETAILS]: (state: State, action: AnyAction) => ({
      ...state,
      detail: action.payload,
      loading: false,
    }),
  },
  initialState
);
