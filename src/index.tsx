import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// components
import App from 'routes';
// localization
import { I18nextProvider } from 'react-i18next';
import i18n from 'services/localization/i18n';
// styles
import './index.css';
import { themeWhite } from './theme';
import { ThemeProvider } from 'styled-components';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <I18nextProvider i18n={i18n}>
        <ThemeProvider theme={themeWhite}>
          <App />
        </ThemeProvider>
      </I18nextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
