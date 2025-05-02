import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { AuthProvider } from './hooks/auth';
import { Routes } from './routes';
import { store } from './store';
import GlobalStyles from './styles/global';
import theme from './styles/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
