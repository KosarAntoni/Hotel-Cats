import styled, { keyframes } from 'styled-components';
import LoaderImg from '../../../assets/circle-notch-solid.svg';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Loader = styled.div`  
  background-image: url(${LoaderImg});
  width: 20rem;
  height: 20rem;
  
  animation: ${rotate} 2s linear infinite;
`;

export default Loader;
