import React from 'react';
import styled from 'styled-components';
import Link from '../../atoms/Link/Link';
import Logo from '../../atoms/Logo/Logo';

const Wrapper = styled.div`
	padding: 3rem 1.5rem;
  max-width: 970px;
  margin: auto;

  @media screen and ${({ theme }) => theme.viewPorts.viewport7} {
		padding: 1rem 4.5rem;
    display: flex;
		justify-content: space-between;
		align-content: center;
	}
`;

const LinksContainer = styled.nav`
	display: flex;
	margin-top: 2.5rem;

  @media screen and ${({ theme }) => theme.viewPorts.viewport7} {
    align-items: center;  
		margin-top: 0;
		
		// awful part maybe fix later XD 
		> * > * {
      margin-left: 2rem;
		}
  }
`;

const LinksColumnContainer = styled.ul`
	display: flex;
	flex-direction: column;
	max-width: 200px;

  @media screen and ${({ theme }) => theme.viewPorts.viewport7} {
    flex-direction: row;
  }
`;

const Separator = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.secondary};
`;

const CopyrightsWrapper = styled.ul`
	display: flex;
	flex-direction: column;
	padding: 2.5rem 1.5rem;

  @media screen and ${({ theme }) => theme.viewPorts.viewport7} {
		max-width: 970px;
		margin: 0 auto;
    padding: 1rem 4.5rem;
		flex-direction: row;
		justify-content: space-between;
  }
`;

const StyledLink = styled(Link)`
	width: fit-content;

  :first-child {
    margin-bottom: 1.5rem;
  }

  @media screen and ${({ theme }) => theme.viewPorts.viewport7} {
    :first-child {
      margin-bottom: 0;
    }
  }
`;

const Footer = () => (
  <>
    <Wrapper>
      <Logo href="https://google.com" />
      <LinksContainer>
        <LinksColumnContainer>
          <StyledLink href="https://google.com">Why us?</StyledLink>
          <StyledLink href="https://google.com">Rooms</StyledLink>
        </LinksColumnContainer>
        <LinksColumnContainer>
          <StyledLink href="https://google.com">Testimonials</StyledLink>
          <StyledLink href="https://google.com">Find us</StyledLink>
        </LinksColumnContainer>
      </LinksContainer>
    </Wrapper>
    <Separator />
    <CopyrightsWrapper>
      <StyledLink small href="https://google.com">&copy; 2019 All rights reserved</StyledLink>
      <StyledLink small href="https://google.com">Privacy policy</StyledLink>
    </CopyrightsWrapper>
  </>
);

export default Footer;
