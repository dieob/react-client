import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { fetchPostData } from './actions/index';

const store = createStore(rootReducer, applyMiddleware(thunk));

store.dispatch(fetchPostData());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);