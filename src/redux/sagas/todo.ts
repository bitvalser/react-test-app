import { TodoItem } from 'interfaces/todo-item.interface';
import { AnyAction } from 'redux';
import { call, CallEffect, put, PutEffect, takeEvery } from 'redux-saga/effects';
import { MainActions, successGetDataAction, successGetDetailsAction } from '@redux/actions/todo';
import * as TodoService from '@services/todo.service';

function* getData(): Generator<CallEffect | PutEffect, void, TodoItem[]> {
  try {
    const data = yield call(TodoService.fetchTodo);
    yield put(successGetDataAction(data));
  } catch (e) {}
}

function* getDetails(action: AnyAction): Generator<CallEffect | PutEffect, void, TodoItem> {
  try {
    const data = yield call(TodoService.fetchDetails, action.payload);
    yield put(successGetDetailsAction(data));
  } catch (e) {}
}

export function* todoSaga() {
  yield takeEvery(MainActions.GetData, getData);
  yield takeEvery(MainActions.GetDetails, getDetails);
}
