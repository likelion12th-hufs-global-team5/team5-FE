import React from 'react';
import { createRoot } from 'react-dom';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
// import Theme from './styles/theme';
import GlobalStyle from './styles/globalCss';

const rootElement=document.getElementById('root');

createRoot(rootElement).render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>
)

reportWebVitals();