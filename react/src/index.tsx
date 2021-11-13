import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import CssBaseline from '@mui/material/CssBaseline';
import {darken, ThemeProvider} from '@mui/material/styles';
import React from 'react';
import ReactDOM from 'react-dom';

import {App} from './App';
import {theme} from './theme';

document.body.style.backgroundColor = darken('#ffffff', 0.1);

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
