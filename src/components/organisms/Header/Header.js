import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import MenuToggle from '../../atoms/MenuToggle/MenuToggle';
import Logo from '../../atoms/Logo/Logo';
import Link from '../../atoms/Link/Link';
import SocialLink from '../../atoms/SocialLink/SocialLink';
import instagramIcon from '../../../assets/icons/socialIcons/inst.svg';
import facebookIcon from '../../../assets/icons/socialIcons/fb.svg';
import vkontakteIcon from '../../../assets/icons/socialIcons/vk.svg';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100vw;
  padding: 1.5rem;
`;

const ContentContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 970px;
  width: 100%;
  margin: 0 auto;
`;

const StyledLogo = styled(Logo)`
  position: relative;
`;

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  visibility: ${({ isMenuOpen }) => (isMenuOpen ? 'visible' : 'hidden')};
  transition-delay: ${({ isMenuOpen }) => (!isMenuOpen && '1s')};
  
  @media screen and ${({ theme }) => theme.viewPorts.viewport7} {
    display: none;
  }
`;

const Background = styled(motion.div)`
  position: absolute;
  top: 3rem;
  left: 3rem;
  width: 1rem;
  height: 1rem;
  max-height: 100vh;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.yellow};
  
  @media screen and ${({ theme }) => theme.viewPorts.viewport9} {
    top: -3rem;
    left: 50%
  }
`;

const NavContainer = styled(motion.nav)`
  position: absolute;
  top: 9rem;
  left: 0;
	display: flex;
  flex-direction: column;
  
  @media screen and ${({ theme }) => theme.viewPorts.viewport7} {
    display: none;
  }
`;

const WideScreenNavContainer = styled(motion.nav)`
  display: none;
  
  @media screen and ${({ theme }) => theme.viewPorts.viewport7} {
    display: flex;
    flex-direction: row;
  }
`;

const StyledLink = styled(Link)`
  margin-bottom: 1.5rem;
  margin-right: auto;
`;

const StyledWideScreenLink = styled(Link)`
  margin-left: 3rem;
`;

const StyledPhoneLink = styled(Link)`
  margin-top: 2.5rem;
  margin-right: auto;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
`;

const SocialLinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 12rem;
  margin-top: 2.5rem;
`;

const MenuToggleWrapper = styled.div`
  position: relative;
  
  @media screen and ${({ theme }) => theme.viewPorts.viewport7} {
    display: none;
  }
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Wrapper>
      <BackgroundContainer isMenuOpen={isMenuOpen}>
        <Background
          isMenuOpen={isMenuOpen}
          animate={isMenuOpen ? { scale: 350 } : { scale: 0 }}
          transition={isMenuOpen ? {
            type: 'spring',
            stiffness: 20,
            restDelta: 2,
          } : {
            delay: 0.5,
            type: 'spring',
            stiffness: 400,
            damping: 40,
          }}
        />
      </BackgroundContainer>

      <ContentContainer>
        <StyledLogo href="https://google.com" />

        <WideScreenNavContainer>
          <StyledWideScreenLink href="https://google.com">Why us?</StyledWideScreenLink>
          <StyledWideScreenLink href="https://google.com">Rooms</StyledWideScreenLink>
          <StyledWideScreenLink href="https://google.com">Testimonials</StyledWideScreenLink>
          <StyledWideScreenLink href="https://google.com">Find us</StyledWideScreenLink>
        </WideScreenNavContainer>

        <MenuToggleWrapper>
          <MenuToggle isOpen={isMenuOpen} toggle={() => setIsMenuOpen(!isMenuOpen)} />
        </MenuToggleWrapper>

        <NavContainer
          initial={{ opacity: 0, visibility: 'hidden' }}
          animate={isMenuOpen ? { opacity: 1, visibility: 'visible' } : { opacity: 0, visibility: 'hidden' }}
          transition={isMenuOpen ? {
            type: 'spring',
            stiffness: 400,
            damping: 40,
            delay: 0.5,
          } : {
            type: 'spring',
            stiffness: 400,
            damping: 40,
          }}
        >
          <StyledLink big href="https://google.com">Why us?</StyledLink>
          <StyledLink big href="https://google.com">Rooms</StyledLink>
          <StyledLink big href="https://google.com">Testimonials</StyledLink>
          <StyledLink big href="https://google.com">Find us</StyledLink>
          <StyledPhoneLink big href="tel:8 (800) 333-55-99">8 (800) 333-55-99</StyledPhoneLink>
          <SocialLinksContainer>
            <SocialLink href="https://www.google.pl/" icon={instagramIcon} />
            <SocialLink href="https://www.google.pl/" icon={facebookIcon} />
            <SocialLink href="https://www.google.pl/" icon={vkontakteIcon} />
          </SocialLinksContainer>
        </NavContainer>

      </ContentContainer>

    </Wrapper>
  );
};

export default Header;