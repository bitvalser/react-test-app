import { createSelector } from 'reselect';
import * as todo from '../reducers/todo/todo';
import { AppState } from '../reducers';

const todoState = (state: AppState): todo.State => state.todoState;

export const todoList = createSelector(todoState, (state) => state.list);
export const todoListKeys = createSelector(todoState, (state) => state.listKeys);
export const mainLoading = createSelector(todoState, (state) => state.loading);
export const selectDetail = createSelector(todoState, (state) => state.detail);
