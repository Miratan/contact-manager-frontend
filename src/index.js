import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/index';

import './index.css';
import 'semantic-ui-css/semantic.min.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={ store }>
      <App /> 
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();