import { MainItem } from 'interfaces/main-item.interface';
import { getDataAction, getDetailsAction, successGetDataAction, successGetDetailsAction } from 'redux/actions/main';
import { reducer } from 'redux/reducers/main';
import * as main from '../redux/reducers/main';

const initialState: main.State = {
  detail: null,
  list: null,
  loading: false,
};

test('Main getDataAction test', () => {
  expect(reducer(initialState, getDataAction())).toEqual({ detail: null, list: null, loading: true });
});

test('Main successGetDataAction test', () => {
  const mainItemsMock: MainItem[] = [{ id: '1', title: '2' }];
  expect(reducer(initialState, successGetDataAction(mainItemsMock))).toEqual({
    detail: null,
    list: [{ id: '1', title: '2' }],
    loading: false,
  });
});

test('Main getDataAction test', () => {
  expect(reducer(initialState, getDetailsAction(''))).toEqual({ detail: null, list: null, loading: true });
});

test('Main successGetDetailsAction test', () => {
  const detailMock: MainItem = { id: '1', title: '2' };
  expect(reducer(initialState, successGetDetailsAction(detailMock))).toEqual({
    detail: { id: '1', title: '2' },
    list: null,
    loading: false,
  });
});
