import styled, { css } from 'styled-components';

const ButtonArrow = styled.button`
	position: relative;
  background-image: url("data:image/svg+xml,%3Csvg 
  width='6' 
  height='10' 
  viewBox='0 0 6 10' 
  fill='none' 
  xmlns='http://www.w3.org/2000/svg'%3E%3Cpath 
  d='M1 8.99951L5 4.99951L1 0.999512' 
  stroke='${({ theme }) => (theme.orange)}'
  stroke-width='2' 
  stroke-linecap='round' 
  stroke-linejoin='round'/%3E%3C/svg%3E%0A");
	background-color: ${({ theme }) => (theme.background)};
	background-size: 0.8rem;
  background-repeat: no-repeat;
  background-position: center;
	border-radius: 10rem;
	border: none;
	cursor: pointer;
	width: 3.6rem;
	height: 3.6rem;
	
	${({ left }) => left && css`
    background-image: url("data:image/svg+xml,%3Csvg 
    width='6' 
    height='10' 
    viewBox='0 0 6 10' 
    fill='none' 
    xmlns='http://www.w3.org/2000/svg'%3E%3Cpath 
    d='M5 0.999512L1 4.99951L5 8.99951' 
		stroke='${({ theme }) => (theme.orange)}'
    stroke-width='2' 
    stroke-linecap='round' 
    stroke-linejoin='round'/%3E%3C/svg%3E%0A");
	`}
	
	
	::before {
		position: absolute;
		top: 0;
		left: 0;
		width: 0%;
		height: 100%;
		content: '';
		border-radius: 10rem;
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
    box-shadow: 0 2px 12px rgb(173, 152, 143);
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

export default ButtonArrow;
