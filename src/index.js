import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

ReactDOM.render(
  <App /> 
  , document.getElementById('root')
);

serviceWorker.unregister();