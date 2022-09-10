import ReactDOM from 'react-dom/client';
import './index.css';
import App from './root.component';
import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from 'redux/reducers';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { mainSaga } from 'redux/sagas/main';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(mainSaga);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
