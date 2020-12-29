import { ThemeProvider } from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import { theme } from '../theme/mainTheme';
import GlobalStyle from '../theme/GlobalStyle';
import Header from '../components/organisms/Header/Header';
import Footer from '../components/organisms/Footer/Footer';

const MainTemplate = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Header />
    {children}
    <Footer />
  </ThemeProvider>
);

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainTemplate;
