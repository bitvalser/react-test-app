import { TodoItem } from '@interfaces/todo-item.interface';
import { getDataAction, getDetailsAction, successGetDataAction, successGetDetailsAction } from '@redux/actions/todo';
import { State, reducer } from '../todo';

const initialState: State = {
  detail: null,
  listKeys: null,
  list: null,
  loading: false,
};

test('Todo getDataAction test', () => {
  expect(reducer(initialState, getDataAction())).toEqual({ detail: null, list: null, listKeys: null, loading: true });
});

test('Todo successGetDataAction test', () => {
  const mainItemsMock: TodoItem[] = [{ id: '1', title: '2' }];
  expect(reducer(initialState, successGetDataAction(mainItemsMock))).toEqual({
    detail: null,
    listKeys: ['1'],
    list: { '1': { id: '1', title: '2' } },
    loading: false,
  });
});

test('Todo getDataAction test', () => {
  expect(reducer(initialState, getDetailsAction(''))).toEqual({
    detail: null,
    list: null,
    listKeys: null,
    loading: true,
  });
});

test('Todo successGetDetailsAction test', () => {
  const detailMock: TodoItem = { id: '1', title: '2' };
  expect(reducer(initialState, successGetDetailsAction(detailMock))).toEqual({
    detail: { id: '1', title: '2' },
    listKeys: null,
    list: null,
    loading: false,
  });
});
