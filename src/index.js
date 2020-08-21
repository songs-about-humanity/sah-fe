import React from 'react';
import { render } from 'react-dom';
import App from './components/App/App';
import store from './store';
import { Provider } from 'react-redux';
import { SocketProvider } from 'react-socket-io-hooks';
import reducer, { initialState } from './reducers/socketReducer';

render(
  <SocketProvider uri='http://localhost:7890' reducer={reducer} initialState={initialState} >
    <Provider store={store}>
      <App />
    </Provider>
  </SocketProvider>,
  document.getElementById('root')
);
