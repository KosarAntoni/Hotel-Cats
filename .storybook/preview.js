import React from "react";
import {ThemeProvider} from "styled-components";
import {themeLight} from "../src/theme/mainTheme";

export const parameters = {
  actions: {argTypesRegex: "^on[A-Z].*"} ,
}

export const decorators = [
  (story) => <ThemeProvider theme={themeLight}>
    {story()}
  </ThemeProvider>,
]