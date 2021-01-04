import styled, { css } from 'styled-components';

const Input = styled.input`
	position: relative;
	background-color: ${({ theme }) => (theme.background)};
	background-size: 25%;
  background-repeat: no-repeat;
  background-position: center right 7.5%;
	padding: 2rem 3rem;
	border-radius: 10rem;
	border-width: 2px;
	border-style: solid;
	border-color: ${({ theme, error }) => (error ? theme.red : theme.grey)};
	font-size: ${({ theme }) => theme.fontSize.s};
  font-family: 'Lato', sans-serif;
  color: ${({ theme }) => (theme.primary)};
	cursor: pointer;
	transition: all 0.3s;
	
	${({ square }) => square && css`
		border-width: 1px;
		border-radius: 0;
		padding: 0.5rem;
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

  ::-webkit-calendar-picker-indicator {
	  margin: 0;
    background-image: url("data:image/svg+xml,%3Csvg 
    xmlns='http://www.w3.org/2000/svg' 
    viewBox='0 0 448 512' 
    class='svg-inline--fa fa-calendar 
    fa-w-14 fa-3x'%3E%3Cpath 
    fill='${({ theme }) => theme.primary}' 
    d='M12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zm436-44v-36c0-26.5-21.5-48-48-48h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v36c0 6.6 5.4 12 12 12h424c6.6 0 12-5.4 12-12z' class=''%3E%3C/path%3E%3C/svg%3E");  
  }

`;

export default Input;
