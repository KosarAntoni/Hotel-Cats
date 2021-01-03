import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import MenuToggle from '../../atoms/MenuToggle/MenuToggle';
import Logo from '../../atoms/Logo/Logo';
import Link from '../../atoms/Link/Link';
import SocialLink from '../../atoms/SocialLink/SocialLink';
import instagramIcon from '../../../assets/icons/socialIcons/inst.svg';
import facebookIcon from '../../../assets/icons/socialIcons/fb.svg';
import vkontakteIcon from '../../../assets/icons/socialIcons/vk.svg';

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 7rem;
  padding: 1.5rem;
  z-index: 10;
  background-color: ${({ theme }) => theme.backgroundMain};

  @media screen and ${({ theme }) => theme.viewPorts.viewport7} {
    padding: 1.5rem 4.5rem;
  }
`;

const ContentContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1170px;
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
  overflow: hidden;
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
  color: ${({ theme }) => theme.black};
`;

const StyledWideScreenLink = styled(Link)`
  margin-left: 3rem;
`;

const StyledPhoneLink = styled(Link)`
  margin-top: 2.5rem;
  margin-right: auto;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.black};
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

      <ContentContainer isMenuOpen={isMenuOpen}>
        <StyledLogo as={HashLink} to="/#" />

        <WideScreenNavContainer>
          <StyledWideScreenLink
            as={HashLink}
            to="/home#whyus"
          >
            Why us?
          </StyledWideScreenLink>
          <StyledWideScreenLink as={HashLink} to="/catalog#">Rooms</StyledWideScreenLink>
          <StyledWideScreenLink
            as={HashLink}
            to="/home#testimonials"
          >
            Testimonials
          </StyledWideScreenLink>
          <StyledWideScreenLink
            as={HashLink}
            to="#contact"
          >
            Find us
          </StyledWideScreenLink>
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
          <StyledLink
            as={HashLink}
            to="/home#whyus"
            big
          >
            Why us?
          </StyledLink>
          <StyledLink
            as={HashLink}
            to="/catalog#"
            big
          >
            Rooms
          </StyledLink>
          <StyledLink
            as={HashLink}
            to="/home#testimonials"
            big
          >
            Testimonials
          </StyledLink>
          <StyledLink
            as={HashLink}
            to="#contact"
            big
          >
            Find us
          </StyledLink>
          <StyledPhoneLink big href="tel:8 (800) 333-55-99">8 (800) 333-55-99</StyledPhoneLink>
          <SocialLinksContainer>
            <SocialLink href="https://instagram.com/" target="_blank" icon={instagramIcon} />
            <SocialLink href="https://www.fb.com/" target="_blank" icon={facebookIcon} />
            <SocialLink href="https://www.vk.com/" target="_blank" icon={vkontakteIcon} />
          </SocialLinksContainer>
        </NavContainer>

      </ContentContainer>

    </Wrapper>
  );
};

export default Header;
