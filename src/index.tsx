import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { Provider } from './Provider';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import store from './store'

ReactDOM.render(
  <Provider stote={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
