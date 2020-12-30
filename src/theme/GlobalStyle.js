import { createGlobalStyle } from 'styled-components';

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
    font-size: 62.5%;
    background-color: ${({ theme }) => theme.backgroundMain};
  }
  
  body {
    font-size: 1.4rem;
		font-family: 'Lato', sans-serif;
		//font-family: 'Rubik', sans-serif;  
		}
`;

export default GlobalStyle;
