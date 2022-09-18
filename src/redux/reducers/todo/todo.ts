import { TodoItem } from '@interfaces/todo-item.interface';
import { AnyAction } from 'redux';
import { MainActions } from '@redux/actions/todo';
import { createReducer } from 'typesafe-actions';

export interface State {
  list: { [key: string]: TodoItem };
  listKeys: string[];
  detail: TodoItem;
  loading: boolean;
}

function mapTodos(data: TodoItem[]): { listKeys: string[]; list: { [key: string]: TodoItem } } {
  return data.reduce(
    ({ listKeys, list }, item) => ({
      listKeys: [...listKeys, item.id],
      list: { ...list, [item.id]: item },
    }),
    { listKeys: [], list: {} }
  );
}

const initialState: State = {
  list: null,
  listKeys: null,
  loading: false,
  detail: null,
};

export const reducer = createReducer(initialState, {
  [MainActions.GetData]: (state: State) => ({
    ...state,
    loading: true,
  }),
  [MainActions.SuccessGetData]: (state: State, action) => ({
    ...state,
    ...mapTodos(action.payload),
    loading: false,
  }),
  [MainActions.ErrorGetData]: (state: State) => ({
    ...state,
    loading: false,
  }),
  [MainActions.GetDetails]: (state: State) => ({
    ...state,
    loading: true,
  }),
  [MainActions.SuccessGetDetails]: (state: State, action: AnyAction) => ({
    ...state,
    detail: action.payload,
    loading: false,
  }),
});
