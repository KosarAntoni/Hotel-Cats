import React from 'react';
import styled from 'styled-components';
import Link from '../../atoms/Link/Link';
import Logo from '../../atoms/Logo/Logo';

const Wrapper = styled.div`
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
  //
  // :first-child {
  //   margin-bottom: 1.5rem;
  // }
  //
  // @media screen and ${({ theme }) => theme.viewPorts.viewport7} {
  //   :first-child {
  //     margin-bottom: 0;
  //   }
  // }
`;

const Footer = () => (
  <>
    <Wrapper>
      <ContentContainer>
        <Logo href="https://google.com" />
        <LinksContainer>
          <StyledLink href="https://google.com">Why us?</StyledLink>
          <StyledLink href="https://google.com">Rooms</StyledLink>
          <StyledLink href="https://google.com">Testimonials</StyledLink>
          <StyledLink href="https://google.com">Find us</StyledLink>
        </LinksContainer>
      </ContentContainer>
      <Separator />
      <ContentContainer>
        <StyledLink small href="https://google.com">&copy; 2019 All rights reserved</StyledLink>
        <StyledLink small href="https://google.com">Privacy policy</StyledLink>
      </ContentContainer>
    </Wrapper>
  </>
);

export default Footer;
