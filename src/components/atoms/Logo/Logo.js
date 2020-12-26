import styled from 'styled-components';
import logo from '../../../assets/icons/logo.svg';

const Logo = styled.a`
	display: block;
	width: 4rem;
	height: 4rem;
  background-image: url(${logo});
  background-size: 4rem;
  background-repeat: no-repeat;
  background-position: 50%;
	cursor: pointer;
`;

export default Logo;
