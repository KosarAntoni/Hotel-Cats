import styled from 'styled-components';

const Input = styled.input`
	position: relative;
	background-color: ${({ theme }) => (theme.background)};
	background-size: 25%;
  background-repeat: no-repeat;
  background-position: center right 7.5%;
	padding: 2rem 3rem;
	border-radius: 10rem;
	border: ${({ theme, error }) => (`2px solid ${error ? theme.red : theme.secondary}`)};
	font-size: ${({ theme }) => theme.fontSize.s};
  font-family: 'Lato', sans-serif;
  color: ${({ theme }) => (theme.primary)};
	cursor: pointer;
	transition: all 0.3s;
	
	:hover {
    border: ${({ theme }) => (`2px solid ${theme.primary}`)};
  }
	
	:focus {
    border: ${({ theme }) => (`2px solid ${theme.orange}`)};
    outline: none;
  }
	
	::placeholder {
    color: ${({ theme }) => (theme.primary)};
    font-family: 'Lato', sans-serif;
  }
`;

export default Input;
