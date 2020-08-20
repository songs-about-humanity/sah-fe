import React from 'react';
import { render } from 'react-dom';
import App from './components/App/App';
import store from './store';
import { Provider } from 'react-redux';
import { SocketProvider } from 'react-socket-io-hooks';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
