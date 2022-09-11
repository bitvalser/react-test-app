import { createSelector } from 'reselect';
import * as graph from '../reducers/main';
import { AppState } from '../reducers';

const mainState = (state: AppState): graph.State => state.mainState;

export const mainList = createSelector(mainState, (state) => state.list);
export const mainLoading = createSelector(mainState, (state) => state.loading);
export const selectDetail = createSelector(mainState, (state) => state.detail);
