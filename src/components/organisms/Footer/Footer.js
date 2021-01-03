import React from 'react';
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Link from '../../atoms/Link/Link';
import Logo from '../../atoms/Logo/Logo';

const Wrapper = styled.footer`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1.5rem;

  @media screen and ${({ theme }) => theme.viewPorts.viewport7} {
    padding: 1.5rem 4.5rem;
  }
`;

const LinksContainer = styled.nav`
	display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 3rem 3rem;
	margin-top: 2.5rem;
  align-items: start;
  max-width: 400px;

  @media screen and ${({ theme }) => theme.viewPorts.viewport7} {
    grid-template-columns: auto auto auto auto;
    grid-template-rows: 3rem;
    margin-top: 0;
    justify-items: end;
		
		> * {
      margin-left: 3rem;
		}
  }
`;

const Separator = styled.div`
  height: 1px;
  background-color: ${({ theme }) => theme.secondary};
  max-width: 1170px;
  width: 100%;
  margin: 3rem auto 1.5rem;

  @media screen and ${({ theme }) => theme.viewPorts.viewport7} {
    margin: 1.5rem auto;
  }
`;

const ContentContainer = styled.ul`
	display: flex;
	flex-direction: column;

  @media screen and ${({ theme }) => theme.viewPorts.viewport7} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    max-width: 1170px;
    width: 100%;
    margin: 0 auto;
  }
`;

const StyledLink = styled(Link)`
  text-align: left;
	 width: fit-content;
`;

const Footer = () => (
  <>
    <Wrapper>
      <ContentContainer>
        <Logo as={RouterLink} to="/" />
        <LinksContainer>
          <StyledLink
            as={HashLink}
            to={{
              pathname: '/home',
              hash: '#whyus',
            }}
          >
            Why us?
          </StyledLink>
          <StyledLink
            as={RouterLink}
            to="/catalog"
          >
            Rooms
          </StyledLink>
          <StyledLink
            as={HashLink}
            to={{
              pathname: '/home',
              hash: '#testimonials',
            }}
          >
            Testimonials
          </StyledLink>
          <StyledLink
            as={HashLink}
            to={{
              hash: '#contact',
            }}
          >
            Find us
          </StyledLink>
        </LinksContainer>
      </ContentContainer>
      <Separator />
      <ContentContainer>
        <StyledLink small href="https://kitten-hotel4cats.netlify.app/">&copy; 2019 All rights reserved</StyledLink>
        <StyledLink small href="https://kitten-hotel4cats.netlify.app/">Privacy policy</StyledLink>
      </ContentContainer>
    </Wrapper>
  </>
);

export default Footer;
