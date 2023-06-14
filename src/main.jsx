import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from './styles/global';
import { ThemeProvider } from 'styled-components';
import { Inicio } from './pages/Inicio';
import theme from './styles/theme';

const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Inicio />
    </ThemeProvider>
  </React.StrictMode>
);
