import { combineReducers } from 'redux';
import * as main from './main';

export interface AppState {
  mainState: main.State;
}

export const rootReducer = combineReducers<AppState>({
  mainState: main.reducer,
});
