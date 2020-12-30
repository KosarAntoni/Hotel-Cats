import { ThemeProvider } from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import { themeLight, themeDark } from '../theme/mainTheme';
import GlobalStyle from '../theme/GlobalStyle';
import Header from '../components/organisms/Header/Header';
import Footer from '../components/organisms/Footer/Footer';
import Contacts from '../components/organisms/Contacts/Contacts';

const MainTemplate = ({ children }) => {
  const theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? themeDark : themeLight;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      {children}
      <Contacts />
      <Footer />
    </ThemeProvider>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainTemplate;
