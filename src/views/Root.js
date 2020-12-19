import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme/mainTheme';
import GlobalStyle from '../theme/GlobalStyle';

const Root = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
  </ThemeProvider>
);

export default Root;
