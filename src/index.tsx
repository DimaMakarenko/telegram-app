import React from 'react';
import ReactDOM from 'react-dom';
// components
import App from 'navigation';
// styles
import './index.css';
import { themeBlue } from './theme';
import { ThemeProvider } from 'styled-components';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={themeBlue}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
