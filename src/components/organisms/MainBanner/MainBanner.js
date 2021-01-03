import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Heading from '../../atoms/Heading/Heading';
import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';
import backgroundImage from '../../../assets/f4245d9f6f335156a55557fd4011a131.png';

const Wrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 460px;
  padding: 5rem 2rem;
  background-color: ${({ theme }) => theme.yellow};
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: bottom 20% center;
  background-repeat: no-repeat;
  overflow: hidden;

  @media screen and ${({ theme }) => theme.viewPorts.viewport7} {
    padding: 14rem 21rem;
    min-height: 700px;
  }

  @media screen and ${({ theme }) => theme.viewPorts.viewport12} {
    align-items: flex-start;
    justify-content: center;
    padding: 14rem 21rem;
    min-height: 500px;
    max-width: 1600px;
    margin: 0 auto;
    background-position: 100% 90%;
    background-size: 60%;
  }

  ::after {
    position: absolute;
    top: -65rem;
    width: 100rem;
    height: 100rem;
    display: block;
    content: '';
    background-image: url("data:image/svg+xml,%3Csvg 
    width='339' 
    height='370' 
    viewBox='0 0 339 370' 
    fill='none' 
    xmlns='http://www.w3.org/2000/svg'%3E%3Cpath 
    d='M281.383 34.5841C297.528 63.7488 287.657 110.307 297.145 148.469C306.633 186.63 335.48 216.32 338.693 247.584C341.907 278.773 319.488 311.461 288.882 336.128C258.352 360.719 219.635 377.288 188.799 366.792C157.887 356.295 134.856 318.659 103.561 294.292C72.266 269.851 32.7074 258.68 13.7316 233.339C-5.32083 208.073 -3.86703 168.712 13.8846 140.447C31.6362 112.182 65.6091 95.0128 96.1389 70.4214C126.745 45.7552 153.832 13.6665 188.493 3.54508C223.155 -6.57635 265.238 5.34445 281.383 34.5841Z' 
    fill='url(%23paint0_linear)'/%3E%3Cdefs%3E%3ClinearGradient 
    id='paint0_linear' x1='169.5' y1='-22.041' x2='169.5' y2='277.139' 
    gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23FF9B53'/%3E%3Cstop 
    offset='1' stop-color='%23F8B653'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E%0A");    
    background-repeat: no-repeat;
    background-size: 90%;
    transform: rotate(-15deg);
    padding: 0;

    @media screen and ${({ theme }) => theme.viewPorts.viewport7} {
      top: -145rem;
      width: 200rem;
      height: 200rem;
    }   
    
    @media screen and ${({ theme }) => theme.viewPorts.viewport12} {
      top: -30rem;
      left: -20rem;
      width: 110rem;
      height: 110rem;
      transform: rotate(0deg);
    }
    
  }
`;

const StyledParagraph = styled(Paragraph)`
  z-index: 2;
  color: ${({ theme }) => theme.black};
`;

const StyledButtonIcon = styled(ButtonIcon)`
  z-index: 2;
  margin-top: 4rem;
`;

const StyledHeading = styled(Heading)`
  z-index: 2;
  color: ${({ theme }) => theme.black};
`;

const MainBanner = () => {
  const history = useHistory();
  const handleClick = () => (
    history.push('?book')
  );

  return (
    <Wrapper>
      <StyledParagraph>Saint Petersburg</StyledParagraph>
      <StyledHeading big>Kitten</StyledHeading>
      <StyledParagraph>Cozy hotel for cats</StyledParagraph>
      <StyledButtonIcon white onClick={handleClick}>Book now</StyledButtonIcon>
    </Wrapper>
  );
};

export default MainBanner;
