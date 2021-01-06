import styled, { css } from 'styled-components';

const Input = styled.input`
	position: relative;
	background-color: ${({ theme }) => (theme.background)};
	background-size: 25%;
  background-repeat: no-repeat;
  background-position: center right 7.5%;
	padding: 1.5rem;
	border-radius: 10rem;
	border-width: 2px;
	border-style: solid;
	border-color: ${({ theme, error }) => (error ? theme.red : theme.grey)};
	font-size: ${({ theme }) => theme.fontSize.s};
  font-family: 'Lato', sans-serif;
  color: ${({ theme }) => (theme.primary)};
	cursor: pointer;
	transition: all 0.3s;

  @media screen and ${({ theme }) => theme.viewPorts.viewport7} {
    padding: 2rem 3rem;
  }
	
	${({ square }) => square && css`
		border-width: 1px;
		border-radius: 0;
		padding: 0.5rem;

    @media screen and ${({ theme }) => theme.viewPorts.viewport7} {
      padding: 0.5rem;
    }
	`}
	
	:hover {
    border-color: ${({ theme }) => theme.primary};
  }
	
	:focus {
    border-color: ${({ theme }) => theme.orange};
    outline: none;
  }
	
	::placeholder {
    color: ${({ theme }) => (theme.primary)};
    font-family: 'Lato', sans-serif;
  }
	
`;

export default Input;
