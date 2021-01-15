import React from "react";
import {ThemeProvider} from "styled-components";
import {MemoryRouter} from 'react-router-dom';
import {themeLight} from '../src/theme/mainTheme';

export const parameters = {
  actions: {argTypesRegex: "^on[A-Z].*"} ,
}

export const decorators = [
  (story) =>
    <MemoryRouter initialEntries={['/']}>
      <ThemeProvider theme={themeLight}>
       {story()}
      </ThemeProvider>
    </MemoryRouter>,
]