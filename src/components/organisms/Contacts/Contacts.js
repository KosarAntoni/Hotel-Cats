import React from 'react';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';
import Heading from '../../atoms/Heading/Heading';
import Link from '../../atoms/Link/Link';
import SocialLink from '../../atoms/SocialLink/SocialLink';
import instagramIcon from '../../../assets/icons/socialIcons/inst.svg';
import facebookIcon from '../../../assets/icons/socialIcons/fb.svg';
import vkontakteIcon from '../../../assets/icons/socialIcons/vk.svg';
import Logo from '../../atoms/Logo/Logo';

const Wrapper = styled.div`
  display: flex;
  max-width: 1600px;
  width: 100%;
  margin: 0 auto;
  padding: 4rem 1.5rem 34rem;
  overflow: hidden;
  background-color: ${({ theme }) => theme.yellow};

  @media screen and ${({ theme }) => theme.viewPorts.viewport7} {
    padding: 7rem 4.5rem ;
  }
`;

const MapContainer = styled.div`
  height: 30rem;
  position: absolute;
  right: -1.5rem;
  left: -1.5rem;
  bottom: -34rem;
  align-self: flex-start;

  @media screen and ${({ theme }) => theme.viewPorts.viewport7} {
    width: 60%;
    height: auto;
    left: auto;
    right: -4.5rem;
    top: -7rem;
    bottom: -7rem;
  }

  @media screen and ${({ theme }) => theme.viewPorts.viewport12} {
    right: 0;
  }
`;

const ContentContainer = styled.div`
  position: relative;
  display: flex;
	flex-direction: column;
	align-items: flex-start;
  max-width: 1170px;
  width: 100%;
  margin: 0 auto;
`;

const StyledHeading = styled(Heading)`
	margin-bottom: 4rem;
  color: ${({ theme }) => theme.black};

  @media screen and ${({ theme }) => theme.viewPorts.viewport7} {
    margin-bottom: 5rem;
  }
`;

const StyledSmallHeading = styled(Heading)`
  color: ${({ theme }) => theme.black};
`;

const SocialLinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 10rem;
  margin-top: 1rem;
`;

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.black};
  margin: 0.5rem 0 3rem;

  :hover,
  :focus{
    border-color: ${({ theme }) => theme.black};
  }
`;

const Contacts = () => (
  <Wrapper>
    <ContentContainer>
      <StyledHeading>Find us</StyledHeading>
      <StyledSmallHeading small>Location</StyledSmallHeading>
      <StyledLink small href="https://google.com">St. Petersburg, Bolshaya Konyushennaya St., 19</StyledLink>
      <StyledSmallHeading small>Working hours</StyledSmallHeading>
      <StyledLink small href="https://google.com">Every day from 9:00 to 20:00</StyledLink>
      <StyledSmallHeading small>Phone</StyledSmallHeading>
      <StyledLink small href="tel:123456789">123-456-789</StyledLink>
      <StyledSmallHeading small>Email</StyledSmallHeading>
      <StyledLink small href="mailto:mail@mail.com">mail@mail.com</StyledLink>
      <StyledSmallHeading small>Social</StyledSmallHeading>
      <SocialLinksContainer>
        <SocialLink href="https://www.google.pl/" icon={instagramIcon} />
        <SocialLink href="https://www.google.pl/" icon={facebookIcon} />
        <SocialLink href="https://www.google.pl/" icon={vkontakteIcon} />
      </SocialLinksContainer>

      <MapContainer>
        <GoogleMapReact
          defaultCenter={{
            lat: 59.938794,
            lng: 30.323083,
          }}
          defaultZoom={11}
        >
          <Logo lat={59.938794} lng={30.323083} href="https://google.com" />
        </GoogleMapReact>
      </MapContainer>
    </ContentContainer>
  </Wrapper>
);

export default Contacts;
