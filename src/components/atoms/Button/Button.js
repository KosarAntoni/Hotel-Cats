import styled from 'styled-components';

const Button = styled.button`
	position: relative;
	background-color: ${({ theme, white }) => (white ? theme.background : theme.yellow)};
	background-size: 25%;
  background-repeat: no-repeat;
  background-position: center right 7.5%;
	padding: 2rem 3rem;
	border-radius: 10rem;
	border: none;
	box-shadow: ${({ theme, white }) => (white ? `0 0 0 2px inset ${theme.yellow}` : 'none')};
	font-size: ${({ theme }) => theme.fontSize.s};
	color: ${({ theme }) => (theme.primary)};
	cursor: pointer;
	
	::before {
		position: absolute;
		top: 0;
		left: 0;
		width: 0%;
		height: 100%;
		content: '';
		border-radius: 10rem;
		background-color: ${({ theme, white }) => (white ? theme.yellow : theme.background)};
		opacity: 0;
    transition: width 0.3s;
  }
	
	:hover::before {
    width: 100%;
    opacity: 0.05;
	}
	
	::after {
		position: absolute;
		top: 0;
		left: 0;
		border-radius: 10rem;
		display: block;
		content: '';
		width: 100%;
		height: 100%;
		opacity: 0.1;
    box-shadow: 0px 5px 25px rgb(26, 33, 47);
		transition: opacity 0.2s;
  }
	
	:hover::after,
	:focus::after{
		opacity: 0.2;
	}
	
	:focus {
		outline: none;
	}
`;

export default Button;
