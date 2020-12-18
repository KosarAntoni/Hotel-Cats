import { createGlobalStyle } from 'styled-components';
import { theme } from './mainTheme';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box; 
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
  }
  
  ul {
  	list-style: none;
  }
  
  html {
    font-size: 50%;
    padding-bottom: 30vh;
  }
  
  body {
    font-size: 1.4rem;
		font-family: 'Lato', sans-serif;
		//font-family: 'Rubik', sans-serif;  
		}
  
      @media screen and ${theme.viewPorts.viewport7} {
				html {
					font-size: 62.5%;
					padding-bottom: 0;
				}
      }

`;

export default GlobalStyle;
