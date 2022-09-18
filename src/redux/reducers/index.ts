import { combineReducers } from 'redux';
import * as todo from './todo';

export interface AppState {
  todoState: todo.State;
}

export const rootReducer = combineReducers<AppState>({
  todoState: todo.reducer,
});
