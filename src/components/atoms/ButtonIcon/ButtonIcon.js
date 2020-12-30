import styled from 'styled-components';

const ButtonIcon = styled.button`
	position: relative;
	background-color: ${({ theme, white }) => (white ? theme.background : theme.orange)};
  background-image: url("data:image/svg+xml, 
  %3Csvg version='1.1' 
  xmlns='http://www.w3.org/2000/svg' 
  xmlns:xlink='http://www.w3.org/1999/xlink' 
  x='0px' y='0px' viewBox='0 0 34 34' 
  xmlSpace='preserve' 
  %3E%3Cpath 
  fill='${({ theme, white }) => (white ? theme.orange : theme.background)}' 
  d='M17.5,34c-0.3,0-0.7,0-1,0C7.8,33.9,0.1,26.2,0,17.5c0-0.3,0-0.7,0-1C0,4.4,14.2-4,24.8,1.9 
  C40.3,10,34.8,33.4,17.5,34z 
  M20.4,25.5c3.1,0.1,3.4-3.8,1.2-5.3c-1.2-0.9-1-2.5-1.9-3.6c-1.6-2.2-5.1-1.3-5.6,1.3 
  c-0.2,1-0.5,1.8-1.3,2.4c-2.1,1.5-1.7,5.1,1.2,5.2C16.1,25.2,18.3,25,20.4,25.5z 
  M27.4,17.4c-0.2-5.6-7.2-2.6-5.6,1.9 C23.1,22.9,27.5,20.2,27.4,17.4z 
  M7.6,17.1c0,4.5,6.2,5.1,5.7,0.2C12.9,13.4,7.6,12.8,7.6,17.1z 
  M23.6,11.5c-0.4-5.5-7-2.6-5.5,1.9 C19.5,16.9,23.9,14.7,23.6,11.5z 
  M17.2,12.2c0.2-3.1-4.1-5.4-5.5-2C10.2,14.7,16.7,17.8,17.2,12.2z' /%3E%3C/svg%3E");  
	background-size: 4rem;
  background-repeat: no-repeat;
  background-position: center right 1rem;
	padding: 2rem 6rem 2rem 3rem;
	border-radius: 10rem;
	border: none;
	font-size: ${({ theme }) => theme.fontSize.s};
	color: ${({ theme, white }) => (white ? theme.primary : theme.background)};
	cursor: pointer;
	
	::before {
		position: absolute;
		top: 0;
		left: 0;
		width: 0%;
		height: 100%;
		content: '';
		border-radius: 10rem;
		background-color: ${({ theme, white }) => (white ? theme.orange : theme.background)};
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
    box-shadow: 0 5px 25px rgb(0, 0, 0);
		transition: opacity 0.2s;
  }
	
	:hover::after,
	:focus::after{
		opacity: 0.15;
	}
	
	:focus {
		outline: none;
	}
`;

export default ButtonIcon;
