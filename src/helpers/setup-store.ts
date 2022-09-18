import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from '@redux/reducers';
import createSagaMiddleware from 'redux-saga';
import { todoSaga } from '@redux/sagas/todo';

export function setupStore() {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(todoSaga);

  return store;
}
