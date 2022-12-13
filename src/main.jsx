import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyles from './styles/global';
import theme from './styles/theme';
import { ThemeProvider } from 'styled-components';
import { Details } from './pages/Details';
import { SignIn } from './pages/SignIn';
import { SignOut } from './pages/SignOut';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <SignOut />
    </ThemeProvider>
  </React.StrictMode>
);
