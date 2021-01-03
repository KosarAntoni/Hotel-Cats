import { ThemeProvider } from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import { useLocation, useHistory } from 'react-router-dom';
import { themeLight, themeDark } from '../theme/mainTheme';
import GlobalStyle from '../theme/GlobalStyle';
import Header from '../components/organisms/Header/Header';
import Footer from '../components/organisms/Footer/Footer';
import Contacts from '../components/organisms/Contacts/Contacts';
import Modal from '../components/organisms/Modal/Modal';
import BookForm from '../components/organisms/BookForm/BookForm';

const MainTemplate = ({ children }) => {
  const theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? themeDark : themeLight;
  const location = useLocation();
  const history = useHistory();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      {children}
      <Contacts />
      <Footer />
      <Modal
        handleClose={() => history.push(`${location.pathname}${location.hash}`)}
        isShown={location.search === '?book'}
      >
        <BookForm />
      </Modal>
    </ThemeProvider>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.oneOfType(
    [PropTypes.element, PropTypes.arrayOf(PropTypes.element)],
  ).isRequired,
};

export default MainTemplate;
