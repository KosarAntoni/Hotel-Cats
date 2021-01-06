import { ThemeProvider } from 'styled-components';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useLocation, useHistory } from 'react-router-dom';
import { themeLight, themeDark } from '../theme/mainTheme';
import GlobalStyle from '../theme/GlobalStyle';
import Header from '../components/organisms/Header/Header';
import Footer from '../components/organisms/Footer/Footer';
import Contacts from '../components/organisms/Contacts/Contacts';
import Modal from '../components/organisms/Modal/Modal';
import BookForm from '../components/organisms/BookForm/BookForm';
import BookSuccess from '../components/molecules/BookSuccess/BookSuccess';

const MainTemplate = ({ children }) => {
  const [theme, setTheme] = useState(themeLight);
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');

    const changeTheme = () => {
      if (media.matches) {
        setTheme(themeDark);
      } else {
        setTheme(themeLight);
      }
    };

    media.addEventListener('change', changeTheme, false);
    changeTheme();
  }, [theme]);

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
        <BookForm handleClose={() => history.push(`${location.pathname}${location.hash}`)} />
      </Modal>
      <Modal
        handleClose={() => history.push(`${location.pathname}${location.hash}`)}
        isShown={location.search === '?bookSuccess'}
      >
        <BookSuccess handleClose={() => history.push(`${location.pathname}${location.hash}`)} />
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
