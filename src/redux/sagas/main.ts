import { MainItem } from 'interfaces/main-item.interface';
import { call, put, takeEvery } from 'redux-saga/effects';
import { MainActions, successGetDataAction, successGetDetailsAction } from 'redux/actions/main';
import { fetchData, fetchDetails } from 'services/main';

function* getData(): Generator<any, any, MainItem[]> {
  try {
    const data = yield call(fetchData);
    yield put(successGetDataAction(data));
  } catch (e) {}
}

function* getDetails(action: any): Generator<any, any, MainItem> {
  try {
    const data = yield call(fetchDetails, action.payload);
    yield put(successGetDetailsAction(data));
  } catch (e) {}
}

export function* mainSaga() {
  yield takeEvery(MainActions.GET_DATA, getData);
  yield takeEvery(MainActions.GET_DETAILS, getDetails);
}
