import { ThemeProvider } from 'styled-components';
import React from 'react';
import { theme } from '../theme/mainTheme';
import GlobalStyle from '../theme/GlobalStyle';
import Header from '../components/organisms/Header/Header';
import Footer from '../components/organisms/Footer/Footer';

const MainTemplate = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Header />
    <Footer />
  </ThemeProvider>
);

export default MainTemplate;
